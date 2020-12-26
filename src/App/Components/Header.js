import React from 'react'
import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles =makeStyles({
    root:{
        backgroundColor:'#fff',
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        },
        btnRoot:{
            backgroundColor:'green'
        },
        btnLabel:{
            backgroundColor:'red'
        }
    }
})

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignContent>
                    <Grid item>
                        <InputBase 
                        placeholder="search"
                        startAdornment={<SearchIcon  fontSize='small' />}
                        className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton >
                            <Badge badgeContent={3} color='secondary'>
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <PowerSettingsNewIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header;