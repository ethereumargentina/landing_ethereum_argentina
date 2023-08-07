import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

import neopower from '../../public/assets/event-partners/neopower.svg'
import layer from '../../public/assets/event-partners/layer-x.svg'
import builders from '../../public/assets/event-partners/builders.svg'
import Image from 'next/image';
import speaker1 from '../../public/assets/speakers/speaker-1.svg'


interface Props {
    speaker: Speaker;
}
interface Speaker {
    name: string;
    position: string;
    company?: string;
    image: string;
}

const speakerStyle = {
    backgroundColor: '#74ACDF',
    borderTopRightRadius: '27.7px',
    borderBottomLeftRadius: '37.5px',
    maxWidth: '80%',
    margin: 'auto'
}

const SpeakerComponent = (props: Props) => {
    return (
        <Grid item xs={6} sm={4} md={3} mb={3}>
            <Box color='#74ACDF'>
                <Box padding={1} sx={speakerStyle} my={3}>
                    <Image
                        src={speaker1.src}
                        alt={props.speaker.name}
                        loading="lazy"
                        width={150}
                        height={150}
                        style={{ width: '100%', height: '100%' }}
                    />
                </Box>
                <Typography variant='h2' fontFamily={'becker-wood-type'} fontSize='2rem' align='center' my={2}>
                    {props.speaker.name}
                </Typography>
                <Typography fontFamily='futura-book-bt' align='center' fontSize='1.3rem' >
                    {props.speaker.position}
                </Typography>
                <Typography fontFamily='futura-book-bt' align='center' fontSize='1.3rem'>
                    {props.speaker.company}
                </Typography>
            </Box>
        </Grid>
    );
}

function SpeakersSection() {
    const speakers: Speaker[] = [
        {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        }, {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        },
        {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        },
        {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        },
        {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        },
        {
            name: "Perla Carlos",
            position: "UX/UI Designer",
            image: speaker1,
            company: "en Belo"
        },
    ]


    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.main' }}
            id='speakers'
        >
            <Container sx={{ padding: { xs: 1 } }}>
                <Grid container my={5}>
                    <Grid item xs={12}>
                        <Typography align={'center'} textAlign={'center'} variant="h2" sx={{ my: 2 }} fontFamily={'becker-wood-type'} color={"secondary.main"}>
                            Speakers
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 1, sm: 4, md: 4 }}>
                    {speakers.map(speaker =>
                        <SpeakerComponent speaker={speaker} key={speaker.name} />
                    )}
                </Grid>
            </Container>
        </Box>
    )
}

export default SpeakersSection;