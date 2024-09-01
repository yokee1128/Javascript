package Advance.OOP.Inheritance;


//상속(inheritance)
public class Student {
    protected String name;
    protected String school;

    public Student(String name, String school) {
        this.name = name;
        this.school = school;
    }

    void study(){
        System.out.println("공부합니다.");
    }

    void transfer(String newSchool) { this.school = newSchool; }

    public void introduce(){
        System.out.println("이름:"+this.name +"\n학교:"+ this.school);
    }
}
