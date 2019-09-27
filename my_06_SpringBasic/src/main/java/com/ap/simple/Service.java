package com.ap.simple;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;

public class Service {
	private static SessionFactory factory;

	/* Method to CREATE a pojo in the database */
	public Integer addpojo(String fname, String lname, int salary) {
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
