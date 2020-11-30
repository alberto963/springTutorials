package com.ubs.ws.movies.api.service.impl;

import static org.junit.Assert.assertNotNull;
import static org.mockito.BDDMockito.given;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.LinkedList;

import com.ubs.ws.movies.api.error.exception.DuplicateMovieIdException;
import com.ubs.ws.movies.api.error.exception.ResourceNotFoundException;
import com.ubs.ws.movies.api.repository.MovieRepository;
import com.ubs.ws.movies.pojo.bean.Movie;
import com.ubs.ws.movies.pojo.dto.MovieDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class DefaultMovieServiceTest {

    @InjectMocks
    private DefaultMovieService defaultMovieService;

    @Mock
    private MovieRepository movieRepository;

    private MovieDTO dummyMovieDTO;
    private Movie dummyMovie;

    @Test
    public void addMovie_whenMovieIsNotDuplicate_thenIsSaved() {
        // given
        givenDummyMovieDTO();
        given(movieRepository.findOne(dummyMovieDTO.getMovieId())).willReturn(null);

        // when
        defaultMovieService.addMovie(dummyMovieDTO);

        // then
        verify(movieRepository, times(1)).save(any(Movie.class));
    }

    @Test(expected = DuplicateMovieIdException.class)
    public void addMovie_whenMovieIsDuplicate_thenDuplicateMovieIdException() {
        // given
        givenDummyMovieDTO();
        given(movieRepository.findOne(anyLong())).willReturn(new Movie());

        // when
        defaultMovieService.addMovie(dummyMovieDTO);
    }

    @Test
    public void getMovieById_whenMovieExists_thenReturnIsSuccessful() {
        // given
        givenDummyMovie();
        given(movieRepository.findOne(anyLong())).willReturn(dummyMovie);

        // when
        MovieDTO resultMovieDTO = defaultMovieService.getMovieById(anyLong());

        // then
        assertNotNull(resultMovieDTO);
    }

    @Test(expected = ResourceNotFoundException.class)
    public void getMovieById_whenMovieNotExist_thenResourceNotFoundException() {
        // given
        given(movieRepository.findOne(anyLong())).willReturn(null);

        // when
        defaultMovieService.getMovieById(anyLong());
    }

    private void givenDummyMovieDTO() {
        dummyMovieDTO = new MovieDTO(1L, "title", "description", null);
    }

    private void givenDummyMovie() {
        dummyMovie = new Movie(1L, "title", "description", new LinkedList<>());
    }
}
