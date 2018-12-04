import * as React from 'react';
import { AppDrawerItem } from '../../../../model/appDrawerItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

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
            <ListItem button key={item.key}>
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItem>
        )
    }
}