package spring.tutorial;

import org.springframework.stereotype.Service;

@Service
public class SimpleServiceImpl implements SimpleService {

	@Override
	public void addSimple(SimpleDTO simpleDTO) throws DuplicateSimpleIdException {

	}

	@Override
	public SimpleDTO getSimpleById(long id) throws ResourceNotFoundException {
		return new SimpleDTO(0L, "title", "description");
	}

}
