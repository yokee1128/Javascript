package Advance.OOP;

public class Time {
    private int hour;
    private int minute;
    private int seconds;

    public Time(){
        this.hour=0;
        this.minute=0;
        this.seconds=0;
    }

    void upSeconds(){
        this.seconds++;
        if (this.seconds==60){
            this.seconds=0;
            this.upMinute();
        }
    }
    void upMinute(){
        this.minute++;
        if (this.minute==60){
            this.minute=0;
            this.upHour();
        }
    }
    void upHour(){
        this.hour++;
        if (this.minute==24){
            this.hour=0;
        }
    }

    void showTime(){
        String showSeconds = this.seconds <10 ? "0"+ this.seconds:String.valueOf(this.seconds);
        String showMinute = this.minute <10 ? "0"+ this.minute:String.valueOf(this.minute);
        String showHour = this.hour <10 ? "0"+ this.hour:String.valueOf(this.hour);
        System.out.println(showHour+":"+showMinute+":"+showSeconds);
    }


}
