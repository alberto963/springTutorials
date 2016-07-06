package org.baeldung.context;

import org.baeldung.context.beans.LogAccessService;
import org.baeldung.context.beans.LogConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;

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
		String building = displayName.substring(37, displayName.lastIndexOf('-'));
		return logService.logAccess(building + "@" + companyName, idCode);
	}
}