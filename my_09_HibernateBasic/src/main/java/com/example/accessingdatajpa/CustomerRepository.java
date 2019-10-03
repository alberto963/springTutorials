package com.example.accessingdatajpa;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

/**
 * 
 * This is what makes Spring Data JPA so powerful: You need not write an
 * implementation of the repository interface. Spring Data JPA creates an
 * implementation when you run the application.
 * 
 */
public interface CustomerRepository extends CrudRepository<Customer, Long> {

	List<Customer> findByLastName(String lastName);

	Customer findById(long id);
}
