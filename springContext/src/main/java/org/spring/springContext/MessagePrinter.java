package org.spring.springContext;

import org.springframework.beans.factory.annotation.Autowired;

public class MessagePrinter {
	@Autowired
	private MessageService service;

	public void printMessage() {
		System.out.println(service.getMessage());
	}
}
