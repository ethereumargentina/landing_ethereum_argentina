import { Box, Container, Grid, Typography } from '@mui/material';
import arbitrum from '../../public/assets/sponsors/arbitrum.svg'
import axie from '../../public/assets/sponsors/axie.svg'
import beefy from '../../public/assets/sponsors/beefy.svg'
import buenosAiresCiudad from '../../public/assets/sponsors/buenos-aires-ciudad.svg'
import chainlink from '../../public/assets/sponsors/chainlink.png'
import ecosystem from '../../public/assets/sponsors/ecosystem.svg'
import fuel from '../../public/assets/sponsors/fuel.png'
import katparkey from '../../public/assets/sponsors/katparkey.svg'
import starknet from '../../public/assets/sponsors/starknet.svg'
import welook from '../../public/assets/sponsors/welook.svg'
import QiDAO from '../../public/assets/sponsors/qi-dao.svg'
import decentraland from '../../public/assets/sponsors/decentraland.png'
import zetachain from '../../public/assets/sponsors/zetachain.svg'
import ripio from '../../public/assets/sponsors/ripio.png'
import coinspect from '../../public/assets/sponsors/coinspect.svg'
import lemon from '../../public/assets/sponsors/lemon.png'
import worldcoin from '../../public/assets/sponsors/worldcoin.png'
import mastercard from '../../public/assets/sponsors/mastercard.png'
import evmos from '../../public/assets/sponsors/evmos.svg'
import push from '../../public/assets/sponsors/push.png'
import metapool from '../../public/assets/sponsors/metapool.svg'
import weinert from '../../public/assets/sponsors/weinert.jpeg'
import zksync from '../../public/assets/sponsors/zksync.svg'
import lens from '../../public/assets/sponsors/lens.svg'
import ledger from '../../public/assets/sponsors/ledger.png'
import lachain from '../../public/assets/sponsors/lachain.png'
import scroll from '../../public/assets/sponsors/scroll.svg'

import PartnerComponent, { Partner } from '../partner';

function SponsorsSection() {
    const itemData: Partner[] = [
        {
            src: ecosystem.src,
            title: 'ecosystem'
        },
        {
            src: beefy.src,
            title: 'Beefy'
        },
        {
            src: fuel.src,
            title: 'fuel'
        },
        {
            src: worldcoin.src,
            title: 'Worldcoin'
        },
        {
            src: decentraland.src,
            title: 'Decentraland'
        },
        {
            src: buenosAiresCiudad.src,
            title: 'Buenos Aires Ciudad'
        },
        {
            src: arbitrum.src,
            title: 'Arbitrum'
        },
        {
            src: mastercard.src,
            title: 'Mastercard'
        },
        {
            src: ripio.src,
            title: 'Ripio'
        },
        {
            src: chainlink.src,
            title: 'Chainlink'
        },
        {
            src: zetachain.src,
            title: 'Zetachain'
        },
        {
            src: starknet.src,
            title: 'starknet'
        },
        {
            src: coinspect.src,
            title: 'Coinspect'
        },
        {
            src: katparkey.src,
            title: 'katparkey'
        },
        {
            src: QiDAO.src,
            title: 'QuiDAO'
        },
        {
            src: lemon.src,
            title: 'Lemon'
        },
        {
            src: ledger.src,
            title: 'Ledger'
        },
        {
            src: evmos.src,
            title: 'Evmos'
        },
        {
            src: zksync.src,
            title: 'zkSync'
        },
        {
            src: push.src,
            title: 'Push'
        },
        {
            src: scroll.src,
            title: 'Scroll'
        },
        {
            src: metapool.src,
            title: 'Metapool'
        },
        {
            src: weinert.src,
            title: 'Weinert'
        },
        {
            src: lens.src,
            title: 'Lens'
        },
        {
            src: axie.src,
            title: 'Axie'
        },
        {
            src: lachain.src,
            title: 'LaChain'
        },
        {
            src: welook.src,
            title: 'welook'
        }
    ];

    return (
        <>
            <Box
                component="section"
                sx={{ display: 'flex', overflow: 'hidden', backgroundColor: 'primary.main' }}
                id='sponsors'
            >
                <Container >
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography align={'center'} textAlign={'center'} variant="h2" sx={{ my: 2 }} fontFamily={'becker-wood-type'} color={"secondary.main"}>
                                Sponsors
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container mb={5} alignItems={'center'} alignContent={'flex-start'} justifyContent={'center'}>
                        {itemData.map((item) => (
                            <PartnerComponent partner={item} key={item.title} />
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default SponsorsSection;