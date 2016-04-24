package org.baeldung.context.services;

public class FileLogService implements LogService {
    public String logAccess(String logInfo) {
        String ret = "logging access on file " + logInfo;
        System.out.println(ret);
        return ret;
    }
}
