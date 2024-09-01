package Basic;

import java.util.Scanner;

public class Condition {
    public static void main(String[] args) {
        //조건문:if, switch
        //ctrl + a: 전체 선택
        //ctrl + alt + l: 자동 줄맞춤
//        int num = 10;
//        if (num < 20) {
//            System.out.println("20보다 작음");
//        } else if (num < 30) {
//            System.out.println("30보다 작음");
//        } else {
//            System.out.println("30보다 큼");
//        }
//        Scanner sc = new Scanner(System.in);
//        System.out.print("숫자를 입력해주세요: ");
//        int num = sc.nextInt();
//        if (num < 0 && num % 2 == 1) {
//            System.out.printf("%d는 음의 홀수입니다.", num);
//        } else if (num < 0 && num % 2 == 0) {
//            System.out.printf("%d는 음의 짝수입니다.", num);
//        } else if (num > 0 && num % 2 == 1) {
//            System.out.printf("%d는 양의 홀수입니다.", num);
//        } else if (num > 0 && num % 2 == 0) {
//            System.out.printf("%d는 양의 짝수입니다.", num);
//        } else {
//            System.out.printf("%d는 0입니다.", num);
//        }

        int num = 1;

        switch (num){
            case 1:
                System.out.println("숫자1");
                break;
            case 2:
                System.out.println("숫자2");
                break;
            case 3:
                System.out.println("숫자3");
                break;
            default:
                System.out.println("1 2 3 아님");
                break;
        }
    }
}

