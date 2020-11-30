package com.ubs.ws.movies.config.cache;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.LinkedList;
import java.util.List;

import com.ubs.ws.movies.api.repository.CommentRepository;
import com.ubs.ws.movies.api.repository.MovieRepository;
import com.ubs.ws.movies.api.service.CommentService;
import com.ubs.ws.movies.api.service.MovieService;
import com.ubs.ws.movies.pojo.bean.Comment;
import com.ubs.ws.movies.pojo.bean.Movie;
import com.ubs.ws.movies.pojo.dto.BaseCommentDTO;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import com.ubs.ws.movies.pojo.dto.MovieDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.cache.CacheManager;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = RestCacheConfig.class)
public class RestCacheConfigTest {

    @Autowired
    private ApplicationContext applicationContext;

    @Autowired
    private MovieService movieService;

    @Autowired
    private CommentService commentService;

    @MockBean
    private MovieRepository movieRepository;

    @MockBean
    private CommentRepository commentRepository;

    private MovieDTO dummyMovieDTO;
    private MovieDTO dummyMovieDTOwithComments;
    private Movie dummyMovie;
    private Movie dummyMovieWithComments;
    private CommentDTO dummyCommentDTO;

    /* to empty the "movies" cache between unit tests so to start from clear state */
    @Before
    public void emptyCache() {
        CacheManager cacheManager = (CacheManager) applicationContext.getBean("cacheManager");
        cacheManager.getCache("movies").clear();
    }

    @Test
    public void cacheable_getMovieById_whenMovieWithNoCommentsIsRequestedTwice_thenRepositoryIsUsedOnce() {
        // given
        givenDummyMovieDTO();
        givenDummyMovie();
        when(movieRepository.findOne(dummyMovieDTO.getMovieId())).thenReturn(dummyMovie);

        // when
        movieService.getMovieById(dummyMovieDTO.getMovieId()); // 1st call to movieRepository.findOne
        movieService.getMovieById(dummyMovieDTO.getMovieId()); // No call to movieRepository.findOne

        // then
        verify(movieRepository, times(1)).findOne(any(Long.class));
    }

    @Test
    public void cacheable_getMovieById_whenMovieWithCommentsIsRequestedTwice_thenRepositoryIsUsedOnce() {
        // given
        givenDummyMovieDTOwithComments();
        givenDummyMovieWithComments();
        when(movieRepository.findOne(dummyMovieDTOwithComments.getMovieId())).thenReturn(dummyMovieWithComments);

        // when
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());

