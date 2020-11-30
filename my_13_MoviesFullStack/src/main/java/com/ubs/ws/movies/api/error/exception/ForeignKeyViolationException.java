package com.ubs.ws.movies.api.error.exception;

public class ForeignKeyViolationException extends RuntimeException {

    private long movieId;

    public ForeignKeyViolationException(long movieId, String message) {
        super(message);
        this.movieId = movieId;
    }
}