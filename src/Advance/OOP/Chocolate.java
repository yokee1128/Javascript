package Advance.OOP;

// 기본타입 -> 배열 ->
// 클래스: 나만의 타입

import java.util.Scanner;

public class Chocolate {
    String flavor;
    double kcal;

    // 변수 + 생성자 함수[만들어주는 함수] + 함수
    // 생성자 함수 특징) 리턴타입 없음 + 함수이름이 클래스이름과 같아야 함

    Chocolate(String flavor, double kcal){
        this.flavor = flavor;
        this.kcal = kcal;
    }




    //()=>{}
    double getKcal() {
        return 100;
    }

    String getName(){
        return "godiva";
    }
    String getFlavor(){
    Scanner sc= new Scanner(System.in);
    int flavorNum =sc.nextInt();
        switch (flavorNum){
            case 1:
                return "Milk";
            case 2:
                return "Pistachio";
            case 3:
                return "Dark";
            default:
                return"잘못 입력!!";
        }
    }

}
