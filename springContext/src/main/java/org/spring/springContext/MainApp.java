package org.spring.springContext;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"springContext/Beans.xml");

		MessagePrinter printer = context.getBean(MessagePrinter.class);
		printer.printMessage();
	}
}
