package com.ap.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.ap.model.UserDetails;

@Repository
public class UserDaoImpl implements UserDao {

	@PersistenceContext
    private EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<UserDetails> getUserDetails() {
		Session session = entityManager.unwrap(Session.class);
		
		// Transaction transaction = session.beginTransaction();
		Criteria criteria = session.createCriteria(UserDetails.class);
		return criteria.list();
	}
}