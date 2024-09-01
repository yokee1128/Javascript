package Advance.OOP.Inheritance;

public class GeneralCollegeStudent extends Student{
    private int grade;
    private String mainMajor;
    private String doubleMajor;

    public GeneralCollegeStudent(int grade, String name, String school, String mainMajor, String doubleMajor) {
        super(name, school);
        this.grade = grade;
        this.mainMajor = mainMajor;
        this.doubleMajor = doubleMajor;
    }

    void partTime(){
        System.out.println("알바");
    }




}
