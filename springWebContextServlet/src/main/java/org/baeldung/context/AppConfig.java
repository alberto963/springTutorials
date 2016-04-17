package org.baeldung.context;

import org.baeldung.context.services.Service_0;
import org.baeldung.context.services.Service_0_Impl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * The AppConfig class would be equivalent to the following Spring <beans/> XML:
 * <beans> <bean id="Service_0_Impl" class="org.baeldung.context.services.Service_0_Impl"/>
 * </beans>
 */
@Configuration
public class AppConfig {

    @Bean
    public Service_0 service_0() {
        return new Service_0_Impl();
    }
}
