package org.baeldung.context;

import org.baeldung.context.beans.Bean_0;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {
        @SuppressWarnings("resource")
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring/application-config.xml");

        System.out.println("MainApp initFrameworkServlet applicationContext=" + applicationContext.getApplicationName());

        System.out.println("MainApp initFrameworkServlet applicationContext contains Bean_0=" + applicationContext.containsBean("org.baeldung.context.beans.Bean_0"));

        Bean_0 bean0 = (Bean_0) applicationContext.getBean("org.baeldung.context.beans.Bean_0");
        String res = bean0.api_0();
        System.out.println("MainApp api_0=" + res);
    }
}
