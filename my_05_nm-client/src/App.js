import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { UserList, UserEdit, UserCreate } from './user';
import { PostList, PostEdit, PostCreate } from './post';

const App = () => (
        
    <Admin restClient={jsonServerRestClient('http://localhost:8090/SpringBootNMApp/api')}>
    <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="post" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  
);

export default App;