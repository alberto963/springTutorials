package com.tutorialspoint.beanpostprocessors;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.core.Ordered;

/**
 * The BeanPostProcessor interface defines callback methods that you can
 * implement to provide your own instantiation logic, dependency-resolution
 * logic etc. You can also implement some custom logic after the Spring
 * container finishes instantiating, configuring, and initializing a bean by
 * plugging in one or more BeanPostProcessor implementations.
 * 
 * You can configure multiple BeanPostProcessor interfaces and you can control
 * the order in which these BeanPostProcessor interfaces execute by setting the
 * order property provided the BeanPostProcessor implements the Ordered
 * interface.
 * 
 * This is very basic example of implementing BeanPostProcessor, which prints a
 * bean name before and after initialization of any bean. You can implement more
 * complex logic before and after instantiating a bean because you have access
 * on bean object inside both the post processor methods.
 * 
 * @author apetazzi
 * 
 */
public class InitHelloWorld implements BeanPostProcessor, Ordered {

	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("BeforeInitialization 0 : " + beanName);
		return bean; // you can return any other object as well
	}

	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("AfterInitialization 0 : " + beanName);
		return bean; // you can return any other object as well
	}

	public int getOrder() {
		return 0;
	}

}
