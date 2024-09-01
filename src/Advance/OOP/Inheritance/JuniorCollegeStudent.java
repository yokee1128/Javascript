package Advance.OOP.Inheritance;

public class JuniorCollegeStudent extends Student {
    private int grade;
    private String major;

    public JuniorCollegeStudent(String name, String school, int grade,String major) {
        super(name, school);
        this.major = major;
    }

    @Override //부모의 함수를 재정의 한다.
    public void study(){
        System.out.println(this.major+ "를 열심히 공부하기");
    }
}
