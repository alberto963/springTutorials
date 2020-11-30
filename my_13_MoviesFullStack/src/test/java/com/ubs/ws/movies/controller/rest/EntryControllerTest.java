package com.ubs.ws.movies.controller.rest;

import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubs.ws.movies.api.service.CommentService;
import com.ubs.ws.movies.api.service.MovieService;
import com.ubs.ws.movies.pojo.dto.BaseCommentDTO;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import com.ubs.ws.movies.pojo.dto.MovieDTO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

/* CONTROLLER INTEGRATION TESTING using MockMvc instance to setup a Spring MVC context with a web server */
@RunWith(SpringRunner.class)
@WebMvcTest(controllers = EntryController.class, secure = false)
public class EntryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    private MovieService movieService;

    @MockBean
    private CommentService commentService;

    private MovieDTO dummyMovieDTO;
    private MovieDTO dummyMovieDTOwithComments;
    private CommentDTO dummyCommentDTO;

    private static final String BASE_URL = "/ubs/ws";
    private static final String MOVIE_SUBPATH = "movie";
    private static final String COMMENT_SUBPATH = "comment";

    @Test
    public void get_whenMovieExists_thenResponseIs200() throws Exception {
        // given
        givenDummyMovieDTO();
        given(movieService.getMovieById(dummyMovieDTO.getMovieId())).willReturn(dummyMovieDTO);

        // when-then
        mockMvc.perform(get(buildGetUrlWithIdVariable(MOVIE_SUBPATH), dummyMovieDTO.getMovieId())
                .contentType(APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void get_whenMovieWithNoCommentsExists_thenJsonResponseIsCorrect() throws Exception {
        // given
        givenDummyMovieDTO();
        given(movieService.getMovieById(dummyMovieDTO.getMovieId())).willReturn(dummyMovieDTO);

        // when-then
        mockMvc.perform(get(buildGetUrlWithIdVariable(MOVIE_SUBPATH), dummyMovieDTO.getMovieId())
                .contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.movieId", is(dummyMovieDTO.getMovieId().intValue())))
                .andExpect(jsonPath("$.title", is(dummyMovieDTO.getTitle())))
                .andExpect(jsonPath("$.description", is(dummyMovieDTO.getDescription())))
                .andExpect(jsonPath("$.comments", is(dummyMovieDTO.getComments())));
    }

    @Test
    public void get_whenMovieWithCommentsExists_thenJsonResponseIsCorrect() throws Exception {
        // given
        givenDummyMovieDTOwithComments();
        given(movieService.getMovieById(dummyMovieDTOwithComments.getMovieId())).willReturn(dummyMovieDTOwithComments);

        // when-then
        mockMvc.perform(get(buildGetUrlWithIdVariable(MOVIE_SUBPATH), dummyMovieDTOwithComments.getMovieId())
                .contentType(APPLICATION_JSON))
                .andExpect(jsonPath("$.movieId", is(dummyMovieDTOwithComments.getMovieId().intValue())))
                .andExpect(jsonPath("$.title", is(dummyMovieDTOwithComments.getTitle())))
                .andExpect(jsonPath("$.description", is(dummyMovieDTOwithComments.getDescription())))
                .andExpect(jsonPath("$.comments[0].username", is(dummyMovieDTOwithComments.getComments().get(0).getUsername())))
                .andExpect(jsonPath("$.comments[0].message", is(dummyMovieDTOwithComments.getComments().get(0).getMessage())))
                .andExpect(jsonPath("$.comments[1].username", is(dummyMovieDTOwithComments.getComments().get(1).getUsername())))
                .andExpect(jsonPath("$.comments[1].message", is(dummyMovieDTOwithComments.getComments().get(1).getMessage())));
    }

    @Test
    public void post_whenMovieIsValid_thenResponseIs201() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    public void post_whenMovieHasMissingId_thenResponseIs400() throws Exception {
        // given
        MovieDTO invalidMovieDTO = new MovieDTO(null, "title", "description", null);
        doNothing().when(movieService).addMovie(invalidMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidMovieDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void post_whenMovieHasEmptyTitle_thenResponseIs400() throws Exception {
        // given
        MovieDTO invalidMovieDTO = new MovieDTO(1L, "", "description", null);
        doNothing().when(movieService).addMovie(invalidMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidMovieDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void post_whenMovieHasMissingTitle_thenResponseIs400() throws Exception {
        // given
        MovieDTO invalidMovieDTO = new MovieDTO(1L, null, "description", null);
        doNothing().when(movieService).addMovie(invalidMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidMovieDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void post_whenCommentIsValid_thenResponseIs201() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    public void post_whenCommentHasMissingId_thenResponseIs400() throws Exception {
        // given
        CommentDTO invalidCommentDTO = new CommentDTO(null, "username", "message");
        doNothing().when(commentService).addComment(invalidCommentDTO);

        //
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidCommentDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void post_whenCommentHasEmptyUsername_thenResponseIs400() throws Exception {
        // given
        CommentDTO invalidCommentDTO = new CommentDTO(1L, "", "message");
        doNothing().when(commentService).addComment(invalidCommentDTO);

        // then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidCommentDTO)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void post_whenCommentHasMissingUsername_thenResponseIs400() throws Exception {
        // given
        CommentDTO invalidCommentDTO = new CommentDTO(1L, null, "message");
        doNothing().when(commentService).addComment(invalidCommentDTO);

        // then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(invalidCommentDTO)))
                .andExpect(status().isBadRequest());
    }

    private void givenDummyMovieDTO() {
        dummyMovieDTO = new MovieDTO(1L, "title", "description", null);
    }

    private void givenDummyMovieDTOwithComments() {
        List<BaseCommentDTO> comments = new LinkedList<>();
        comments.add(new BaseCommentDTO("username1", "message1"));
        comments.add(new BaseCommentDTO("username2", "message2"));
        dummyMovieDTOwithComments = new MovieDTO(2L, "superTitle", "superDescription", comments);
    }

    private void givenDummyCommentDTO() {
        dummyCommentDTO = new CommentDTO(3L, "username", "message");
    }

    private String buildPostUrl(String subPath) {
        return new StringBuilder()
                .append(BASE_URL)
                .append("/")
                .append(subPath)
                .toString();
    }

    private String buildGetUrlWithIdVariable(String subPath) {
        return new StringBuilder()
                .append(BASE_URL)
                .append("/")
                .append(subPath)
                .append("/{id}")
                .toString();
    }
}