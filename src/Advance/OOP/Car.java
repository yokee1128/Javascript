package Advance.OOP;

// 변수 + 생성자 함수[만들어주는 함수] + 함수
// 생성자 함수 특징) 리턴타입 없음 + 함수이름이 클래스이름과 같아야 함
// 접근 제한자: public, default, private

public class Car {
    private String name;
    private String model;
    private String company;
    private int speed;

    public Car (String name,String model,String company) {
        this.name = name;
        this.model = model;
        this.company = company;
        this.speed = 0;
    }

    void upSpeed(){ // return이 필요없을경우 void를 사용함
//        return speed += 1;
        this.speed++;
    }


    void downSpeed(){
        if(this.speed==0){
            this.speed = 0;
        }else{
            this.speed --;
        }
    }

    void zeroSpeed(){
        this.speed =0;
    }

    void showSpeed(){
        System.out.println("현재 속도" + this.speed);
    }

    //alt+ inser


}
