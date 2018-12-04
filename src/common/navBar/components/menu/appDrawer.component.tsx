import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { AppDrawerItemComponent } from './appDrawer-item.component';
import { AppDrawerItem } from '../../../../model/appDrawerItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
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
    items: AppDrawerItem[];
}

class AppDrawerComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, items } = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {items.map(item => { return (<AppDrawerItemComponent item={item} key={item.key} />) })}
                </List>
            </Drawer>
        );
    }
}

export const AppDrawer = withStyles(styles)(AppDrawerComponent);