/**
 * Created by Ucenik on 9.3.2017..
 */

function funkcija(){
    var text ="";
    for (var x=0; x<=15; x++){
        if (x==0){
            text = "<br>Broj " + x + " nula";
            document.write(text);
        }
        else if (x % 2 == 0){
            text = "<br>Broj" + x +" paran";
            document.write(text);
        }
        else{
            text = "<br>Broj" + x + " neparan";
            document.write(text);
        }
    }
}