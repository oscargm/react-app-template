import {AppDrawerItem} from '../model/appDrawerItem';

const homeItem : AppDrawerItem = {
    id: 1,
    key: 'home',
    label: 'Home',
    name: 'Home',
    url: '/main'
}

export const getAppdrawerItems = () => {
    const arrItems = []
    arrItems.push(homeItem);
    return arrItems;
}