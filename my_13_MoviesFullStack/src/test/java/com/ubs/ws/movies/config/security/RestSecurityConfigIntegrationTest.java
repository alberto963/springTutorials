package com.ubs.ws.movies.config.security;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubs.ws.movies.api.service.CommentService;
import com.ubs.ws.movies.api.service.MovieService;
import com.ubs.ws.movies.pojo.dto.CommentDTO;
import com.ubs.ws.movies.pojo.dto.MovieDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.web.FilterChainProxy;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

/* AUTHENTICATION INTEGRATION TESTING loading the WebApplicationContext and applying security config */

/*
The following unit tests are designed with well-formed valid request bodies in principle because herein the focus is
on the authentication and not on the validation, which is tested separately without authentication.
*/
@RunWith(SpringRunner.class)
@SpringBootTest
public class RestSecurityConfigIntegrationTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private FilterChainProxy filterChainProxy;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private MovieService movieService;

    @MockBean
    private CommentService commentService;

    private MockMvc mockMvc;

    private MovieDTO dummyMovieDTO;
    private CommentDTO dummyCommentDTO;

    private static final String BASE_URL = "/ubs/ws";
    private static final String MOVIE_SUBPATH = "movie";
    private static final String COMMENT_SUBPATH = "comment";

    // Details matching authentications of RestSecurityConfig.class
    private static final String USER = "user";
    private static final String USER_PASSWORD = "iamuser";
    private static final String ADMIN = "admin";
    private static final String ADMIN_PASSWORD = "iamadmin";

    @Before
    public void applySecurityConfig() {
        this.mockMvc = webAppContextSetup(webApplicationContext)
                .apply(springSecurity(filterChainProxy))
                .build();
    }

    @Test
    public void postMovie_whenUnknown_thenResponseIs401() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .with(httpBasic("blabla", "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void postMovie_whenUserWithCorrectLogin_thenResponseIs403() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .with(httpBasic(USER, USER_PASSWORD))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isForbidden());
    }

    @Test
    public void postMovie_whenUserWithUncorrectLogin_thenResponseIs401() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .with(httpBasic(USER, "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void postMovie_whenAdminWithCorrectLogin_thenResponseIs201() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .with(httpBasic(ADMIN, ADMIN_PASSWORD))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    public void postMovie_whenAdminWithUncorrectLogin_thenResponseIs401() throws Exception {
        // given
        givenDummyMovieDTO();
        doNothing().when(movieService).addMovie(dummyMovieDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(MOVIE_SUBPATH))
                .with(httpBasic(ADMIN, "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyMovieDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void postComment_whenUnknown_thenResponseIs401() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .with(httpBasic("blabla", "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void postComment_whenUserWithCorrectLogin_thenResponseIs201() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .with(httpBasic(USER, USER_PASSWORD))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    public void postComment_whenUserWithUncorrectLogin_thenResponseIs401() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .with(httpBasic(USER, "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void postComment_whenAdminWithCorrectLogin_thenResponseIs201() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .with(httpBasic(ADMIN, ADMIN_PASSWORD))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    public void postComment_whenAdminWithUncorrectLogin_thenResponseIs401() throws Exception {
        // given
        givenDummyCommentDTO();
        doNothing().when(commentService).addComment(dummyCommentDTO);

        // when-then
        mockMvc.perform(post(buildPostUrl(COMMENT_SUBPATH))
                .with(httpBasic(ADMIN, "blabla"))
                .contentType(APPLICATION_JSON)
                .content(objectMapper.writeValueAsBytes(dummyCommentDTO)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void getMovie_whenRequested_thenNoAuthenticationRequired() throws Exception {
        // given
        givenDummyMovieDTO();
        given(movieService.getMovieById(dummyMovieDTO.getMovieId())).willReturn(dummyMovieDTO);

        // when-then
        mockMvc.perform(get(buildGetUrlWithIdVariable(MOVIE_SUBPATH), dummyMovieDTO.getMovieId())
                .contentType(APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    private void givenDummyMovieDTO() {
        dummyMovieDTO = new MovieDTO(1L, "title", "description", null);
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