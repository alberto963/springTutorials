<!DOCTYPE html>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<meta charset="utf-8">
<title>File index.jsp</title>
</head>
<body>
	<br>
	<c:url value="/customers" var="customers" />
	<a href="${customers}">Click to get customer list</a>
</body>
</html>