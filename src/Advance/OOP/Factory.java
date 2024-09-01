package Advance.OOP;

import Advance.OOP.Generic.*;
import Advance.OOP.Interface.Zfilp;

public class Factory {
    public static void main(String[] args) {
//        Chocolate one =new Chocolate("맛",1.0);
//        one.getFlavor();
//        System.out.println(one.flavor);

//        Car one = new Car("니로","소형suv","기아");
//
//        for (int i = 0; i < 150 ; i++) one.upSpeed();
//        one.showSpeed();
//        one.zeroSpeed();
//        one.upSpeed();
//        one.downSpeed();

//        Time currentTime = new Time();
//        for (int i = 0; i<61; i++ ) currentTime.upSeconds();
//        currentTime.showTime();
//        MiddleSchoolStudent lee = new MiddleSchoolStudent("이성규","성규중학교",3);
//        lee.introduce();
//        HighSchoolStudent hyeon = new HighSchoolStudent("현","현중학교",3,false);
//        hyeon.introduce();
//        JuniorCollegeStudent lim=new JuniorCollegeStudent("임소경","IT대학교",3,"뷰티미용과");
//        lim.introduce();
//        lim.study();
//        Beverage tea = new Beverage(2000,4000,"green tea");
//        tea.sell();
//        Circle cir = new Circle(6);
//        cir.area();
//
//        Triangle tr = new Triangle(4,5);
//        tr.area();
//
//        Square sq = new Square(6);
//        sq.area();
//        MegaCoffee megaCoffee = new MegaCoffee();
//        megaCoffee.serveAmericano();
//        megaCoffee.serveLatte();
//
//
//        Starbucks starbucks = new Starbucks(new ILatte());
//        starbucks.coffeeBrew();
//        WeekDays today = WeekDays.SUNDAY;
//        WeekDays tmr = WeekDays.MONDAY;
//
//        System.out.println(today);
//        System.out.println(tmr);
//
//        Role user= Role.ADMIN;
//
//        if(user == Role.ADMIN){
//            System.out.println("어드민");
//        } else if (user ==Role.SUPER_ADMIN) {
//            System.out.println("슈퍼어드민");
//        }
//
//        switch (today){
//            case MONDAY -> System.out.println("월요일");
//            case TUESDAY -> System.out.println("화요일");
//        }
//        Box<Apple> box = new Box();
//        box.setItem(new Apple());
//
//        Box<Banana> box1 = new Box();
//        box1.setItem(new Banana());

        Iphone<IOSApp> iphone = new Iphone();
        iphone.download("Tmap","IOS");

        AndroidPhone<AOSApp> zfilp = new AndroidPhone("Zflip");
        zfilp.download(new AOSApp("국민은행","AOS",200));
        zfilp.download(new AOSApp("카카오톡","AOS",400));
        zfilp.download(new AOSApp("네이버","AOS",260));
        zfilp.download(new AOSApp("LIFE360","AOS",300));


    }
}
