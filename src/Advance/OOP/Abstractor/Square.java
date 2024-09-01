package Advance.OOP.Abstractor;

public class Square extends Shape {
    private int side;

    public Square(int side) {
        this.side = side;
    }

    @Override
    public void area(){
        System.out.println("네모의 넓이 = " + this.side * this.side);
    }
}
