package spring.tutorial.components;

import org.springframework.stereotype.Component;

@Component
public class DumbRiskAssessor implements RiskAssessor {
	@Override
	public boolean isLow() {
		return true;
	}
}
