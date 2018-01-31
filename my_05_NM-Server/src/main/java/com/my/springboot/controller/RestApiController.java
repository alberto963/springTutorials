package com.my.springboot.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.my.springboot.model.User;
import com.my.springboot.service.UserService;
import com.my.springboot.util.CustomErrorType;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
	UserService userService; // Service which will do all data retrieval/manipulation work

	/*
	 * Retrieve all users for a paginated list.
	 */
	@CrossOrigin(exposedHeaders = { "X-Total-Count" })
	@RequestMapping(value = "/user", params = { "_end", "_order", "_sort", "_start" }, method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsersReact(@RequestParam(value = "_end") int _end,
			@RequestParam(value = "_order") String _order, @RequestParam(value = "_sort") String _sort,
			@RequestParam(value = "_start") int _start) {

		logger.info("Fetching all users with params _end=" + _end + " _order=" + _order + " _sort=" + _sort + " _start="
				+ _start);

		final List<User> users = userService.findAllUsers(_order, _sort);
		/*
		 * TMP, TODO add it in db.
		 */
		// for (User u : users) {
		// u.setEmail("someone" + u.getId() + "@company.com");
		// }

		MultiValueMap<String, String> headers = new HttpHeaders();
		headers.add("X-Total-Count", Integer.toString(users.size()));

		if (users.isEmpty()) {
			logger.info("User list is empty");

			// return new ResponseEntity<List<User>>(users, headers, HttpStatus.NO_CONTENT);
			return new ResponseEntity<List<User>>(users, headers, HttpStatus.OK);
		}

		return new ResponseEntity<List<User>>(users, headers, HttpStatus.OK);
	}

	/*
	 * Retrieve All Users
	 */
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {

		logger.info("Fetching all users");

		final List<User> users = userService.findAllUsers();

		if (users.isEmpty()) {
			logger.info("User list is empty");

			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	/*
	 * Retrieve Single User
	 */
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") long id) {

		logger.info("Fetching User with id {}", id);

		final User user = userService.findById(id);

		if (user == null) {
			logger.error("User with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("User with id " + id + " not found");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	/*
	 * Create a User
	 */
	@CrossOrigin
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {

		logger.info("Creating User : {}", user);

		if (userService.isUserExist(user)) {
			logger.error("Unable to create. A User with name {} already exist", user.getName());

			CustomErrorType customError = new CustomErrorType(
					"Unable to create. A User with name " + user.getName() + " already exist.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.CONFLICT);
		}

		userService.saveUser(user);

		final HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/user/{id}").buildAndExpand(user.getId()).toUri());

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	/*
	 * Update a User
	 */
	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody User user) {

		logger.info("Updating User with id {}", id);

		final User currentUser = userService.findById(id);

		if (currentUser == null) {
			logger.error("Unable to update. User with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("Unable to upate. User with id " + id + " not found.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		currentUser.setName(user.getName());
		currentUser.setAge(user.getAge());
		currentUser.setSalary(user.getSalary());

		userService.updateUser(currentUser);

		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}

	/*
	 * Delete a User
	 */
	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {

		logger.info("Fetching & Deleting User with id {}", id);

		final User user = userService.findById(id);
		if (user == null) {

			logger.error("Unable to delete. User with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("Unable to delete. User with id " + id + " not found.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		userService.deleteUserById(id);

		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	/*
	 * Delete All Users
	 */
	@RequestMapping(value = "/user/", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteAllUsers() {

		logger.info("Deleting All Users");

		userService.deleteAllUsers();

		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}
}