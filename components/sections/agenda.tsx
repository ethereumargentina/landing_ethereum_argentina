'use client';

import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import agenda1 from '../../public/assets/agenda/agenda-1.svg';
import agenda2 from '../../public/assets/agenda/agenda-2.svg';
import agenda3 from '../../public/assets/agenda/agenda-3.svg';
import agenda4 from '../../public/assets/agenda/agenda-4.svg';
import agenda5 from '../../public/assets/agenda/agenda-5.svg';

import { useTranslation } from 'next-i18next';
import ButtonBecker from '../button-becker';

interface Props {
    iconSrc: string;
    bgColorDate: string;
    date: string;
    month: string;
    title: string;
    subTitle: string;
}

const AgendaItem = ({
    iconSrc,
    bgColorDate,
    date,
    month,
    title,
    subTitle,
}: Props) => {
    return (
        <Grid container alignItems={'center'}>
            <Grid item xs={12} sm={3}>
                <Grid container direction={'row'}>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <CardMedia
                            component="img"
                            height="100"
                            image={iconSrc}
                            alt={'Agenda'}
                        />
                    </Box>
                    <Box
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                            display: 'flex',
                            backgroundColor: bgColorDate,
                            width: { xs: '100%', sm: 100 },
                        }}
                        width={100}
                        height={100}
                    >
                        <Box>
                            <Typography
                                variant="h2"
                                align="center"
                                fontSize={'2em'}
                                fontFamily={'becker-wood-type'}
                                color={'primary.main'}
                            >
                                {date}
                            </Typography>
                            <Typography
                                variant="h2"
                                align="center"
                                fontSize={'2em'}
                                fontFamily={'becker-wood-type'}
                                color={'primary.main'}
                            >
                                {month}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        my: { xs: 3, sm: 0 },
                    }}
                >
                    <Typography
                        variant="h3"
                        fontSize={'1.3em'}
                        fontFamily={'futura-md-bt'}
                        color={'common.white'}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <Typography
                        variant="h4"
                        fontSize={'1em'}
                        fontFamily={'futurist-fixed-width'}
                        color={'#C1E9EF'}
                    >
                        {subTitle}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

function AgendaSection() {
    const { t } = useTranslation('home');
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                overflow: 'hidden',
                backgroundColor: 'primary.dark',
            }}
            id="agenda"
        >
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            align={'center'}
                            textAlign={'center'}
                            variant="h2"
                            sx={{ my: 2 }}
                            fontFamily={'becker-wood-type'}
                            color={'common.white'}
                        >
                            Agenda
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container my={8}>
                    <AgendaItem
                        iconSrc={agenda1.src}
                        bgColorDate="#4FADE1"
                        date={t('agendaDate1')}
                        month={t('agendaMonth1')}
                        title={t('agendaTitle1')}
                        subTitle={t('agendaSubTitle1')}
                    />

                    <AgendaItem
                        iconSrc={agenda2.src}
                        bgColorDate="#A7D9EA"
                        date={t('agendaDate2')}
                        month={t('agendaMonth2')}
                        title={t('agendaTitle2')}
                        subTitle={t('agendaSubTitle2')}
                    />

                    <AgendaItem
                        iconSrc={agenda3.src}
                        bgColorDate="#F9B300"
                        date={t('agendaDate3')}
                        month={t('agendaMonth3')}
                        title={t('agendaTitle3')}
                        subTitle={t('agendaSubTitle3')}
                    />

                    <AgendaItem
                        iconSrc={agenda4.src}
                        bgColorDate="#4FADE1"
                        date={t('agendaDate4')}
                        month={t('agendaMonth4')}
                        title={t('agendaTitle4')}
                        subTitle={t('agendaSubTitle4')}
                    />

                    <AgendaItem
                        iconSrc={agenda5.src}
                        bgColorDate="#F9B300"
                        date={t('agendaDate5')}
                        month={t('agendaMonth5')}
                        title={t('agendaTitle5')}
                        subTitle={t('agendaSubTitle5')}
                    />
                </Grid>
                <Grid container justifyContent={'center'} direction={'column'}>
                    <Typography
                        fontFamily="futura-book-bt"
                        align="center"
                        fontSize="1.3rem"
                        color={'common.white'}
                    >
                        {t('agendaDownloadText')}
                    </Typography>
                    <Box justifyContent={'center'} display={'flex'}>
                        <ButtonBecker
                            text={t('agendaDownloadTextButton')}
                            styles={{ px: 2 }}
                            href={t('agendaDownloadLink')}
                        />
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default AgendaSection;
