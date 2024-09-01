package Basic;

import java.util.Scanner;

public class Operator {
    public static void main(String[] args) {
        // 1.산술연산자 (+,-,*,%,/,++,__)
        // 2.비교, 논리연산자(>,<,>=,<=,==,!=.&&,||,!)
        // 3.삼항연산자 ( 조건식 ? true : false )

        Scanner sc = new Scanner(System.in);
        System.out.print("과목1: ");
        String p1= sc.nextLine();
        System.out.print("과목2: ");
        String p2= sc.nextLine();
        System.out.print("과목3: ");
        String p3= sc.nextLine();

        System.out.printf("%s 과목의 점수 입력: ",p1);
        int c1 = sc.nextInt();
        System.out.printf("%s 과목의 점수 입력: ",p2);
        int c2 = sc.nextInt();
        System.out.printf("%s 과목의 점수 입력: ",p3);
        int c3 = sc.nextInt();

        double avg = (double)(c1+c2+c3) / 3;
        String result = avg >= 60? "합격":"불합격";
        System.out.printf("학생의 성적은 %s입니다",result);



    }
}
