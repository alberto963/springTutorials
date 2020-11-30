package com.ubs.ws.movies.api.repository;

import com.ubs.ws.movies.pojo.bean.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
}
