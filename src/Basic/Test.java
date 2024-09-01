package Basic;

import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
//        Student lim = new Student();
//        lim.name = "임";
//        lim.kor = 95;
//        lim.math = 100;
//        lim.eng = 30;
        Scanner sc= new Scanner(System.in);
        System.out.print("반 학생수:");
        int qty =sc.nextInt();
        sc.nextLine(); // 엔터 제거를 위한 코드
        Student [] school = new Student[qty];
//        school[0] = lim;
        for (int i = 0; i<qty;i++){
            school[i] = new Student();

            System.out.println(i+1+"번째 학생의");
            System.out.print("이름은:");
            school[i].name = sc.nextLine();
            System.out.print("국어 점수 입력:");
            school[i].kor = sc.nextInt();
            System.out.print("수학 점수 입력:");
            school[i].math = sc.nextInt();
            System.out.print("영어 점수 입력:");
            school[i].eng = sc.nextInt();
            sc.nextLine();
        }
        for (int i = 0; i<qty;i++){
            System.out.print("학생 이름" + school[i].name);
            System.out.print("국어 점수" + school[i].kor);
            System.out.print("수학 점수" + school[i].math);
            System.out.print("영어 점수" + school[i].eng+"\n");
        }

//        double[] sum={0,0,0};
//
//        for(int i =0;i<qty;i++){
//            sum[0]+=school[i].kor;
//            sum[0]+=school[i].math;
//            sum[0]+=school[i].eng;
//        }

        double kor = 0;
        double math = 0;
        double eng = 0;

        for (int i=0;i<qty;i++){
            kor += school[i].kor;
            math += school[i].math;
            eng += school[i].eng;
        }
        System.out.printf("국어 평균 : %.2f", kor / qty);
        System.out.printf("수학 평균 : %.2f", math / qty);
        System.out.printf("영어 평균 : %.2f", eng / qty);
    }
}
