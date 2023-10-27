package java_oop;

public class Practice3 {

    public static void main(String[] args) {
        int[] nums1 = {2, 5, 8, 3,1,4,7};

        System.out.println(sumLessThan(nums1, 5));
    }

    public static int sumLessThan(int[] arr, int target) {
        int sum = 0;

        for (int num : arr) {
            if (num < target) {
                sum += num;
            }
        }

        return sum;
    }
}