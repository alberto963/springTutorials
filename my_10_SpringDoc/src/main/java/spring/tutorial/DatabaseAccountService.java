package spring.tutorial;

import org.springframework.stereotype.Service;

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