        // then
        verify(movieRepository, times(1)).findOne(any(Long.class));
    }

    @Test
    public void cacheable_getMovieById_whenTwoMoviesAreRequested_thenRepositoryIsUsedTwice() {
        // given
        givenDummyMovieDTO();
        givenDummyMovie();
        givenDummyMovieDTOwithComments();
        givenDummyMovieWithComments();
        when(movieRepository.findOne(dummyMovieDTO.getMovieId())).thenReturn(dummyMovie);
        when(movieRepository.findOne(dummyMovieDTOwithComments.getMovieId())).thenReturn(dummyMovieWithComments);

        // when
        movieService.getMovieById(dummyMovieDTO.getMovieId());             // 1st call to movieRepository.findOne
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId()); // 2nd call to movieRepository.findOne

        // then
        verify(movieRepository, times(2)).findOne(any(Long.class));
    }

    @Test
    public void cacheEvict_addComment_whenCachedMovieWithNoCommentsIsCommented_thenMovieIsEvicted() {
        // given
        givenDummyMovieDTO();
        givenDummyMovie();
        givenDummyCommentDTO();
        dummyCommentDTO.setMovieId(dummyMovieDTO.getMovieId());
        when(movieRepository.findOne(dummyMovieDTO.getMovieId())).thenReturn(dummyMovie);

        // when
        movieService.getMovieById(dummyMovieDTO.getMovieId());  // 1st call to movieRepository.findOne
        commentService.addComment(dummyCommentDTO);             // 2nd call to movieRepository.findOne
        movieService.getMovieById(dummyMovieDTO.getMovieId());  // 3rd call to movieRepository.findOne

        // then
        verify(movieRepository, times(3)).findOne(any(Long.class));
    }

    @Test
    public void cacheEvict_addComment_whenCachedMovieWithCommentsIsCommented_thenMovieIsEvicted() {
        // given
        givenDummyMovieDTOwithComments();
        givenDummyMovieWithComments();
        givenDummyCommentDTO();
        dummyCommentDTO.setMovieId(dummyMovieDTOwithComments.getMovieId());
        when(movieRepository.findOne(dummyMovieDTOwithComments.getMovieId())).thenReturn(dummyMovieWithComments);

        // when
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());
        commentService.addComment(dummyCommentDTO);
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());

        // then
        verify(movieRepository, times(3)).findOne(any(Long.class));
    }

    @Test
    public void cacheEvict_addComment_whenCachedMovieWithNoCommentsIsNotCommented_thenMovieIsNotEvicted() {
        // given
        givenDummyMovieDTO();
        givenDummyMovie();
        givenDummyCommentDTO();
        when(movieRepository.findOne(dummyMovieDTO.getMovieId())).thenReturn(dummyMovie);
        when(movieRepository.findOne(dummyCommentDTO.getMovieId()))
                .thenReturn(new Movie(dummyCommentDTO.getMovieId(), "differentTitle", "differentDescription", null));

        // when
        movieService.getMovieById(dummyMovieDTO.getMovieId()); // 1st call to movieRepository.findOne
        commentService.addComment(dummyCommentDTO);            // 2nd call to movieRepository.findOne
        movieService.getMovieById(dummyMovieDTO.getMovieId()); // No call to movieRepository.findOne

        // then
        verify(movieRepository, times(2)).findOne(any(Long.class));
    }

    @Test
    public void cacheEvict_addComment_whenCachedMovieWithCommentsIsNotCommented_thenMovieIsNotEvicted() {
        // given
        givenDummyMovieDTOwithComments();
        givenDummyMovieWithComments();
        givenDummyCommentDTO();
        when(movieRepository.findOne(dummyMovieDTOwithComments.getMovieId())).thenReturn(dummyMovieWithComments);
        when(movieRepository.findOne(dummyCommentDTO.getMovieId()))
                .thenReturn(new Movie(dummyCommentDTO.getMovieId(), "differentTitle", "differentDescription", null));

        // when
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());
        commentService.addComment(dummyCommentDTO);
        movieService.getMovieById(dummyMovieDTOwithComments.getMovieId());

        // then
        verify(movieRepository, times(2)).findOne(any(Long.class));
    }

    private void givenDummyMovieDTO() {
        dummyMovieDTO = new MovieDTO(1L, "title", "description", null);
    }

    private void givenDummyMovie() {
        dummyMovie = new Movie(1L, "title", "description", new LinkedList<>());
    }

    private void givenDummyMovieDTOwithComments() {
        List<BaseCommentDTO> comments = new LinkedList<>();
        comments.add(new BaseCommentDTO("username1", "message1"));
        comments.add(new BaseCommentDTO("username2", "message2"));
        dummyMovieDTOwithComments = new MovieDTO(2L, "superTitle", "superDescription", comments);
    }

    private void givenDummyMovieWithComments() {
        List<Comment> comments = new LinkedList<>();
        dummyMovieWithComments = new Movie(2L, "superTitle", "superDescription", null);
        comments.add(new Comment(dummyMovieWithComments, "username1", "message1"));
        comments.add(new Comment(dummyMovieWithComments, "username2", "message2"));
        dummyMovieWithComments.setComments(comments);
    }

    private void givenDummyCommentDTO() {
        dummyCommentDTO = new CommentDTO(3L, "username", "message");
    }
}