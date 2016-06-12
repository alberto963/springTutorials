package org.baeldung.context;

import org.baeldung.context.beans.LogAccessService;
import org.baeldung.context.beans.LogConfiguration;
import org.baeldung.context.services.FileLogService;
import org.baeldung.context.services.SocketLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoggerServlet {

    @Autowired
    private LogConfiguration environment;

    @RequestMapping("/MainBuilding/{idCode}")
    @ResponseBody
    public String checkInMain( @PathVariable int idCode) {
        String companyName = environment.getCompanyName();
        LogAccessService service = new LogAccessService(new FileLogService());
        String ret = service.logAccess("MainBuilding" + "@" + companyName, idCode);

        return ret;
    }
    
    @RequestMapping("/SecondaryBuilding/{idCode}")
    @ResponseBody
    public String checkInSecondary( @PathVariable int idCode) {
        String companyName = environment.getCompanyName();
        LogAccessService service = new LogAccessService(new SocketLogService());
        String ret = service.logAccess("SecondaryBuilding" + "@" + companyName, idCode);

        return ret;
    }
}