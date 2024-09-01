package Basic;

public class Print {
    public static void main(String[] args) {
         //print, println[line next]
        System.out.print("점심뭐먹을가?");
        System.out.print("저녁에 할일: 영화보기");
        System.out.print("자바 첫 수업후기: 자바자바");

        int age = 21;
        System.out.println("당신의 나이는" + age +"입니다");
        //f=> formatter(바꿔주기)
        //%d - int, %f - double/float, %c- char, %s - string, %b -boolean
        System.out.printf("당신의 나이는 %d입니다",age);

        double KOSPI = 2697.23;
        String dinner = "닭갈비";
        System.out.printf("현재 코스피는 %.2f입니다.\n",KOSPI);
        System.out.printf("오늘 저녁 메뉴는  %s입니다",dinner);

    }
}
