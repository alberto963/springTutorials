package com.ubs.ws.movies.api.service.impl;

import static com.ubs.ws.movies.api.error.message.ExceptionMessage.EXCEPTION_MESSAGE_FOREIGN_KEY_VIOLATION;

import com.ubs.ws.movies.api.error.exception.ForeignKeyViolationException;
import com.ubs.ws.movies.api.repository.CommentRepository;
import com.ubs.ws.movies.api.repository.MovieRepository;
import com.ubs.ws.movies.api.service.CommentService;
import com.ubs.ws.movies.pojo.bean.Comment;
import com.ubs.ws.movies.pojo.bean.Movie;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

@Service
public class DefaultCommentService implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    @CacheEvict(value = "movies", key = "#commentDTO.movieId")
    public void addComment(CommentDTO commentDTO) throws ForeignKeyViolationException {
        long foreignKey = commentDTO.getMovieId();
        Movie movie = movieRepository.findOne(foreignKey);

        if (movie == null)
            throw new ForeignKeyViolationException(foreignKey, EXCEPTION_MESSAGE_FOREIGN_KEY_VIOLATION);

        String username = commentDTO.getUsername();
        String message = commentDTO.getMessage();
        Comment comment = new Comment(movie, username, message);
        commentRepository.save(comment);
    }

/*    @Override
    public List<Comment> getAllComments() {
        List<Comment> comments = new LinkedList<>();
        commentRepository.findAll()
                .forEach(comments::add);
        return comments;
    }*/
}
