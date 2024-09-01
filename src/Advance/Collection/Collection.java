package Advance.Collection;

// Data -
// Array(list)[순서 o, 중복 o],
// Set[순서 x, 중복 x], Map(JS-object)

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class Collection {
    public static void main(String[] args) {
        ArrayList<String> baskin = new ArrayList();
        baskin.add("엄마는 외계인");
        baskin.add("소금우유");
        baskin.add("민트쵸코");

        for (int i=0;i<baskin.size();i++){
            System.out.println(baskin.get(i));
        }
        
        HashSet<String> coupangCart = new HashSet(); // 장바구니 로직
        coupangCart.add("폴란드 멸균 우유");
        coupangCart.add("폴란드 멸균 우유");
        coupangCart.add("서울우유");
        coupangCart.add("선크림");

        for(String item:coupangCart) {
            System.out.println(item);
        }

        HashMap<Integer,String> itClass =new HashMap();
        itClass.put(1,"java");
        itClass.put(2,"c");
        itClass.put(3,"python");

        System.out.println(itClass.get(2));



    }
}
