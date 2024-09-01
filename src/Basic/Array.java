package Basic;

import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
//        int[] scores = new int[5];
////           scores[0] = 100;
//        for (int i = 0; i < 5; i++) {
//            scores[i] = 0;
//        }
        Scanner sc = new Scanner(System.in);
//        System.out.print("학생수:");
//        int qty = sc.nextInt();
//        int[] scores = new int[qty];
//        int sum = 0;
//        for (int i = 0; i < qty; i++) {
//            System.out.printf("%d번째 학생의 점수는:", i + 1);
//            scores[i] = sc.nextInt();
//            sum += scores[i];
//        }
//        System.out.printf("반 평균점수는: %.2f", (double) sum / qty);
        System.out.print("반 학생수:");
        int students = sc.nextInt();
        int[][] scores = new int[students][3];

        for (int i = 0; i < students; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.println(i + 1 + "번째의 학생");
                switch (j) {
                    case 0:
                        System.out.println("국어 점수 입력:");
                        scores[i][j] = sc.nextInt();
                        break;
                    case 1:
                        System.out.println("수학 점수 입력:");
                        scores[i][j] = sc.nextInt();
                        break;
                    case 2:
                        System.out.println("영어 점수 입력:");
                        scores[i][j] = sc.nextInt();
                        break;
                    default:
                        break;
                }

            }
        }
        double kor = 0;
        double math = 0;
        double eng = 0;
        for (int i = 0; i < students; i++) {
            kor += scores[i][0];
            math += scores[i][1];
            eng += scores[i][2];
        }
        System.out.printf("국어 평균 : %.2f", kor / students);
        System.out.printf("수학 평균 : %.2f", math / students);
        System.out.printf("영어 평균 : %.2f", eng / students);
    }
}
