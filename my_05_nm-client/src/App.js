import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

//import { UserList } from './users';
import { UserList } from './user';

const App = () => (
		 /*	
	<Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="users" list={UserList} />
    </Admin>
          */
        
    <Admin restClient={jsonServerRestClient('http://localhost:8090/SpringBootNMApp/api')}>
        <Resource name="user" list={UserList} />
    </Admin>
  
);

export default App;