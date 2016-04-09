package com.tutorialspoint.injectingCollection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"injectingCollection/Beans.xml");

		JavaCollection jc = (JavaCollection) context.getBean("javaCollection");

		jc.getAddressList();
		jc.getAddressSet();
		jc.getAddressMap();
		jc.getAddressProp();

		@SuppressWarnings("resource")
		ApplicationContext context2 = new ClassPathXmlApplicationContext(
				"injectingCollection/Beans2.xml");

		JavaCollection jc2 = (JavaCollection) context2
				.getBean("javaCollection");

		jc2.getAddressList();
		jc2.getAddressSet();
		jc2.getAddressMap();
		jc2.getAddressProp();
	}
}
