package com.ap.simple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImp implements UserService {

	@Autowired(required = true)
	private UserDAO pojoDAO;

	@Override
	@Transactional
	public Integer addFname(String fname) {
		return pojoDAO.addFname(fname);
	}
}
