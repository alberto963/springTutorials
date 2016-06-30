package org.baeldung.context.beans;

import org.baeldung.context.services.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class LogAccessService {

    private LogService service;

    public LogAccessService(LogService service) {
        super();
        this.service = service;
    }

    public String logAccess(String logPoint, int id) {
        return service.logAccess("\"Employee " + id + " entered/exited " + logPoint+"\"");
    }
}
