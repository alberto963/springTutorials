package com.ap.simple;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {
	@Id
	@GeneratedValue
	@Column(name = "ID")
	private int id;

	@Column(name = "FIRST_NAME")
	private String firstName;

	public User(int id, String firstName) {
		super();
		this.id = id;
		this.firstName = firstName;
	}

	public User() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

}
