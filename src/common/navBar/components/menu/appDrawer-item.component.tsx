import * as React from 'react';
import { AppDrawerItem } from '../../../../model/appDrawerItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import UsersIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

interface Props {
    item: AppDrawerItem;
}

export class AppDrawerItemComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <Link to={item.url}>
                <ListItem button key={item.key}>

                    {
                        getIcon(item.key)
                    }
                    <ListItemText primary={item.label} />
                </ListItem>
            </Link>
        )
    }
}

function getIcon(key) {
    switch (key) {
        case 'home': return renderHomeIcon();
        case 'user-administration': return renderUsersIcon();
        default: return renderMailIcon();
    }
}

function renderMailIcon() {
    return <ListItemIcon><MailIcon /></ListItemIcon>;
}


function renderHomeIcon() {
    return <ListItemIcon><HomeIcon /></ListItemIcon>;
}

function renderUsersIcon() {
    return <ListItemIcon><UsersIcon /></ListItemIcon>;
}