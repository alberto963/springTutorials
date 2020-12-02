package spring.tutorial;

@SuppressWarnings("serial")
public class ResourceNotFoundException extends RuntimeException {

    private long id;

    public ResourceNotFoundException(long id, String message) {
        super(message);
        this.id = id;
    }

	public long getId() {
		return id;
	}
}