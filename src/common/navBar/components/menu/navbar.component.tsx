import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { HeaderComponent } from './header.component';
import { AppDrawer } from './appDrawer.component';
import { AppDrawerItem } from '../../../../model/appDrawerItem';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    UserArea: {
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});


interface Props extends WithStyles<typeof styles> {
    pagename: string;
    username: string;
    appDrawerItems: AppDrawerItem[];
    onLogout: () => void;
}

class NavbarContainerComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, pagename, username, appDrawerItems, onLogout } = this.props;
        return (
            <>
                <AppBar position="fixed" className={classes.appBar}>
                    <HeaderComponent pagename={pagename} username={username} onLogout={onLogout} />
                </AppBar>
                <AppDrawer items={appDrawerItems} />
            </>
        )
    }
}
export const Navbar = withStyles(styles)(NavbarContainerComponent);