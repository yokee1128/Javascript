package Advance.OOP.Abstractor;

public class Circle extends Shape{
    private double r;

    public Circle(double r) {
        this.r = r;

    }
    @Override
    public void area(){
        System.out.println("원의 넓이 = " + 3.14 * this.r * this.r);
    }


}
