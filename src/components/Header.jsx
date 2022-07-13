import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Stack,
    Button,

} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';

import { useNavigate } from 'react-router-dom';



function Navigation() {
    const navigate = useNavigate();

    return (
        <AppBar style={{ backgroundColor: "#252628", position: "sticky", top: "0", zIndex: "2" }} position="static">

            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <StoreIcon style={{ fontSize: "30px" }} onClick={() => navigate('/')} />
                </IconButton>
                <Typography style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#a0d2eb",
                    cursor: "pointer",

                }}
                    component='div'
                    sx={{ flexGrow: 1 }}
                    onClick={() => navigate('/')}

                >
                    Inventory Store
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit" onClick={() => navigate('/')}
                        style={{ color: "#A0D2EB" }}
                    >Shops</Button>

                </Stack>

            </Toolbar>
        </AppBar>
    );
}
export default Navigation;