import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { UserArea } from './user';
import { Grid } from '@material-ui/core';
import { HeaderComponent } from './header.component';

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
    onLogout: () => void;
}

class NavbarContainerComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, pagename,username,onLogout } = this.props;
        return (
            <>
                <AppBar position="fixed" className={classes.appBar}>
                    <HeaderComponent pagename={pagename} username={username} onLogout={onLogout}/>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </>
        )
    }
}
export const Navbar = withStyles(styles)(NavbarContainerComponent);