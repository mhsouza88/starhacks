import * as C from './styles'
import WomenSidebar from '../../components/WomenSidebar/WomenSidebar'
import Sidebar from '../../components/Sidebar/Sidebar'

export const HomePage = () => {
    return (
        <C.Container>
            <C.WomenSidebarContainer>
                <WomenSidebar />
            </C.WomenSidebarContainer>
            <C.SidebarContainer>
                <Sidebar />
            </C.SidebarContainer>
        </C.Container>
    )
}

export default HomePage