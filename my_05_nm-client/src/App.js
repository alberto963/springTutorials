import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

import { UserList, UserEdit, UserCreate } from './user';
import { PostList, PostEdit, PostCreate } from './post';

import Dashboard from './Dashboard';
import authClient from './authClient';

const App = () => (
        
    <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:8090/SpringBootNMApp/api')}>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
    <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
    </Admin>
  
);

export default App;