package com.baeldung.spring.web.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class MainWebAppInitializer implements WebApplicationInitializer {

	public void onStartup(ServletContext sc) throws ServletException {

		// Create the 'root' Spring application context
		final AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.setConfigLocation("com.baeldung.spring.web.config.root");

		// Manages the lifecycle of the root application context
		sc.addListener(new ContextLoaderListener(rootContext));

		AnnotationConfigWebApplicationContext mainBuildingContext = new AnnotationConfigWebApplicationContext();
		// mainBuildingContext.setConfigLocation("com.baeldung.spring.web.config.mainBuilding");
		mainBuildingContext.register(com.baeldung.spring.web.config.mainBuilding.AppConfig.class);
		final ServletRegistration.Dynamic mainBuildingServlet = sc.addServlet("MainBuilding",
				new DispatcherServlet(mainBuildingContext));
		mainBuildingServlet.setLoadOnStartup(1);
		mainBuildingServlet.addMapping("/MainBuilding/*");

		AnnotationConfigWebApplicationContext secondaryBuildingContext = new AnnotationConfigWebApplicationContext();
		// secondaryBuildingContext.setConfigLocation("com.baeldung.spring.web.config.secondaryBuilding");
		secondaryBuildingContext.register(com.baeldung.spring.web.config.secondaryBuilding.AppConfig.class);
		final ServletRegistration.Dynamic secondaryBuildingServlet = sc.addServlet("SecondaryBuilding",
				new DispatcherServlet(secondaryBuildingContext));
		secondaryBuildingServlet.setLoadOnStartup(1);
		secondaryBuildingServlet.addMapping("/SecondaryBuilding/*");

		AnnotationConfigWebApplicationContext minorBuildingContext = new AnnotationConfigWebApplicationContext();
		minorBuildingContext.setConfigLocation("com.baeldung.spring.web.config.minorBuilding");
		//minorBuildingContext.register(com.baeldung.spring.web.config.minorBuilding.AppConfig.class);
		final ServletRegistration.Dynamic minorBuildingServlet = sc.addServlet("MinorBuilding",
				new DispatcherServlet(minorBuildingContext));
		minorBuildingServlet.setLoadOnStartup(1);
		minorBuildingServlet.addMapping("/MinorBuilding/*");
	}

}
