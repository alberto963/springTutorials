package com.baeldung.spring.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;

import com.baeldung.spring.web.config.LogAccessService;
import com.baeldung.spring.web.config.LogConfiguration;

@Controller
public class LoggerController {

	@Autowired
	private LogConfiguration environment;

	@Autowired
	private LogAccessService logService;

	@Autowired
	private WebApplicationContext webApplicationContext;

	@RequestMapping("/checkin/{idCode}")
	@ResponseBody
	public String checkIn(@PathVariable int idCode) {
		System.out.println("checkIn called");
		String companyName = environment.getCompanyName();
		String displayName = webApplicationContext.getDisplayName();
		//String building = displayName.substring(37, displayName.lastIndexOf('-'));
		String building = displayName;
		return logService.logAccess(building + "@" + companyName, idCode);
	}
}