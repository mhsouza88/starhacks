import * as C from './styles'
import * as React from 'react'
import Puppy from '../../assets/puppy.jpeg'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

export const Sidebar = () => {
    const [value, setValue] = React.useState(0)
    return (
        <C.Container>
            <C.ContainerTitleAndImage>
            <C.Avatar>
                <img src={Puppy} alt="Logo" title="Logo"/>
            </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography 
                    variant="h5" 
                    gutterBottom 
                    component="div">
                    Join our mailing list!
                </Typography>
                </C.Description>
                <C.MailingList>
                <form>
                <TextField
                    id="outlined-basic" 
                    label="Your e-mail here" 
                    variant="outlined"
                    type="email"
                    size="small"
                />
                <Button 
                    variant="outlined"
                    type="submit">
                    Submit
                </Button>
                </form>
                </C.MailingList>
                <C.GithubContainer>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                <BottomNavigationAction label="Ana" href="https://github.com/anapsilvestrinf" target="_blank" icon={<GitHubIcon />} />
                <BottomNavigationAction label="Clara" href="https://github.com/bloomwithtech" target="_blank" icon={<GitHubIcon />} />
                <BottomNavigationAction label="Maria" href="https://github.com/mhsouza88/" target="_blank" icon={<GitHubIcon />} />
            </BottomNavigation>
            </C.GithubContainer>
        </C.Container>
    )
}

export default Sidebar