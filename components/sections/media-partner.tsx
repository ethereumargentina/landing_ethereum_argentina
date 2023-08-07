import { Box, Container, Grid, Typography } from '@mui/material';
import PartnerComponent, { Partner } from '../partner';

import filonews from '../../public/assets/media-partners/filo-news.svg'
import cincoseis from '../../public/assets/media-partners/5-seis-2.png'
import cointelegraph from '../../public/assets/media-partners/cointelegraph.png'
import bankless from '../../public/assets/media-partners/bankless.png'

function MediaPartners() {
    const partners: Partner[] = [
        {
            src: bankless.src,
            title: 'Bankless DAO'
        },
        {
            src: cointelegraph.src,
            title: 'Cointelegraph'
        },
        {
            src: cincoseis.src,
            title: '5 SEIS'
        },
        {
            src: filonews.src,
            title: 'Filo News'
        }
    ];

    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.main' }}
            id='media-partners'
        >
            <Container >
                <Grid container >
                    <Grid item xs={12}>
                        <Typography align={'center'} textAlign={'center'} variant="h2" sx={{ my: 2 }} fontFamily={'becker-wood-type'} color={"secondary.main"}>
                            Media partners
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container mb={5} alignItems={'center'} alignContent={'flex-start'} justifyContent={'center'}>
                        {partners.map(partner =>
                            <PartnerComponent partner={partner} key={partner.title} />
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default MediaPartners;