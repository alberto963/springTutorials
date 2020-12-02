package spring.tutorial;

public interface SimpleService {
	void addSimple(SimpleDTO simpleDTO) throws DuplicateSimpleIdException;

    SimpleDTO getSimpleById(long simpleId) throws ResourceNotFoundException;
}
