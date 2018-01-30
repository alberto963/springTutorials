package com.my.springboot.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@SuppressWarnings("serial")
@Entity
@Table(name = "APP_POST")
public class Post implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty
	@Column(name = "TITLE", nullable = false)
	private String title;

	@Column(name = "BODY", nullable = false)
	private String body;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public boolean equals(Object o) {

		if (this == o)
			return true;

		if (o == null || getClass() != o.getClass())
			return false;

		Post user = (Post) o;

		if (id != null ? !id.equals(user.id) : user.id != null)
			return false;

		if (title != null ? !title.equals(user.title) : user.title != null)
			return false;

		if (body != null ? !body.equals(user.body) : user.body != null)
			return false;

		return true;
	}

	@Override
	public int hashCode() {
		int result;

		result = id != null ? id.hashCode() : 0;
		result = 31 * result + (title != null ? title.hashCode() : 0);
		result = 31 * result + (body != null ? body.hashCode() : 0);

		return result;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", title=" + title + ", body=" + body + "]";
	}

}
