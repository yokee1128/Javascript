package Advance.OOP.Generic;

public class Iphone<T extends Application> {
    private T app;

    public void download(String name, String os) {
        System.out.println("ios 어플");
    }
}
