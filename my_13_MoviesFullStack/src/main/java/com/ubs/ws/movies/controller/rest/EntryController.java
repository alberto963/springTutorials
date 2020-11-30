package com.ubs.ws.movies.controller.rest;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.ubs.ws.movies.api.service.CommentService;
import com.ubs.ws.movies.api.service.MovieService;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import com.ubs.ws.movies.pojo.dto.MovieDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ubs/ws")
public class EntryController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private CommentService commentService;

    @RequestMapping(value = "/movie", method = RequestMethod.POST)
    public void addMovie(@Valid @RequestBody MovieDTO movieDTO, HttpServletResponse response) {
        movieService.addMovie(movieDTO);
        response.setStatus(HttpStatus.CREATED.value());
    }

    @RequestMapping(value = "/comment", method = RequestMethod.POST)
    public void addComment(@Valid @RequestBody CommentDTO commentDTO, HttpServletResponse response) {
        commentService.addComment(commentDTO);
        response.setStatus(HttpStatus.CREATED.value());
    }

    @RequestMapping(value = "/movie/{movieId}", method = RequestMethod.GET)
    public MovieDTO getMovieById(@PathVariable("movieId") long movieId) {
        return movieService.getMovieById(movieId);
    }

/*    // uncomment for additional dev-testing
    @RequestMapping(value = "/movies", method = RequestMethod.GET)
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @RequestMapping(value = "/comments", method = RequestMethod.GET)
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }*/
}
