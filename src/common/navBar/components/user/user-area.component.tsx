import * as React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Grid } from '@material-ui/core';


interface Props {
    onLogout: () => void;
    username: string;
}

interface State {
    open: boolean;
    userAreaAnchorEl: HTMLElement;
}

export class UserArea extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = { open: false, userAreaAnchorEl: null };
    }

    handleClose = () => {
        this.setState({ userAreaAnchorEl: null });
    };

    handleMenu = event => {
        this.setState({ userAreaAnchorEl: event.currentTarget });
    };

    render() {
        const { onLogout } = this.props;
        const { userAreaAnchorEl } = this.state;
        const open = Boolean(userAreaAnchorEl);
        return (
            <>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                    <Grid container alignContent={"flex-end"} alignItems={"flex-end"}>
                        <Grid item xs={2} sm={4} md={4} lg={6} xl={8}></Grid>
                        <Grid item xs={10} sm={8} md={6} lg={6} xl={4}>
                            <IconButton
                                aria-owns={open ? 'user-menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                                title={"Hello: " + this.props.username}
                            //className={classes.menuButton}
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="user-menu-appbar"
                                anchorEl={userAreaAnchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                <Link to="/"><MenuItem onClick={onLogout}>Logout</MenuItem></Link>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}
//export const UserArea = withStyles(styles)(UserAreaContainerComponent);