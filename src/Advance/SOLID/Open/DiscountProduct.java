package Advance.SOLID.Open;

public class DiscountProduct implements DiscountPolicy{
    @Override
    public double applyDiscount(Product product) {
        return (double) product.getPrice() * 0.9;
    }
}
