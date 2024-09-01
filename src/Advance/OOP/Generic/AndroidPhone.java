package Advance.OOP.Generic;

import java.util.ArrayList;

public class AndroidPhone<T extends AOSApp> {
    private String name;
    ArrayList<T> app = new ArrayList();

    public AndroidPhone(String name) {
        this.name = name;
    }

    public void download(T newApp) {
        this.app.add(newApp);
//        System.out.println("ios 어플");
    }

    public void getName() {
        for(int i=0;i<this.app.size();i++){
            System.out.println(this.app.get(i).getName());
        }
    }

    public void getVolumn(){
        double totalVolumn =0;
        for (int i=0;i<this.app.size();i++){
            totalVolumn = totalVolumn +this.app.get(i).getVolumn();
        }
    }

}
