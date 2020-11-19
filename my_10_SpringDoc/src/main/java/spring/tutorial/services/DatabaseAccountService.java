package spring.tutorial.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.tutorial.components.MyArgsBean;
import spring.tutorial.components.RiskAssessor;

@Service
public class DatabaseAccountService implements AccountService {

	private final RiskAssessor riskAssessor;
	
	@Autowired
	private MyArgsBean myArgs;


	public DatabaseAccountService(RiskAssessor riskAssessor) {
		this.riskAssessor = riskAssessor;
	}

	@Override
	public String open() {
		System.out.println("myArgs=" + myArgs);

		return riskAssessor.isLow() ? "CONFIRMED" : "DENIED";
	}

	// ...
}