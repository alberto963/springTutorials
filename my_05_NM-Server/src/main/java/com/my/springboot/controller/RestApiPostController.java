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

import com.my.springboot.model.Post;
import com.my.springboot.service.PostService;
import com.my.springboot.util.CustomErrorType;

@CrossOrigin(exposedHeaders = { "X-Total-Count" }, maxAge = 3600)
@RestController
@RequestMapping("/api")
public class RestApiPostController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiPostController.class);

	@Autowired
	PostService postService; // Service which will do all data retrieval/manipulation work

	/*
	 * Retrieve all posts for a paginated list.
	 */
	@RequestMapping(value = "/post", params = { "_end", "_order", "_sort", "_start" }, method = RequestMethod.GET)
	public ResponseEntity<List<Post>> listAllPostsReact(@RequestParam(value = "_end") int _end,
			@RequestParam(value = "_order") String _order, @RequestParam(value = "_sort") String _sort,
			@RequestParam(value = "_start") int _start) {

		logger.info("Fetching all posts with params _end=" + _end + " _order=" + _order + " _sort=" + _sort + " _start="
				+ _start);

		final List<Post> posts = postService.findAllPosts(_order, _sort);
		
		MultiValueMap<String, String> headers = new HttpHeaders();
		headers.add("X-Total-Count", Integer.toString(posts.size()));

		if (posts.isEmpty()) {
			logger.info("Post list is empty");

			// return new ResponseEntity<List<Post>>(posts, headers, HttpStatus.NO_CONTENT);
			return new ResponseEntity<List<Post>>(posts, headers, HttpStatus.OK);
		}

		return new ResponseEntity<List<Post>>(posts, headers, HttpStatus.OK);
	}

	/*
	 * Retrieve All Posts
	 */
	@RequestMapping(value = "/post/", method = RequestMethod.GET)
	public ResponseEntity<List<Post>> listAllPosts() {

		final List<Post> posts = postService.findAllPosts();

		if (posts.isEmpty()) {
			logger.info("Post list is empty");

			return new ResponseEntity<List<Post>>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
	}

	/*
	 * Retrieve Single Post
	 */
	@RequestMapping(value = "/post/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getPost(@PathVariable("id") long id) {

		logger.info("Fetching Post with id {}", id);

		final Post post = postService.findById(id);

		if (post == null) {
			logger.error("Post with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("Post with id " + id + " not found");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<Post>(post, HttpStatus.OK);
	}

	/*
	 * Create a Post
	 */
	@RequestMapping(value = "/post/", method = RequestMethod.POST)
	public ResponseEntity<?> createPost(@RequestBody Post post, UriComponentsBuilder ucBuilder) {

		logger.info("Creating Post : {}", post);

		if (postService.isPostExist(post)) {
			logger.error("Unable to create. A Post with name {} already exist", post.getTitle());

			CustomErrorType customError = new CustomErrorType(
					"Unable to create. A Post with name " + post.getTitle() + " already exist.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.CONFLICT);
		}

		postService.savePost(post);

		final HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/post/{id}").buildAndExpand(post.getId()).toUri());

		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	/*
	 * Update a Post
	 */
	@RequestMapping(value = "/post/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updatePost(@PathVariable("id") long id, @RequestBody Post post) {

		logger.info("Updating Post with id {}", id);

		final Post currentPost = postService.findById(id);

		if (currentPost == null) {
			logger.error("Unable to update. Post with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("Unable to upate. Post with id " + id + " not found.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		currentPost.setTitle(post.getTitle());
		currentPost.setBody(post.getBody());

		postService.updatePost(currentPost);

		return new ResponseEntity<Post>(currentPost, HttpStatus.OK);
	}

	/*
	 * Delete a Post
	 */
	@RequestMapping(value = "/post/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletePost(@PathVariable("id") long id) {

		logger.info("Fetching & Deleting Post with id {}", id);

		final Post post = postService.findById(id);
		if (post == null) {

			logger.error("Unable to delete. Post with id {} not found.", id);

			CustomErrorType customError = new CustomErrorType("Unable to delete. Post with id " + id + " not found.");

			return new ResponseEntity<CustomErrorType>(customError, HttpStatus.NOT_FOUND);
		}

		postService.deletePostById(id);

		return new ResponseEntity<Post>(HttpStatus.NO_CONTENT);
	}

	/*
	 * Delete All Posts
	 */
	@RequestMapping(value = "/post/", method = RequestMethod.DELETE)
	public ResponseEntity<Post> deleteAllPosts() {

		logger.info("Deleting All Posts");

		postService.deleteAllPosts();

		return new ResponseEntity<Post>(HttpStatus.NO_CONTENT);
	}
}