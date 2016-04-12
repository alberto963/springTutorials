package com.tutorialspoint.autowiringByConstructor;

public class TextEditor {
	private final SpellChecker spellChecker;
	private final String name;

	public TextEditor(SpellChecker spellChecker, String name) {
		this.spellChecker = spellChecker;
		this.name = name;
	}

	public SpellChecker getSpellChecker() {
		return spellChecker;
	}

	public String getName() {
		return name;
	}

	public void spellCheck() {
		spellChecker.checkSpelling();
	}
}
