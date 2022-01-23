import * as C from './styles'
import WomenSidebar from '../../components/WomenSidebar/WomenSidebar'
import Sidebar from '../../components/Sidebar/Sidebar'

export const HomePage = (props) => {
    return (
        <C.Container>
            <C.WomenSidebarContainer>
                <WomenSidebar
                    image_path={props.image_path} 
                    name={props.name}
                    details={props.details}
                    website={props.website}
                 />
            </C.WomenSidebarContainer>
            <C.SidebarContainer>
                <Sidebar />
            </C.SidebarContainer>
        </C.Container>
    )
}

export default HomePage