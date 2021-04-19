import React from 'react'
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";


export const Navbar = () => {


    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}