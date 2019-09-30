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
		 * Trying to solve large dataset with resolveSmall I get the following error, as expected:
		 * 
		 * Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
		 * at java.util.Arrays.copyOf(Unknown Source)
		 * at java.lang.String.concat(Unknown Source)
		 * at cj_01_2017_QR_P_A.Main.permutate(Main.java:99)
		 * at cj_01_2017_QR_P_A.Main.main(Main.java:68)
		 */
		String fileName = "A-large-practice";

		/*
		 * Result submitted and judged correct
		 */
		// String fileName = "A-small-practice";
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
			int N = S.length();

			// Object o = resolveSmall(n, S, K, s);
			Object o = resolveLarge(n, S, K, N);

			String result = String.format("Case #%d: %s\n", n + 1, o);

			System.out.printf(result);
			out.print(result);
		}

		out.close();
	}

	/*
	 * complexity is O(N^3)
	 */
	private static Object resolveSmall(int n, String S, int K, int N) {

		int c = N - K + 1;
		double pow = Math.pow(2, c);

		System.out.printf("Case #%d: K=%d N=%d c=%d pow=%d\n", n + 1, K, N, c, (int) pow);

		Set<Set<String>> sets = new HashSet<Set<String>>();

		for (int m = 0; m < pow; m++) {

			System.out.printf("Case #%d: m=%d\n", n + 1, m);

			Set<String> set = new HashSet<String>();

			String P = S;
			for (int k = 0; k < c; k++) {

				// call permutate for all 1 bit of binary representation of k with k equal to
				// the 1 position
				int pow2 = (int) Math.pow(2, k);
				int i = m & pow2;

				System.out.printf("Case #%d: k=%d pow2=%d i=%d\n", n + 1, k, pow2, i);

				if (i != 0) {
					P = permutate(P, K, k);
					set.add(P);
				}
			}

			sets.add(set);
		}

		System.out.printf("Case #%d: sets=%s\n", n + 1, sets);

		String finalResult = buildResult(N);
		Optional<Set<String>> minSet = findMinSet(sets, finalResult);
		int r = minSet.isPresent() ? minSet.get().size() : 0;

		Object o = r == 0 ? S.compareTo(finalResult) == 0 ? r : "IMPOSSIBLE" : r;

		return o;
	}

	/*
	 * complexity is O(N^2)
	 */
	private static Object resolveLarge(int n, String S, int K, int N) {

		System.out.printf("Case #%d: K=%d N=%d\n", n + 1, K, N);

		int r = 0;

		for (int k = 0; k < N - K + 1; k++) {

			// call permutate if kth elem is '-'
			if (S.charAt(k) == '-') {
				S = permutate(S, K, k);
				r++;
			}
		}

		String finalResult = buildResult(N);

		Object o = S.compareTo(finalResult) == 0 ? r : "IMPOSSIBLE";

		return o;
	}

	/*-
	 * We can reduce complexity to O(N) by only flipping one pancake at a time, and
	 * keeping a running count of the number of flips that we "owe" the current
	 * pancake. For instance, suppose that N = 10 and K = 5, and the first pancake
	 * is blank side up. We start with the first pancake, and because we must flip
	 * it, we know we must flip the first five pancakes. We increase our flip count
	 * to 1, and also make a memo to decrease the flip count by 1 once we reach the
	 * sixth pancake. We continue from left to right, and whenever a pancake is
	 * blank side up and the flip count is even, or a pancake is happy side up and
	 * the flip count is odd, we increase the flip count and make another memo.
	 * These memos can be easily stored in another array of length N that is checked
	 * before handling each pancake.
	 * 
	 * One way I can think about for this algo is the following:
	 * memo is an array of integers of length N and initialized to [0]
	 * if it is - and memo is even => increase counter and increase memo for next K-1 elems
	 * if it is - and memo is odd => do nothing and go to next
	 * if it is + and meno is even => do nothing and go to next
	 * if it is + and memo is odd => increase counter and increase memo for next K-1 elems
	 * 
	 * but in this way it is again o[n^2]
	 * 
	 * Instead as suggested, 
	 * memo is an array of boolean of length N and initialized to [false]
	 * 

	 */
	private static Object resolveSmart(int n, String S, int K, int N) {

		System.out.printf("Case #%d: K=%d N=%d\n", n + 1, K, N);

		int r = 0;
		int fc = 0;
		boolean memo[] = new boolean[N];

		for (int k = 0; k < N - K + 1; k++) {
			if (S.charAt(k) == '-') {
				if (memo[k])
					memo[k + K - 1] = true;
				r++;
			}
		}

		String finalResult = buildResult(N);

		Object o = S.compareTo(finalResult) == 0 ? r : "IMPOSSIBLE";

		return o;
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

	public static String buildResult(int N) {

		String result = new String();
		for (int i = 0; i < N; i++) {
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
