package org.baeldung.context;

import javax.servlet.ServletContext;

import org.baeldung.context.beans.LogAccessService;
import org.baeldung.context.beans.LogConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

@Controller
public class LoggerController {
    @Autowired
    private ServletContext servletContext;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private LogConfiguration environment;

    @RequestMapping("/checkin/{idCode}")
    @ResponseBody
    public String checkIn(@PathVariable int idCode) {
        System.out.println("checkIn called");
        String companyName = environment.getCompanyName();
        WebApplicationContext rootContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        LogAccessService logService = webApplicationContext.getBean(LogAccessService.class);
        String ret = logService.logAccess(webApplicationContext.getDisplayName().substring(37, webApplicationContext.getDisplayName().lastIndexOf('-')) + "@" + companyName, idCode);
        return ret;
    }
}