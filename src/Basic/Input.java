package Basic;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
//        int a = 1;
//        Scanner b = new Scanner(System.in); // input(prompt 역할)
//        System.out.print("숫자입력:");
//        int c = b.nextInt(); // User에게 정수를 입력 받는 함수
//        System.out.printf("당신이 입력한 숫자는 %d입니다.",c);
//        붕어빵 b = new 붕어빵();
//        잉어빵 c = new 잉어빵();
//        쌀국수 d = new 쌀국수();
//        붕어빵 e = new 슈크림맛붕어빵();

        Scanner sc= new Scanner(System.in);
//        System.out.print("첫번째 숫자: ");
//        int num1 = sc.nextInt();
//        System.out.print("두번째 숫자: ");
//        int num2 = sc.nextInt();
//        System.out.printf("%d + %d = %d\n",num1,num2,(num1+num2));
//        System.out.printf("%d - %d = %d\n",num1,num2,(num1-num2));
//        System.out.printf("%d x %d = %d",num1,num2,(num1*num2));
        System.out.println("이름입력");
        String name = sc.nextLine();
        System.out.println("입력하신 이름은:" + name);



    }
}
