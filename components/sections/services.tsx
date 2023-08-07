import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';

import art from '../../public/assets/home/services/art.png';
import frens from '../../public/assets/home/services/frend.png';
import food from '../../public/assets/home/services/food.png';
import relax from '../../public/assets/home/services/relax.png';
import workshop from '../../public/assets/home/services/workshop.png';
import buildathon from '../../public/assets/home/services/buildathon.png';


interface SponsorData {
    src: string;
    title: string
}

const itemData: SponsorData[] = [
    {
        src: art.src,
        title: 'Art'
    },
    {
        src: frens.src,
        title: 'Frens'
    },
    {
        src: food.src,
        title: 'Food'
    },
    {
        src: buildathon.src,
        title: 'Buildathon'
    },
    {
        src: relax.src,
        title: 'Relax'
    },
    {
        src: workshop.src,
        title: 'Workshop'
    }
];

function ServicesSection() {

    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.dark' }}
            id='services'
        >
            <Container >
                <Grid container justifyContent={'space-around'} alignItems={'baseline'}>
                    {itemData.map((item) => (
                        <Grid item xs={6} sm={4} md={2} key={item.src}>
                            <Box padding={3} >
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    width="100%"
                                    image={item.src}
                                    alt={item.title}
                                />
                            </Box>
                            <Typography variant="h4" fontSize={'1em'} fontFamily={'futurist-fixed-width'} color={"common.white"} textAlign={'center'}>
                                {item.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default ServicesSection;