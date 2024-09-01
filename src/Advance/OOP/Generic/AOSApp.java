package Advance.OOP.Generic;

public class AOSApp extends Application{
    private String name;
    private String os;
    private double volumn;

    public AOSApp(String name, String os, double volumn) {
        this.name = name;
        this.os = os;
        this.volumn = volumn;
    }

    public String getName() {
        return name;
    }

    public double getVolumn() {
        return volumn;
    }
}
