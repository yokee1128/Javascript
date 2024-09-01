package Advance.OOP.Inheritance;

public class HighSchoolStudent extends Student {
    private int grade;
    private boolean isArts;


    public HighSchoolStudent( String name, String school,int grade, boolean isArts) {
        super(name, school);
        this.grade = grade;
        this.isArts = isArts;
    }

}
