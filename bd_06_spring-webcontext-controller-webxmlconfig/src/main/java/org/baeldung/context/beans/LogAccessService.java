package org.baeldung.context.beans;

import org.baeldung.context.services.ConsoleLogService;
import org.baeldung.context.services.FileLogService;
import org.baeldung.context.services.LogService;
import org.baeldung.context.services.SocketLogService;

public class LogAccessService {

    private String service;
    private LogService serviceImpl;

    public void setService(String service) {
        this.service = service;
    }

    public String logAccess(String logPoint, int id) {
        if (service.compareTo("socket") == 0) {
            serviceImpl = new SocketLogService();
        }
        if (service.compareTo("file") == 0) {
            serviceImpl = new FileLogService();
        }
        if (service.compareTo("console") == 0) {
            serviceImpl = new ConsoleLogService();
        }
        return serviceImpl.logAccess("\"Employee " + id + " entered " + logPoint + "\"");
    }
}
