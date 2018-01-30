package com.my.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.my.springboot.model.Post;
import com.my.springboot.repositories.PostRepository;

@Service("postService")
@Transactional
public class PostServiceImpl implements PostService {

	@Autowired
	private PostRepository postRepository;

	@Override
	public Post findById(Long id) {
		return postRepository.findOne(id);
	}

	@Override
	public List<Post> findAllPosts() {
		return postRepository.findAll();
	}

	@Override
	public List<Post> findAllPosts(String order, String sort) {
		return postRepository
				.findAll(new Sort(order.compareTo("ASC") == 0 ? Sort.Direction.ASC : Sort.Direction.DESC, sort));
	}

	@Override
	public Post findByName(String name) {
		return postRepository.findByTitle(name);
	}

	@Override
	public void savePost(Post post) {
		postRepository.save(post);
	}

	@Override
	public void updatePost(Post post) {
		savePost(post);
	}

	@Override
	public void deletePostById(Long id) {
		postRepository.delete(id);
	}

	@Override
	public void deleteAllPosts() {
		postRepository.deleteAll();
	}

	@Override
	public boolean isPostExist(Post post) {
		return findByName(post.getTitle()) != null;
	}

}
