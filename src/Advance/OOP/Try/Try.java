package Advance.OOP.Try;

import java.util.Scanner;

public class Try {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try{
            System.out.println("정수입력");
            int a = sc.nextInt();
            System.out.printf("입력한 정수:%d",a);
        }catch(Exception e){
            System.out.println("입력이 정수 아님");
            throw new RuntimeException(e);
        }
    }
}
