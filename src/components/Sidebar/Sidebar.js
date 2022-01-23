import * as C from './styles'
import * as React from 'react'
import Logo from '../../assets/Logo.png'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { styled } from '@mui/system'

  const IconsAtBottom = styled(BottomNavigationAction)(({ theme }) => ({
    '&.Mui-selected, &.css-18gz5c0-MuiButtonBase-root-MuiBottomNavigationAction-root': {
      color: '#7342A5'
    }
  }))

export const Sidebar = () => {
    const [value, setValue] = React.useState(0)
    const [email, setEmail] = React.useState("")
    const [inputLabel, setInputLabel] = React.useState("Please enter your email")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setInputLabel("Done!")
    }

    return (
        <C.Container>
            <C.ContainerTitleAndImage>
                <C.Avatar>
                    <img src={Logo} alt="Logo" title="Logo"/>
                </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{color: '#2D1656'}}
                    component="div">
                    Join our mailing list!
                </Typography>
                </C.Description>
                <p>{inputLabel}</p>
                <C.MailingList>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        color="secondary"
                        label="Your e-mail here"
                        variant="outlined"
                        type="email"
                        size="small"
                        sx={{borderColor: '#2D1656' }}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        sx={{color: '#2D1656', borderColor: '#2D1656'}}
                        style={{"height":"35px"}}>
                        submit
                    </Button>
                </form>
            </C.MailingList>
            <C.GithubContainer>
                <BottomNavigation
                        color="#7342A5"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                >
                    <IconsAtBottom sx={{color: "#2D1656", backgroundColor: '#B291F2'}} label="Ana" href="https://github.com/anapsilvestrinf" target="_blank" icon={<GitHubIcon />} />
                    <IconsAtBottom sx={{color: "#2D1656", backgroundColor: '#B291F2'}} label="Clara" href="https://github.com/bloomwithtech" target="_blank" icon={<GitHubIcon />} />
                    <IconsAtBottom sx={{color: "#2D1656", backgroundColor: '#B291F2'}} label="Maria" href="https://github.com/mhsouza88/" target="_blank" icon={<GitHubIcon />} />
                </BottomNavigation>
            </C.GithubContainer>
        </C.Container>
    )
}

export default Sidebar
