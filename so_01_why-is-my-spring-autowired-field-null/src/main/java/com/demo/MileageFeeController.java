package com.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MileageFeeController {
    @Autowired
    private MileageFeeCalculator calc;

    @RequestMapping("/mileage/{miles}")
    @ResponseBody
    public String mileageFee(@PathVariable int miles) {
        float mileageCharge = calc.mileageCharge(miles);
        return Float.toString(mileageCharge);
    }
}