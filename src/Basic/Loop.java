package Basic;

import java.util.Objects;
import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
        //조건문: 조건에 따라서 실행되는 문법코드
        //반복문: n번 반복되게 실행해주는 문법코드
        //for, while

        //for(start,end,step)
//        for(int i=1;i<100;i=i+2){
//            System.out.println(i);
//        }
//        //or use if
//        for(int i=0;i<100;i++){
//            if(i%2==1){
//            System.out.println(i);
//        }}
//
        Scanner sc = new Scanner(System.in);
//        System.out.println("입력받을 숫자의 개수:");
//        int qty = sc.nextInt();
//        int sum = 0;
//        for (int i = 1; i <= qty; i++) {
//            System.out.println("숫자를 입력해수세요.");
//            int num = sc.nextInt();
//            sum = sum + num;
//        }
//        double avg = (double) (sum / qty);
//        System.out.printf("%d 개 숫자의 평균은 %.2f",qty,avg);
//        for (int i=0;i<3;i++){
//            for(int j=0;j<3;j++){
//                System.out.println(i+" "+j);
//            }
//        }
//        System.out.print("행개수:");
//        int lineQty = sc.nextInt();
//        System.out.print("1행 별개수:");
//        int startQty=sc.nextInt();
//        for (int i=0;i<lineQty;i++){
//            System.out.println();
//            for (int j=0;j<startQty;j++){
//                System.out.print("*");
//            }
//        }

//        for (int i=0;i<startQty*lineQty;i++){
//            System.out.println("*");
//        }
        // while 탈출
        // 1. 조건을 변경 시키지 ex) cnt++
        // 2. break 예약어 사용하기
//        System.out.print("정수 입력 횟수: ");
//        int qty = sc.nextInt();
//        int cnt =0;
//        int sum =0;
//        while (cnt<qty){
//            int num = sc.nextInt();
//            if (num>0){
//                sum += num;
//            }
//            cnt++;
//        }
//        System.out.println(sum);

//        while(true){
//            System.out.println("명령어를 입력하세요");
//            String cmd = sc.nextLine();
//            if(Objects.equals(cmd,"exit")){
//                break;
//            }
//        }
        while(true) {
            System.out.println("원하시는 기능을 선택해주세요\n 1. 더하기\n 2. 빼기 \n 3. 곱하기 \n 4. 나누기 \n 5. 프로그램종료");
            int codeNum = sc.nextInt();
            int num1;
            int num2;
//            if (codeNum==1){
//                System.out.printf("%d + %d = %d",num1,num2,(num1+num2));
//            } else if (codeNum==2) {
//                System.out.printf("%d - %d = %d",num1,num2,(num1-num2));
//            } else if (codeNum==3) {
//                System.out.printf("%d x %d = %d",num1,num2,(num1*num2));
//            } else if (codeNum==4) {
//                System.out.printf("%d / %d = %d",num1,num2,(num1/num2));
//            }else {
//                System.out.println("이용해주셔서 감사합니다.");
//                break;
//            }

            switch (codeNum){
                case 1:
                    System.out.print("첫번째 숫자: ");
                    num1 = sc.nextInt();
                    System.out.print("두번째 숫자: ");
                    num2 = sc.nextInt();
                    System.out.printf("%d + %d = %d",num1,num2,(num1+num2));
                    break;
                case 2:
                    System.out.print("첫번째 숫자: ");
                    num1 = sc.nextInt();
                    System.out.print("두번째 숫자: ");
                    num2 = sc.nextInt();
                    System.out.printf("%d - %d = %d",num1,num2,(num1-num2));
                    break;
                case 3:
                    System.out.print("첫번째 숫자: ");
                    num1 = sc.nextInt();
                    System.out.print("두번째 숫자: ");
                    num2 = sc.nextInt();
                    System.out.printf("%d x %d = %d",num1,num2,(num1*num2));
                    break;
                case 4:
                    System.out.print("첫번째 숫자: ");
                    num1 = sc.nextInt();
                    System.out.print("두번째 숫자: ");
                    num2 = sc.nextInt();
                    System.out.printf("%d / %d = %.2f",num1,num2,(double)num1/num2);
                    break;
                case 5: {
                    System.out.println("프로그램 종료");
                    return;
                } default:
                    System.out.println("번호입력 오류");
            }


        }
    }
}
