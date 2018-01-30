import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { UserList } from './user';
import { PostList } from './post';

const App = () => (
        
    <Admin restClient={jsonServerRestClient('http://localhost:8090/SpringBootNMApp/api')}>
    <Resource name="user" list={UserList} />
    <Resource name="post" list={PostList} />
    </Admin>
  
);

export default App;