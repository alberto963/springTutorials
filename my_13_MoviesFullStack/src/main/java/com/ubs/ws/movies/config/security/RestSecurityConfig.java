package com.ubs.ws.movies.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@EnableGlobalMethodSecurity
public class RestSecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String ROLE_ADMIN = "ADMIN";
    private static final String ROLE_USER = "USER";

    private static final String BASE_URL = "/ubs/ws";
    private static final String MOVIE_SUBPATH = "movie";
    private static final String COMMENT_SUBPATH = "comment";

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.inMemoryAuthentication()
                .withUser("user").password("iamuser").roles(ROLE_USER)
                .and()
                .withUser("admin").password("iamadmin").roles(ROLE_USER, ROLE_ADMIN);
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeRequests()
                .antMatchers(BASE_URL + "/" + MOVIE_SUBPATH).hasAnyRole(ROLE_ADMIN)
                .antMatchers(BASE_URL + "/" + COMMENT_SUBPATH).hasAnyRole(ROLE_USER)
                .antMatchers(BASE_URL + "/" + MOVIE_SUBPATH + "/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic()
                .and()
                .csrf().disable();
    }
}
