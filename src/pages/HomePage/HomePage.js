import * as C from './styles'
import WomenSidebar from '../../components/WomenSidebar/WomenSidebar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const HomePage = () => {
    const global = useContext(GlobalContext)
    return (
        <C.Container>
            <C.WomenSidebarContainer>
                <WomenSidebar
                 image_path={global.womenData?.image_path} 
                 name={global.womenData?.name}
                 description={global.womenData?.details}
                 website={global.womenData?.website}
                 />
            </C.WomenSidebarContainer>
            <C.SidebarContainer>
                <Sidebar />
            </C.SidebarContainer>
        </C.Container>
    )
}

export default HomePage