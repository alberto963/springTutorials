package com.ubs.ws.movies.api.service;

import com.ubs.ws.movies.api.error.exception.DuplicateMovieIdException;
import com.ubs.ws.movies.api.error.exception.ResourceNotFoundException;
import com.ubs.ws.movies.pojo.dto.MovieDTO;

public interface MovieService {

    void addMovie(MovieDTO movieDTO) throws DuplicateMovieIdException;

    MovieDTO getMovieById(long movieId) throws ResourceNotFoundException;

/*    List<Movie> getAllMovies();*/
}
