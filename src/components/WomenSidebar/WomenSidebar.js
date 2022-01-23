import * as C from './styles'
import Puppy from '../../assets/puppy.jpeg'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export const WomenSidebar = () => {
    return (
        <C.Container>
            <C.ContainerTitleAndImage>
            <C.Avatar>
                <img src={Puppy} alt="Avatar" title="Avatar"/>
                <C.Title>[ Woman's name ] - Field of study</C.Title>
            </C.Avatar>
            </C.ContainerTitleAndImage>
            <C.Description>
                <Typography variant="body2" gutterBottom component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in pulvinar urna, nec rutrum leo. Praesent et arcu a magna maximus auctor a sit amet purus. Aenean ultricies mi ac massa sagittis dignissim. Pellentesque sodales varius justo sed eleifend. Nullam pharetra ac enim a vestibulum. Suspendisse ante erat, tincidunt interdum risus sed, accumsan interdum quam. Suspendisse vulputate, augue id ornare scelerisque, dolor arcu faucibus libero, vitae condimentum libero sem eget sem. Vivamus at ultrices lectus, ac molestie urna. Donec convallis pulvinar enim, non efficitur ex tristique a. Ut pulvinar ligula est, quis dignissim leo mattis vitae. Sed at blandit purus, auctor posuere augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut vitae placerat tortor.
                </Typography>
                <C.LinkToTheirPage>
                <Link href="#" underline="none">
                    {'Link to Wikipedia'}
                </Link>
                </C.LinkToTheirPage>
           </C.Description>
        </C.Container>
    )
}

export default WomenSidebar