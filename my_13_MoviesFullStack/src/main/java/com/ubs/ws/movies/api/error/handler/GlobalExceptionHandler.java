package com.ubs.ws.movies.api.error.handler;

import static com.ubs.ws.movies.api.error.message.ErrorCode.ERROR_CODE_DUPLICATE_MOVIE_ID;
import static com.ubs.ws.movies.api.error.message.ErrorCode.ERROR_CODE_FOREIGN_KEY_VIOLATION;
import static com.ubs.ws.movies.api.error.message.ErrorCode.ERROR_CODE_MALFORMED_REQUEST;
import static com.ubs.ws.movies.api.error.message.ErrorCode.ERROR_CODE_RESOURCE_NOT_FOUND;
import static com.ubs.ws.movies.api.error.message.ErrorCode.ERRROR_CODE_CONSTRAINT_VIOLATION;

import javax.validation.ConstraintViolationException;
import javax.validation.UnexpectedTypeException;

import com.fasterxml.jackson.core.JsonParseException;
import com.ubs.ws.movies.api.error.ExceptionResponse;
import com.ubs.ws.movies.api.error.exception.DuplicateMovieIdException;
import com.ubs.ws.movies.api.error.exception.ForeignKeyViolationException;
import com.ubs.ws.movies.api.error.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends AbstractGlobalExceptionHandler {

    // HANDLING CUSTOM EXCEPTIONS
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ExceptionResponse> resourceNotFound(ResourceNotFoundException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_RESOURCE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DuplicateMovieIdException.class)
    public ResponseEntity<ExceptionResponse> movieIdDuplicated(DuplicateMovieIdException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_DUPLICATE_MOVIE_ID, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(ForeignKeyViolationException.class)
    public ResponseEntity<ExceptionResponse> foreignKeyViolated(ForeignKeyViolationException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_FOREIGN_KEY_VIOLATION, HttpStatus.BAD_REQUEST);
    }

    // HANDLING SOME NON-CUSTOM EXCEPTIONS
    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ExceptionResponse> constraintViolation(ConstraintViolationException ex) {
        return buildAndSendErrorResponse(ex, ERRROR_CODE_CONSTRAINT_VIOLATION, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UnexpectedTypeException.class)
    public ResponseEntity<ExceptionResponse> requestWithUnexpectedType(UnexpectedTypeException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_MALFORMED_REQUEST, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> requestWithInvalidArgument(MethodArgumentNotValidException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_MALFORMED_REQUEST, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ExceptionResponse> requestNotReadable(HttpMessageNotReadableException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_MALFORMED_REQUEST, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(JsonParseException.class)
    public ResponseEntity<ExceptionResponse> requestNotParsable(JsonParseException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_MALFORMED_REQUEST, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(TransactionSystemException.class)
    public ResponseEntity<ExceptionResponse> invalidRequest(TransactionSystemException ex) {
        return buildAndSendErrorResponse(ex, ERROR_CODE_MALFORMED_REQUEST, HttpStatus.BAD_REQUEST);
    }
}
