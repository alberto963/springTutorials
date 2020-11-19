package spring.tutorial.components;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Component;

@Component
public class MyArgsBean {
	private boolean debug;
	private List<String> files;
	@Autowired
	public MyArgsBean(ApplicationArguments args) {
		setDebug(args.containsOption("debug"));
		files = args.getNonOptionArgs();
		// if run with "--debug logfile.txt" debug=true, files=["logfile.txt"]
		// System.out.println("args=" + files);
	}
	@Override
	public String toString() {
		return "MyArgsBean [debug=" + debug + ", files=" + files + "]";
	}
	public boolean isDebug() {
		return debug;
	}
	public List<String> getFiles() {
		return files;
	}
	private void setDebug(boolean debug) {
		this.debug = debug;
	}
}