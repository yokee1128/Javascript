package Advance.SOLID.Single;

public class Printer {
    public void printBookDetails(Book book){
        System.out.println("Title"+book.getTitle());
        System.out.println("Author"+book.getAuthor());
    }
}
