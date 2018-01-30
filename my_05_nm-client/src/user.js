// in src/user.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All nm users" {...props}>
        <Datagrid>
        	<TextField source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="salary" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);