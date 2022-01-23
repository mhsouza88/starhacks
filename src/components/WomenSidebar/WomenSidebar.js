import * as C from './styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import BASE_URL from '../../constants/Url'
import { useRequestData } from '../../hooks/useRequestData'


export const WomenSidebar = (props) => {
    const list = useRequestData([], `${BASE_URL}`)

    return (
        <C.Container>
           <C.ContainerTitleAndImage>
            <C.Avatar>
                <img src={list.image_path} width={list.image_width} alt="Avatar" title="Avatar"/>
                <C.Title>{list.name}</C.Title>
            </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography variant="body2" gutterBottom component="div">
                    {list.details}
                </Typography>
                <C.LinkToTheirPage>
                <Link href={list.website} target="_blank" underline="none">
                    {'More information'}
                </Link>
                </C.LinkToTheirPage>
           </C.Description>
        </C.Container>
    )
}

export default WomenSidebar