'use client';

import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import buildathonImage from '../../public/assets/home/buildathon.svg';
import { useTranslation } from 'next-i18next';
import ButtonBecker from '../button-becker';

const itemCenter = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const itemLeft = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
};

const itemRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    px: 5,
};

const buttonTickets = {
    borderRadius: '30px',
    marginTop: '1rem',
    maxWidth: '210px',
    color: 'primary.dark',
    backgroundColor: 'primary.light',
    padding: 1.3,
    fontFamily: 'becker-wood-type',
    fontSize: '1.5rem',
    textAlign: 'center',
    '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
    },
};

function BuildathonSection() {
    const { t } = useTranslation('home');

    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: 'primary.dark',
                }}
                id="buildathon"
            >
                <Container>
                    <Grid container direction={'row'}>
                        <Grid item xs={12} md={6}>
                            <Box sx={itemLeft} flexWrap={'nowrap'}>
                                <Typography
                                    align={'left'}
                                    textAlign={'left'}
                                    variant="h2"
                                    sx={{ my: 2 }}
                                    fontFamily={'becker-wood-type'}
                                    color={'common.white'}
                                >
                                    Buildathon
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{ mb: 5 }}
                                    color={'#4BA4D8'}
                                >
                                    <Typography
                                        variant="h3"
                                        fontFamily={'futurist-fixed-width'}
                                        fontSize={'1em'}
                                    >
                                        Design | Build | Pitch
                                    </Typography>
                                </Stack>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                    dangerouslySetInnerHTML={{
                                        __html: t('buildathonDescription'),
                                    }}
                                ></Typography>
                                <ButtonBecker
                                    text={t('buildathonButtonText')}
                                    href="https://taikai.network/ethargentina/hackathons/buildathon-2023"
                                    styles={{ maxWidth: '210px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block',
                                },
                            }}
                            md={6}
                        >
                            <Box sx={itemCenter}>
                                <Box
                                    component="img"
                                    src={buildathonImage.src}
                                    alt="buildathon"
                                    sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'none',
                                            md: 'block',
                                        },
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            justifyContent: { sm: 'center', md: 'flex-end' },
                            mt: { xs: 10, md: 0 },
                        }}
                        direction={'row'}
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ display: 'flex', flexDirection: 'row' }}
                            justifyContent={'space-around'}
                        >
                            <Box>
                                <Typography
                                    variant="h4"
                                    fontFamily={'futurist-fixed-width'}
                                    fontSize={'1em'}
                                    color={'primary.light'}
                                    mb={2}
                                >
                                    {t('buildathonWhenTitle')}
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    {t('buildathonWhenDays')}
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    {t('buildathonWhenMonths')}
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    {t('buildathonWhenYear')}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    fontFamily={'futurist-fixed-width'}
                                    fontSize={'1em'}
                                    color={'primary.light'}
                                    mb={2}
                                >
                                    {t('buildathonWhereTitle')}
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    <Link
                                        href="https://www.cecbuenosaires.com.ar/"
                                        rel="noopener"
                                        target="_blank"
                                        color={'common.white'}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {t('buildathonWhereDays')}
                                    </Link>
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    {t('buildathonWhereMonths')}
                                </Typography>
                                <Typography
                                    paragraph={true}
                                    color={'common.white'}
                                >
                                    {t('buildathonWhereYear')}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default BuildathonSection;
