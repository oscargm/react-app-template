export interface AppDrawerItem {
    id: number;
    key: string;
    name: string;
    label: string;
    url: string;
  }
  
  export const createDefaultAppDrawer = (id) : AppDrawerItem => ({
        id: id,
        key: 'Item_'+id,
        name: 'Item: '+id,
        label: 'Item '+id,
        url: '/'
  })
  