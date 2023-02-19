import { 
    Box,
    Typography
} from "@mui/material";

export const Home = () => {
    return (
        <Box
            width={"100%"}
            height={"100%"}
            sx={{ backgroundColor: "#282c34" }}
        >
            <Typography variant="h1" color="reactSkyBlue">
                React And Typescript HOME
            </Typography>
        </Box>
    );
};