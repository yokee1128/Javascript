package Advance.OOP.Inheritance;

public class MiddleSchoolStudent extends Student{
    private int grade;

    public MiddleSchoolStudent(String name, String school, int grade) {
        super(name, school);
        this.grade = grade;
    }

}
