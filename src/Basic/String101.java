package Basic;

public class String101 {
    public static void main(String[] args) {
        String lunch ="설렁탕";
        String lunch1 = new String ("설렁탕");
        String dinner = new String("참치");
        System.out.println(lunch.equals(lunch1)); // true
        System.out.println(lunch==lunch1); // false

    }
}
