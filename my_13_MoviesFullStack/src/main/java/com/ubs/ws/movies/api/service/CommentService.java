package com.ubs.ws.movies.api.service;


import com.ubs.ws.movies.api.error.exception.ForeignKeyViolationException;
import com.ubs.ws.movies.pojo.dto.CommentDTO;

public interface CommentService {

    void addComment(CommentDTO commentDTO) throws ForeignKeyViolationException;

/*    List<Comment> getAllComments();*/
}
