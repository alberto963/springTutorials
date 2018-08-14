package cj_01_2017_QR_P_A;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Optional;
import java.util.Scanner;
import java.util.Set;
import java.util.stream.Collectors;

public class Main {

	public static void main(String... p) throws Exception {
		/*-
		 * Trying to solve large dataset I get the following error, as expected:
		 * 
		 * Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
		 * at java.util.Arrays.copyOf(Unknown Source)
		 * at java.lang.String.concat(Unknown Source)
		 * at cj_01_2017_QR_P_A.Main.permutate(Main.java:99)
		 * at cj_01_2017_QR_P_A.Main.main(Main.java:68)
		 */
		// String fileName = "A-large-practice";

		/*
		 * Result submitted and judged correct
		 */
		String fileName = "A-small-practice";
		// String fileName = "A-simple-practice";

		/*
		 * A simple text scanner which can parse primitive types and strings using
		 * regular expressions.
		 * 
		 * A Scanner breaks its input into tokens using a delimiter pattern, which by
		 * default matches whitespace. The resulting tokens may then be converted into
		 * values of different types using the various next methods.
		 * 
		 */
		Scanner input = null;
		try {
			String basePath = "";
			// String basePath = "C:\\Users\\Alberto\\Downloads\\";
			input = new Scanner(new File(basePath + fileName + ".in"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();

			System.exit(0);
		}

		String outputFileName = fileName + ".out";
		PrintWriter out = new PrintWriter(outputFileName);

		int numCases = input.nextInt();
		for (int n = 0; n < numCases; n++) {
			String S = input.next();
			int K = input.nextInt();
			int s = S.length();
			int c = s - K + 1;
			double pow = Math.pow(2, c);
			// System.out.printf("Case #%d: K=%d s=%d c=%d pow=%d\n", n + 1, K, s, c, (int)
			// pow);

			Set<Set<String>> sets = new HashSet<Set<String>>();

			for (int m = 0; m < pow; m++) {
				// System.out.printf("Case #%d: m=%d\n", n + 1, m);
				Set<String> set = new HashSet<String>();

				String P = S;
				for (int k = 0; k < c; k++) {

					// call permutate for all 1 bit of binary representation of k with k equal to
					// the 1 position
					int pow2 = (int) Math.pow(2, k);
					int i = m & pow2;

					// System.out.printf("Case #%d: k=%d pow2=%d i=%d\n", n + 1, k, pow2, i);

					if (i != 0) {
						P = permutate(P, K, k);
						set.add(P);
					}
				}
				sets.add(set);
			}
			// System.out.printf("Case #%d: sets=%s\n", n + 1, sets);

			String finalResult = buildResult(s);
			Optional<Set<String>> minSet = findMinSet(sets, finalResult);
			int r = minSet.isPresent() ? minSet.get().size() : 0;

			Object o = r == 0 ? S.compareTo(finalResult) == 0 ? r : "IMPOSSIBLE" : r;

			String result = String.format("Case #%d: %s\n", n + 1, o);

			System.out.printf(result);
			out.print(result);
		}

		out.close();
	}

	public static String permutate(String S, int K, int p) {

		String out = S.substring(0, p);
		for (int i = 0; i < K; i++) {
			char c = S.charAt(p + i) == '-' ? '+' : '-';
			out = out.concat(Character.toString(c));
		}

		out = out.concat(S.substring(p + K));

		return out;
	}

	public static String buildResult(int s) {

		String result = new String();
		for (int i = 0; i < s; i++) {
			result = result.concat("+");
		}

		return result;
	}

	public static Optional<Set<String>> findMinSet(Set<Set<String>> sets, String result) {

		Set<Set<String>> validSets = sets.stream().filter(s -> s.contains(result)).collect(Collectors.toSet());

		Optional<Set<String>> minSet = validSets.stream().min((s1, s2) -> Integer.compare(s1.size(), s2.size()));

		return minSet;
	}
}
