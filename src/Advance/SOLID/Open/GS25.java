package Advance.SOLID.Open;

public class GS25 {
    public static void main(String[] args) {
        Product godiva = new Product("고디바", 10000);

        DiscountProduct discountProduct = new DiscountProduct();
//        discountProduct.applyDiscount(godiva);
        System.out.println(discountProduct.applyDiscount(godiva));
    }
}
