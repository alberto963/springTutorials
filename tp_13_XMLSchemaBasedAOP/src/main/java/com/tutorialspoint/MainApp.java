package com.tutorialspoint;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
	public static void main(String[] args) {
		@SuppressWarnings("resource")
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"Beans2.xml");

		Student student = (Student) context.getBean("student");

		student.getName();
		student.getAge();

		student.printThrowException();
	}
}