package Basic;

public class DataType {
    public static void main(String[] args) {
        //프로그래밍 언어: 컴파일 언어(Java, c, c++, ts,...) vs 인터프리터 언어(js, py)
        //                     데이터 타입 변수명 = 값      vs      const 변수명 = 값
        // 기본 데이터 타입
        int num =1; // 숫자 - 정수(int[4byte])
        double pi = 3.14; // 실수(double[8byte], float[4byte])
        boolean is12 = true; // 불리언[1byte(8bit)]
        char initial = 'K'; // 문자[2byte(16bit)]

        //참조 데이터 타입[heap(동적) 메모리]
        String lunch = "쌀국수";

        System.out.println(num);
        System.out.println(pi);
        System.out.println(is12);
        System.out.println(initial);
        System.out.println(lunch);
    }
}
