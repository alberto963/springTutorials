package spring.tutorial;

@SuppressWarnings("serial")
public class DuplicateSimpleIdException extends RuntimeException {

    private long simpleId;

    public DuplicateSimpleIdException(long simpleId, String message) {
        super(message);
        this.simpleId = simpleId;
    }

	public long getSimpleId() {
		return simpleId;
	}
}