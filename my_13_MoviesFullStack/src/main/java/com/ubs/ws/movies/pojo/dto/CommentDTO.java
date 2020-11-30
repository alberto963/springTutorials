package com.ubs.ws.movies.pojo.dto;

import javax.validation.constraints.NotNull;

public class CommentDTO extends BaseCommentDTO {

    @NotNull
    private Long movieId;

    public CommentDTO() {
    }

    public CommentDTO(Long movieId, String username, String message) {
        super(username, message);
        this.movieId = movieId;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }
}
