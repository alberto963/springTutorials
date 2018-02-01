// in src/user.js
import React from 'react';
import { List, Datagrid, EmailField, TextField, Edit, Create, EditButton, DeleteButton, DisabledInput, SimpleForm, TextInput} from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All nm users" {...props}>
        <Datagrid>
        	<TextField source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="salary" />
            <EmailField source="email" />
            	
            <DeleteButton />
            <EditButton />

        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="age" />
            <TextInput source="salary" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        	<DisabledInput source="id" />
        	<TextInput source="name" />
            <TextInput source="age" />
            <TextInput source="salary" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);