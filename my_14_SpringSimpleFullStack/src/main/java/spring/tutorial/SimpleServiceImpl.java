package spring.tutorial;

import java.util.Hashtable;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class SimpleServiceImpl implements SimpleService {

	private Map<Long, SimpleDTO> mem = new Hashtable<>();

	@Override
	public void addSimple(SimpleDTO simpleDTO) throws DuplicateSimpleIdException {
		mem.put(simpleDTO.getId(), simpleDTO);
	}

	@Override
	public SimpleDTO getSimpleById(long id) throws ResourceNotFoundException {
		return mem.get(id);
	}
}
