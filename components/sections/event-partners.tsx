import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

import neopower from '../../public/assets/event-partners/neopower.png'
import layer from '../../public/assets/event-partners/layer-x.png'
import buidlers from '../../public/assets/event-partners/buidlers.svg'
import defy from '../../public/assets/event-partners/defy.png'
import ethkipu from '../../public/assets/event-partners/eth-kipu.svg'
import wakeup from '../../public/assets/event-partners/wake-up.png'
import defiargentina from '../../public/assets/event-partners/defi-argentina.png'
import seedlatam from '../../public/assets/event-partners/seed-latam.png'
import heineken from '../../public/assets/event-partners/heineken.png'
import amanda from '../../public/assets/event-partners/amanda.png'
import redbull from '../../public/assets/event-partners/redbull.png'
import streameth from '../../public/assets/event-partners/streameth.svg'
import udsa from '../../public/assets/event-partners/udsa.png'
import itba from '../../public/assets/event-partners/itba.svg'
import nerdearla from '../../public/assets/event-partners/nerdearla.png'
import arigato from '../../public/assets/event-partners/arigato.png'
import etherscan from '../../public/assets/event-partners/etherscan.png'
import utdu from '../../public/assets/event-partners/UTDT.png'
import ucema from '../../public/assets/event-partners/UCEMA.png'

import PartnerComponent, { Partner } from '../partner';


function EventPartners() {
    const partners: Partner[] = [
        {
            src: neopower.src,
            title: 'Neopower'
        },
        {
            src: layer.src,
            title: 'Layer X'
        },
        {
            src: buidlers.src,
            title: 'Buidlers'
        },
        {
            src: heineken.src,
            title: 'Heineken'
        },
        {
            src: defy.src,
            title: 'Defy Education'
        },
        {
            src: ethkipu.src,
            title: 'Eth Kipu'
        },
        {
            src: redbull.src,
            title: 'Redbull'
        },
        {
            src: wakeup.src,
            title: 'Wake Up'
        },
        {
            src: streameth.src,
            title: 'Stream ETH'
        },
        {
            src: nerdearla.src,
            title: 'Nerdearla'
        },
        {
            src: arigato.src,
            title: 'Arigato'
        },
        {
            src: itba.src,
            title: 'Instituto Tecnológico de Buenos Aires'
        },
        {
            src: ucema.src,
            title: 'UNIVERSIDAD DEL CEMA'
        },
        {
            src: etherscan.src,
            title: 'Ether Scan'
        },

        {
            src: udsa.src,
            title: 'Universidad de San Andres'
        },
        {
            src: amanda.src,
            title: 'Amanda'
        },
        {
            src: seedlatam.src,
            title: 'Seed Latam'
        },
        {
            src: defiargentina.src,
            title: 'Defi Argentina'
        },
        {
            src: utdu.src,
            title: 'Universidad Torcuato Di Tella'
        },
    ];

    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.main' }}
            id='event-partners'
        >
            <Container >
                <Grid container >
                    <Grid item xs={12}>
                        <Typography align={'center'} textAlign={'center'} variant="h2" sx={{ my: 2 }} fontFamily={'becker-wood-type'} color={"secondary.main"}>
                            Event partners
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container >
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

export default EventPartners;