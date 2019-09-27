package com.ap.simple;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PojoServiceImp implements PojoService {

	@Autowired(required = true)
	private PojoDAO pojoDAO;

	@Override
	@Transactional
	public Integer addFname(String fname) {
		return pojoDAO.addFname(fname);
	}
}
