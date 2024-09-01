package Advance.OOP.Interface;

public class Zfilp implements Camera,SamsungPay,Foldable {

    @Override
    public void takeAPhoto() {
        System.out.println("사진 찰칵");
    }

    @Override
    public void pay() {
        System.out.println("삼성페이 결제");
    }

    @Override
    public void folding() {
        System.out.println("핸드폰 열기");
    }
}
