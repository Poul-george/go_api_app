import { createTheme } from "@mui/material";

export const color = {
    reactSkyBlue: "61dafb"
}

export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: "h1" },
                    style: { fontSize: 30, fontWeight: 700 },
                },
            ],
        },
    },
});