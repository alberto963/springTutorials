package com.demo;

import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ShowMessageController {

    @RequestMapping("/showMessageJson")
    public @ResponseBody List<Simple> actionJsonRest(HttpServletRequest request) {

        System.out.println("ShowMessageController showMessageJson");

        List<Simple> r = new LinkedList<Simple>();
        r.add(new Simple());

        return r;
    }

    @RequestMapping("/showMessage")
    public ModelAndView actionMvc(HttpServletRequest request) {
        System.out.println("ShowMessageController showMessage request=" + request);

        // Prepare the result view (showMessage.jsp):
        return new ModelAndView("showMessage", "message", "Hello Spring MVC Framework + Maven!");
    }

    static class Simple {
        private String name = "";
        private int age = 0;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
}
