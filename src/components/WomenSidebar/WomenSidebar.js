import * as C from './styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useState } from 'react'
import BASE_URL from '../../constants/Url'
import { useRequestData } from '../../hooks/useRequestData'

export const WomenSidebar = (props) => {
    const [getWoman, setGetWoman] = useState([])

    const list = useRequestData([], `${BASE_URL}`)

    // const generate = (arr) => {
    //     const index = Math.floor(Math.random() * arr.length)
    //     return arr[index]
    // }

    const finalList = list.map((l) => {
        return (
            <div><C.ContainerTitleAndImage>
            <C.Avatar>
                <img src={l.image_path} width={l.image_width} alt="Avatar" title="Avatar"/>
                <C.Title>{l.name}</C.Title>
            </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography variant="body2" gutterBottom component="div">
                    {l.details}
                </Typography>
                <C.LinkToTheirPage>
                <Link href={l.website} target="_blank" underline="none">
                    {'More information'}
                </Link>
                </C.LinkToTheirPage>
           </C.Description>
           </div>
        )
    })

    return (
        <C.Container>
            {finalList.length > 0 ? finalList : <p>Loading...</p>}
        </C.Container>
    )
}

export default WomenSidebar