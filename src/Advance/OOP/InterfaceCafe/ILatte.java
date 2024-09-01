package Advance.OOP.InterfaceCafe;

public class ILatte implements ICoffee{


    @Override
    public void brew() {
        System.out.println("라떼 추출중");
    }
}
