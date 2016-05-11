package com.demo;

import org.springframework.stereotype.Service;

@Service
public class MileageRateService {
    public float ratePerMile() {
        return 0.565f;
    }
}