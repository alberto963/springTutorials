package com.tutorialspoint.autowiringByType;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"autowiringByType/Beans.xml");

		TextEditor te = (TextEditor) context.getBean("textEditor");

		te.spellCheck();
	}
}
