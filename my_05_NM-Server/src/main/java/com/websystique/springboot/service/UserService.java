package com.websystique.springboot.service;

import java.util.List;

import com.websystique.springboot.model.User;

public interface UserService {

	User findById(Long id);

	List<User> findAllUsers();

	List<User> findAllUsers(String order, String sort);

	User findByName(String name);

	void saveUser(User user);

	void updateUser(User user);

	void deleteUserById(Long id);

	void deleteAllUsers();

	boolean isUserExist(User user);
}