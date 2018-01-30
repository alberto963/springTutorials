package com.my.springboot.service;

import java.util.List;

import com.my.springboot.model.User;

public interface UserService {

	public User findById(Long id);

	public List<User> findAllUsers();

	public List<User> findAllUsers(String order, String sort);

	public User findByName(String name);

	public void saveUser(User user);

	public void updateUser(User user);

	public void deleteUserById(Long id);

	public void deleteAllUsers();

	public boolean isUserExist(User user);
}