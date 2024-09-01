package Basic;

import java.util.Scanner;

public class Quiz {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("반 학생수:");
        int studentNum =sc.nextInt();
        sc.nextLine(); // 엔터 제거를 위한 코드
        Student [] studentsList = new Student[studentNum];

        for (int i = 0; i<studentsList.length;i++){
            studentsList[i] = new Student();
            System.out.print("이름은:");
            studentsList[i].name = sc.nextLine();
            System.out.print("국어 점수 입력:");
            studentsList[i].kor = sc.nextInt();
            System.out.print("수학 점수 입력:");
            studentsList[i].math = sc.nextInt();
            System.out.print("영어 점수 입력:");
            studentsList[i].eng = sc.nextInt();
            sc.nextLine();
        }

        for (int i = 0; i<studentsList.length;i++){
            System.out.print("학생 이름" + studentsList[i].name);
            System.out.print("국어 점수" + studentsList[i].kor);
            System.out.print("수학 점수" + studentsList[i].math);
            System.out.print("영어 점수" + studentsList[i].eng+"\n");
        }

        double avg = 0;
        double max = 0;
        int summa = 0;
        for (int i = 0; i < studentsList.length; i++) {
            double studentAvg = (studentsList[i].kor +studentsList[i].math +studentsList[i].eng) / 3;
            if (max < studentAvg ){
                max=studentAvg;
                summa = i;
            }
            avg += studentAvg / 3;
        }
        System.out.printf("반 평균 : %.2f", (double)avg / studentsList.length);
        System.out.printf("일등 학생 : %.2f",studentsList[summa].name );
    }
}

