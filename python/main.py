import pandas as pd
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import *
import random

# Get environment variables
USER = os.getenv('API_USER')
KEY = os.environ.get('API_KEY')

pd.set_option('display.max_columns', None)

df = pd.read_json("assets/index.json")


df.drop_duplicates(subset=["name"], keep=False, inplace=True)
df = df[['id', 'name', 'details', 'website', 'image_path']]

# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python


message = Mail(
    from_email='wiredwomenhack@gmail.com',
    to_emails='spainpenguincubes@gmail.com',
    html_content='<strong>and easy to do anywhere, even with Python</strong>')

message.reply_to = ReplyTo(
    email="wiredwomenhack@gmail.com",
    name="Wired Women"
)
message.dynamic_template_data = {"figure_name": "Ada King",
                                 "figure_description": "Augusta Ada King, Countess of Lovelace, born Augusta Ada Byron and now commonly known as Ada Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Her notes on the engine include what is recognized as the first algorithm intended to be carried out by a machine. Because of this, she is often described as the world's first computer programmer.",
                                 "figure_website": "http://en.wikipedia.org/wiki/Ada_Lovelace",
                                 "figure_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/220px-Ada_Lovelace_portrait.jpg",
                                 "sender_email": "wiredwomenhack@gmail.com"}
message.template_id = 'd-3d7d9ec4c2b249b7baa51602e8293723'

try:
    sendgrid_client = SendGridAPIClient(KEY)
    response = sendgrid_client.send(message)
    print(response.status_code)
    print(response.body)
    print(response.headers)
except Exception as e:
    print(e.message)
