import java.util.Arrays;
import java.util.HashMap;

class Solution {

    public static void main(String[] args) {
        int arr[][] = { { 0, 1 }, { 0, 4 }, { 1, 2 }, { 1, 5 }, { 1, 4 } };
        System.out.println(Arrays.toString(new Solution().queryResults(2, arr)));
    }

    public int[] queryResults(int limit, int[][] queries) {

        int n = queries.length;
        int ans[] = new int[n];

        HashMap<Integer, Integer> balls = new HashMap<>();

        HashMap<Integer, Integer> colors = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int query[] = queries[i];
            int ball = query[0];
            int color = query[1];

            if (colors.containsKey(color)) {
                int prev = colors.get(color);
                balls.remove(prev);
            }
            colors.put(color, ball);
            balls.put(ball, color);

            System.out.println(balls);
            System.out.println(colors);

            ans[i] = Math.min(balls.size(), colors.size());
        }
        return ans;
    }
}