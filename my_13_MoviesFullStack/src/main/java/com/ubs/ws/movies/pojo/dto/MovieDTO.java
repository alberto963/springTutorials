package com.ubs.ws.movies.pojo.dto;

import java.io.Serializable;
import java.util.List;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class MovieDTO implements Serializable {

    @NotNull
    private Long movieId;

    @NotNull
    @Size(min=1)
    private String title;

    @NotNull
    @Size(min=1)
    private String description;

    private List<BaseCommentDTO> comments;

    public MovieDTO() {
    }

    public MovieDTO(Long movieId, String title, String description, List<BaseCommentDTO> comments) {
        this.movieId = movieId;
        this.title = title;
        this.description = description;
        this.comments = comments;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<BaseCommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<BaseCommentDTO> comments) {
        this.comments = comments;
    }
}
