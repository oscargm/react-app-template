import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { UserArea } from '../user';
import { Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
interface Props {
    pagename: string;
    username: string;
    onLogout: () => void;
}

export function HeaderComponent (props : Props){
    const {pagename,username,onLogout} = props
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Toolbar>
                        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
                            <Typography variant="h6" color="inherit" noWrap>
                                {pagename}
                            </Typography>
                        </Grid>
                        <UserArea username={username} onLogout={onLogout}/>
                    </Toolbar>
                </Grid>
            </Grid>
        </>
    )
}
