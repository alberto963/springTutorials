package com.my.springboot.service;

import java.util.List;

import com.my.springboot.model.Post;

public interface PostService {

	public Post findById(Long id);

	public List<Post> findAllPosts();

	public List<Post> findAllPosts(String order, String sort);

	public Post findByName(String name);

	public void savePost(Post Post);

	public void updatePost(Post Post);

	public void deletePostById(Long id);

	public void deleteAllPosts();

	public boolean isPostExist(Post Post);
}