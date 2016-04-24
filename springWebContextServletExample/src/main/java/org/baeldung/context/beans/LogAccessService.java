package org.baeldung.context.beans;

import org.baeldung.context.services.LogService;
import org.springframework.beans.factory.annotation.Autowired;

public class LogAccessService {
    @Autowired
    private LogService service;

    public String logAccess(String logPoint) {
        return service.logAccess("logPoint=" + logPoint);
    }
}
