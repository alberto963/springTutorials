package com.ap.simple;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.SessionFactory;

@Repository
public class Service {
	
	@Autowired
	private SessionFactory factory;

	public Service() {
	}

	/* Method to CREATE a pojo in the database */
	public Integer addpojo(String fname) {
		Session session = factory.openSession();
		Transaction tx = null;
		Integer pojoID = null;

		try {
			tx = session.beginTransaction();
			Pojo pojo = new Pojo();
			pojo.setFirstName(fname);

			pojoID = (Integer) session.save(pojo);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		return pojoID;
	}
}
