package com.baeldung.spring.web.services;

public class ConsoleLogService implements LogService {

	@Override
	public String logAccess(String logInfo) {
		String ret = "Logging access on CONSOLE: " + logInfo;
        System.out.println(ret);
        return ret;
	}

}
