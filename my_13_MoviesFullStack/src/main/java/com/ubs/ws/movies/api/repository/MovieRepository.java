package com.ubs.ws.movies.api.repository;

import com.ubs.ws.movies.pojo.bean.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}
