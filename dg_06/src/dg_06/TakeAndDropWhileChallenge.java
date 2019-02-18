package dg_06;

import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.DoubleStream;
import java.util.stream.Stream;

public class TakeAndDropWhileChallenge {

	public static void main(String... castleVania) {
		List<Integer> alucardHits = List.of(9, 7, 1, 8, 5);
		Set<Integer> draculaHits = Set.of(9, 6, 5, 7, 8);

		Stream<Integer> alucardPerformedHits = alucardHits.stream().takeWhile(i -> i > 5).dropWhile(i -> i > 8);
		// alucardPerformedHits.forEach(System.out::print);

		System.out.println();

		Stream<Integer> other = alucardHits.stream().takeWhile(i -> i > 0).flatMap(h -> Stream.of(h));
		other.forEach(System.out::print);

		System.out.println();

		Stream<Integer> draculaPerformedHits = draculaHits.stream().takeWhile(i -> i > 1).dropWhile(i -> i > 7);
		// draculaPerformedHits.forEach(System.out::print);

		Stream.of(alucardPerformedHits, draculaPerformedHits).flatMap(h -> h).forEach(System.out::print);
		System.out.println();

		List<DoubleStream> csv = List.of(g(), g());
		csv.stream().forEach(s -> {
			s.forEach(d -> System.out.format("%.3f ", d));
			System.out.println();
		});
	}

	public static DoubleStream g() {
		DoubleStream s = new Random().doubles(5, 3, 4).sorted();
//		s.forEach(d -> System.out.format("%.3f ", d));
//		System.out.println();

		return s;
	}
}