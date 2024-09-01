package Advance.OOP.Generic;

public class Box<T extends Fruit> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }


}
