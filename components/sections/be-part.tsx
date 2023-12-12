import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

interface IPartButton {
    text: string;
    href: string;
}

const bePartStyles = {
    backgroundColor: 'primary.dark',
    textAlign: 'center',
    borderRadius: '30px',
    px: '2rem',
    py: '1rem',
    '&:hover': {
        backgroundColor: '#50AEE2',
        color: '#0B1628',
        cursor: 'pointer',
    },
    my: {
        xs: 1,
        sm: 0,
    },
};

const BePartButton = ({ text, href }: IPartButton) => {
    return (
        <Link
            href={href}
            rel="noopener"
            target="_blank"
            underline="none"
            color={'common.white'}
        >
            <Box sx={bePartStyles}>
                <Typography
                    variant="h3"
                    fontSize={'1em'}
                    fontFamily={'futura-md-bt'}
                    textTransform={'uppercase'}
                >
                    {text}
                </Typography>
            </Box>
        </Link>
    );
};

function BePartSection() {
    const { t } = useTranslation('home');

    return (
        <>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    backgroundColor: '#C1E9EF',
                }}
                id="apply"
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
                                color={'primary.main'}
                            >
                                {t('apply')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        bgcolor={{ xs: '#C1E9EF', sm: '#0B1628' }}
                        sx={{ borderRadius: '30px' }}
                        padding="0.3rem"
                        mt={3}
                    >
                        <Grid item xs={12} sm={4}>
                            <BePartButton
                                text={t('sponsor')}
                                href="https://tally.so/r/mDBkgp"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BePartButton
                                text={t('volunteer')}
                                href="https://tally.so/r/meMQko"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <BePartButton
                                text={t('speaker')}
                                href="https://tally.so/r/3jZ6O9"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default BePartSection;
