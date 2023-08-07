import { Box, CardMedia } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    bgColor: string;
    src: string;
    children?: ReactNode;
}

const Background: React.FC<Props> = ({ children, bgColor, src }) => {

    // function Background(props: Props) {
    const backgroundStyles = {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: bgColor
    }
    return (
        <Box sx={backgroundStyles} >
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={src}
                alt="background-divider"
            >
                {children }
            </CardMedia>
        </Box>
    );

}

export default Background;