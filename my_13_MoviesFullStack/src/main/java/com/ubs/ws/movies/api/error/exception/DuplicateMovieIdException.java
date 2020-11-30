package com.ubs.ws.movies.api.error.exception;

public class DuplicateMovieIdException extends RuntimeException {

    private long movieId;

    public DuplicateMovieIdException(long movieId, String message) {
        super(message);
        this.movieId = movieId;
    }
}