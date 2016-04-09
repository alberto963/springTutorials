package com.tutorialspoint.eventHandling;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextStartedEvent;

public class HelloWorld2 implements ApplicationListener<ContextStartedEvent> {
	private String message;

	public void setMessage(String message) {
		this.message = message;
	}

	public void getMessage() {
		System.out.println("Your Message : " + message);
	}

	@Override
	public void onApplicationEvent(ContextStartedEvent event) {
		System.out.println("HelloWorld2 ContextStartedEvent Received event="
				+ event);
	}
}