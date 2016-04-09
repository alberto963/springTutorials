package com.tutorialspoint.constructorBasedDependencyInjection;

public class TextEditor {
	private final SpellChecker spellChecker;

	public TextEditor(SpellChecker spellChecker, int release,
			String manufacturer) {
		System.out.println("Inside TextEditor constructor. Manufacturer="
				+ manufacturer);
		this.spellChecker = spellChecker;
	}

	public void spellCheck() {
		spellChecker.checkSpelling();
	}
}
