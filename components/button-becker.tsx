import { Box, Link } from "@mui/material";

export interface Props {
    text: string;
    href?: string | null;
    styles?: any;
}

const buttonTickets =
{
    borderRadius: '30px',
    marginTop: '1rem',
    color: 'primary.dark',
    backgroundColor: 'primary.light',
    padding: 1.3,
    fontFamily: 'becker-wood-type',
    fontSize: '1.5rem',
    textAlign: 'center',
    '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline'
    }
}

const ButtonBecker = ({ href, text, styles }: Props) => (
    <Box sx={{ ...buttonTickets, ...styles }} >
        {href !== null ? (
            <Link
                href={href}
                rel="noopener"
                target="_blank"
                underline="none"
            >
                {text}
            </Link>) : (text)
        }
    </Box>
)

export default ButtonBecker;