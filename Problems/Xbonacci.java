import java.util.Arrays;

public class Xbonacci {
  public double[] tribonacci(double[] s, int n) {

    double[] tritab = Arrays.copyOf(s, n);
    for (int i = 3; i < n; i++) {
      tritab[i] = tritab[i - 1] + tritab[i - 2] + tritab[i - 3];
    }
    return tritab;

  }
}

// best solution copied from Codewars when completed. 