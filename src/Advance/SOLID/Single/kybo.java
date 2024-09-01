package Advance.SOLID.Single;

public class kybo {
    public static void main(String[] args) {
        Book a= new Book("주말","아무나");
        Printer printer =new Printer();

        printer.printBookDetails(a);
    }
}
