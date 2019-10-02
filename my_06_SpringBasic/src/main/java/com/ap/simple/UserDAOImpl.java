package com.ap.simple;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
@PersistenceContext
public class UserDAOImpl implements UserDAO {
	
	@Autowired
	private SessionFactory factory;

	@Override
	public Integer addFname(String fname) {
		/* Method to CREATE a pojo in the database */
		Session session = factory.openSession();

		Transaction tx = null;
		Integer userId = null;

		try {
			tx = session.beginTransaction();
			User user = new User();
			user.setFirstName(fname);

			userId = (Integer) session.save(user);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}

		return userId;
	}

}
