import * as C from './styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import BASE_URL from '../../constants/Url'
import { useRequestData } from '../../hooks/useRequestData'
import { withTheme } from 'styled-components'


export const WomenSidebar = (props) => {
    const list = useRequestData([], `${BASE_URL}`)


    // const generate = (arr) => {
    //     const index = Math.floor(Math.random() * arr.length)
    //     return arr[index]
    // }

    const finalList = list.map((l) => {
   
      return (
          <C.Container>
             <C.ContainerTitleAndImage>
                <C.Avatar>
                    <img src={list.image_path} width={list.image_width} {{"backgroundColor":"white", "marginBottom": "5rem", "padding":"3rem 3rem 0 3rem", "borderRadius":"35px", "boxShadow":"0 10px 40px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 50, 0.19)"}} alt="Avatar" title="Avatar"/>
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
