package com.ap.simple;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "POJO")
public class Pojo {
	private int id;
	private String firstName;

	public Pojo(int id, String firstName) {
		super();
		this.id = id;
		this.firstName = firstName;
	}

	public Pojo() {
	}

	@Id @GeneratedValue
	@Column(name = "ID")
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
