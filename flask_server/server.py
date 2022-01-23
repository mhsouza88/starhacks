from sklearn.feature_extraction import image
from flask import Flask
import pandas as pd
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import *
import random
import json

app = Flask(__name__)

with open('assets/data.json') as json_file:
    data = json.load(json_file)


@app.route('/members')
def members():
    return {'members': []}


# Get environment variables
USER = os.getenv('API_USER')
KEY = os.environ.get('API_KEY')

pd.set_option('display.max_columns', None)

# Create DataFrame from JSON file
df = pd.read_json("assets/index.json")

# Drops duplicated rows based on the name
df.drop_duplicates(subset=["name"], keep=False, inplace=True)

# Select a few rows, discard the rest
df = df[['id', 'name', 'details', 'website', 'image_path']]


def pick_random_figure():
    # Select a random integer and use it as index from the df to retrieve row
    num = random.randrange(0, len(df))
    row = df.loc[num]
    name = row['name']
    description = row['details']
    website = row['website']
    image_path = row['image_path']
    return [name, description, website, image_path]


[name, description, website, image_path] = pick_random_figure()


def convert_data_to_contact_list(data):
    # Converts the data from the JSON file to the format required by SendGrid
    to_emails = []
    for contact in data["contacts"]:
        to_emails.append(To(email=contact['email'], name=contact['name']))
    return to_emails


# Using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
# Initialize SendGrid Mail
message = Mail(
    from_email='wiredwomenhack@gmail.com',
    to_emails=convert_data_to_contact_list(data),
    html_content='<strong>and easy to do anywhere, even with Python</strong>')


# Set data for the template using variables returnes from pick_random_figure
message.dynamic_template_data = {"figure_name": name,
                                 "figure_description": description,
                                 "figure_website": website,
                                 "figure_image": image_path,
                                 "sender_email": "wiredwomenhack@gmail.com"}


# Set template id to the one on the SendGrid platform
message.template_id = 'd-974d30334c8a487e95a3e4e79d0d8f00'


# Send email and get response
try:
    sendgrid_client = SendGridAPIClient(KEY)
    response = sendgrid_client.send(message)

    print(response.status_code, '\n')
    print(response.body, '\n')
    print(response.headers)
# Catch errors
except Exception as e:
    print(e.message)
