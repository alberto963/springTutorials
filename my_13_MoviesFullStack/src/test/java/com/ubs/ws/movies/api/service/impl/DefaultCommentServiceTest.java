package com.ubs.ws.movies.api.service.impl;

import static org.mockito.BDDMockito.given;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.ubs.ws.movies.api.error.exception.ForeignKeyViolationException;
import com.ubs.ws.movies.api.repository.CommentRepository;
import com.ubs.ws.movies.api.repository.MovieRepository;
import com.ubs.ws.movies.pojo.bean.Comment;
import com.ubs.ws.movies.pojo.bean.Movie;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DefaultCommentServiceTest {

    @InjectMocks
    private DefaultCommentService defaultCommentService;

    @Mock
    private CommentRepository commentRepository;

    @Mock
    private MovieRepository movieRepository;

    private CommentDTO dummyCommentDTO;
    private Movie dummyMovie;

    @Test
    public void addComment_whenMovieExists_thenCommentIsSaved() {
        // given
        givenDummyMovie();
        givenDummyCommentDTO();
        given(movieRepository.findOne(anyLong())).willReturn(dummyMovie);

        // when
        defaultCommentService.addComment(dummyCommentDTO);

        // then
        verify(commentRepository, times(1)).save(any(Comment.class));
    }

    @Test(expected = ForeignKeyViolationException.class)
    public void addComment_whenMovieNotExist_thenForeignKeyViolationException() {
        // given
        givenDummyCommentDTO();
        given(movieRepository.findOne(anyLong())).willReturn(null);

        // when
        defaultCommentService.addComment(dummyCommentDTO);
    }

    private void givenDummyMovie() {
        dummyMovie = new Movie(1L, "title", "description", null);
    }

    private void givenDummyCommentDTO() {
        dummyCommentDTO = new CommentDTO(1L, "username", "message");
    }
}
