package org.baeldung.context.services;

public class ConsoleLogService implements LogService {

	public String logAccess(String logInfo) {
		String ret = "Logging access on CONSOLE: " + logInfo;
		System.out.println(ret);
		return ret;
	}

}
