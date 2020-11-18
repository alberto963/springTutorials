package spring.tutorial.services;

import org.springframework.stereotype.Service;

import spring.tutorial.components.RiskAssessor;

@Service
public class DatabaseAccountService implements AccountService {

	private final RiskAssessor riskAssessor;


	public DatabaseAccountService(RiskAssessor riskAssessor) {
		this.riskAssessor = riskAssessor;
	}

	@Override
	public String open() {
		return riskAssessor.isLow() ? "CONFIRMED" : "DENIED";
	}

	// ...
}