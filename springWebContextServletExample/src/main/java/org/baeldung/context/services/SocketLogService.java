package org.baeldung.context.services;

public class SocketLogService implements LogService {
    public String logAccess(String logInfo) {
        String ret = "logging access on socket " + logInfo;
        System.out.println(ret);
        return ret;
    }
}
