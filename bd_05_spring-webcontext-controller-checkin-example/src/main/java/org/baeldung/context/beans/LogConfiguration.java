package org.baeldung.context.beans;

import org.springframework.stereotype.Service;

@Service
public class LogConfiguration {
    public String getCompanyName() {
        return "Baeldung";
    }
}
