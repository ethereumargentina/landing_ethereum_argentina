import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import track1 from '../../public/assets/tracks/track-1.svg'
import track2 from '../../public/assets/tracks/track-2.svg'
import track3 from '../../public/assets/tracks/track-3.svg'
import track4 from '../../public/assets/tracks/track-4.svg'
import Image from 'next/image';

export default function TracksSection() {

    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.dark' }}
            id='buildathon'
        >
            <Container sx={{ my: 15 }} >
                <Grid container >
                    <Grid item xs={12}>
                        <Typography align={'center'} textAlign={'center'} variant="h2" sx={{ my: 2 }} fontFamily={'becker-wood-type'} color={"primary.light"}>
                            Tracks
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={3} spacing={2}>
                        <Image src={track1} alt='track-1' />
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <Image src={track2} alt='track-2' />
                    </Grid>
                    <Grid item xs={6} sm={3} >
                        <Image src={track3} alt='track-3' />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Image src={track4} alt='track-4' />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}