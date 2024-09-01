package Advance.OOP.Abstractor;

public class Triangle extends Shape {
    private int height;
    private int width;

    public Triangle(int height, int width) {
        this.height = height;
        this.width = width;
    }

    @Override
    public void area(){
        System.out.println("세모의 넓이 = " + (this.height * this.width) / (double)2);
    }
}
