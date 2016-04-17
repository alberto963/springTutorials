package org.baeldung.context.beans;

import org.baeldung.context.services.Service_0;
import org.springframework.beans.factory.annotation.Autowired;

public class Bean_2 {
    @Autowired
    private Service_0 service;

    public String api_0() {
        return "Bean_2 " + service.api_0();
    }
}
