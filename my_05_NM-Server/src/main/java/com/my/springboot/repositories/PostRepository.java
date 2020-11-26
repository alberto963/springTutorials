package com.my.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.my.springboot.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

	Post findByTitle(String title);

	Post findOne(Long id);

	void delete(Long id);

}
