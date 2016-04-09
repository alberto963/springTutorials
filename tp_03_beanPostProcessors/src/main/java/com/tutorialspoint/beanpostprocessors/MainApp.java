package com.tutorialspoint.beanpostprocessors;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * The BeanPostProcessor interface defines callback methods that you can
 * implement to provide your own instantiation logic, dependency-resolution
 * logic etc. You can also implement some custom logic after the Spring
 * container finishes instantiating, configuring, and initializing a bean by
 * plugging in one or more BeanPostProcessor implementations.
 * 
 * The BeanPostProcessors operate on bean (or object) instances which means that
 * the Spring IoC container instantiates a bean instance and then
 * BeanPostProcessor interfaces do their work.
 * 
 * @author apetazzi
 * 
 */
public class MainApp {
	public static void main(String[] args) {

		/*
		 * An ApplicationContext automatically detects any beans that are
		 * defined with implementation of the BeanPostProcessor interface and
		 * registers these beans as post-processors, to be then called
		 * appropriately by the container upon bean creation.
		 */
		@SuppressWarnings("resource")
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"beanpostprocessors/Beans.xml");

		HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
		obj.getMessage();

		/*
		 * Here you need to register a shutdown hook registerShutdownHook()
		 * method that is declared on the AbstractApplicationContext class. This
		 * will ensures a graceful shutdown and calls the relevant destroy
		 * methods.
		 */
		context.registerShutdownHook();
	}
}
