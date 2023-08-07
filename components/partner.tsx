import Image from "next/image";
import { Box, Grid } from "@mui/material";

export interface Prop {
    partner: Partner;
}

export interface Partner {
    src: string;
    title: string;
}

const PartnerComponent = ({ partner }: Prop) => (
    <Grid item xs={6} sm={3} key={partner.src}>
        <Box padding={{ xs: 2, sm: 3 }}>
            <Image
                src={`${partner.src}`}
                alt={partner.title}
                loading="lazy"
                width={240}
                height={200}
                style={{ width: '100%', height: '100%' }}
                quality={100}
            />
        </Box>
    </Grid>
)

export default PartnerComponent;