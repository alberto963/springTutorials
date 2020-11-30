package com.ubs.ws.movies.api.repository.impl;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import javax.validation.ConstraintViolationException;

import com.ubs.ws.movies.api.repository.CommentRepository;
import com.ubs.ws.movies.api.repository.MovieRepository;
import com.ubs.ws.movies.pojo.bean.Comment;
import com.ubs.ws.movies.pojo.bean.Movie;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.test.context.junit4.SpringRunner;

/* REPOSITORY INTEGRATION TESTING with embedded in-memory database accessed through Spring JPA TestEntityManager */
@RunWith(SpringRunner.class)
@DataJpaTest
public class RepositoriesIntegrationTest {

    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private CommentRepository commentRepository;

    private Movie dummyMovie;
    private Comment dummyComment;

    @Test
    public void save_whenMovieIsSaved_thenCanBeRetrieved() {
        // given
        Movie validMovie = new Movie(1L, "title", "description", null);
        testEntityManager.persist(validMovie);
        testEntityManager.flush();

        // when
        Movie found = movieRepository.findOne(validMovie.getMovieId());

        // then
        assertEquals(validMovie.getMovieId(), found.getMovieId());
    }

    @Test
    public void save_whenCommentLinksToMovie_thenMovieContainsComment() {
        // given
        givenLinkedDummyMovieAndComment();
        testEntityManager.persist(dummyMovie);
        commentRepository.save(dummyComment);

        // refresh persistence context
        testEntityManager.refresh(dummyMovie);

        // when
        Movie found = movieRepository.findOne(dummyMovie.getMovieId());

        // then
        assertThat(found.getComments().size(), is(1));
        assertEquals(found.getComments().get(0), dummyComment);
    }

    @Test(expected = InvalidDataAccessApiUsageException.class)
    public void save_whenCommentNotLinkToMovie_thenMovieNotContainComment() {
        // given
        givenUnlinkedDummyMovieAndComment();
        testEntityManager.persist(dummyMovie);
        commentRepository.save(dummyComment);

        // refresh persistence context
        testEntityManager.refresh(dummyMovie);

        // when
        Movie found = movieRepository.findOne(dummyMovie.getMovieId());

        // then
        assertThat(found.getComments().size(), is(0));
    }

    @Test(expected = ConstraintViolationException.class)
    public void validation_whenMovieHasEmptyTitle_thenConstraintViolationException() {
        // given
        Movie invalidMovie = new Movie(1L, "", "description", null);

        // when
        testEntityManager.persist(invalidMovie);
        testEntityManager.flush();
    }

    @Test(expected = ConstraintViolationException.class)
    public void validation_whenMovieHasMissingTitle_thenConstraintViolationException() {
        // given
        Movie invalidMovie = new Movie(1L, null, "description", null);

        // when
        testEntityManager.persist(invalidMovie);
        testEntityManager.flush();
    }

    @Test(expected = ConstraintViolationException.class)
    public void validation_whenMovieHasEmptyDescription_thenConstraintViolationException() {
        // given
        Movie invalidMovie = new Movie(1L, "title", "", null);

        // when
        testEntityManager.persist(invalidMovie);
        testEntityManager.flush();
    }

    @Test(expected = ConstraintViolationException.class)
    public void validation_whenMovieHasMissingDescription_thenConstraintViolationException() {
        // given
        Movie invalidMovie = new Movie(1L, "title", null, null);

        // when
        testEntityManager.persist(invalidMovie);
        testEntityManager.flush();
    }

    private void givenLinkedDummyMovieAndComment() {
        dummyMovie = new Movie(1L, "title", "description", null);
        dummyComment = new Comment(dummyMovie, "username", "message");
    }

    private void givenUnlinkedDummyMovieAndComment() {
        dummyMovie = new Movie(1L, "title", "description", null);
        dummyComment = new Comment(new Movie(2L, "title", "description", null), "username", "message");
    }
}
