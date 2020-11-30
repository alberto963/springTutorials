package com.ubs.ws.movies.pojo.dto;

import java.io.Serializable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class BaseCommentDTO implements Serializable {

    @NotNull
    @Size(min=1)
    protected String username;

    @NotNull
    @Size(min=1)
    protected String message;

    public BaseCommentDTO() {
    }

    public BaseCommentDTO(String username, String message) {
        this.username = username;
        this.message = message;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
