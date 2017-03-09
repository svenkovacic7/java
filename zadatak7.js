/**
 * Created by Ucenik on 9.3.2017..
 */

function funkcija(){
    var text ="";
    for (var x=0; x<=15; x++){
        if (x==0){
            text = prompt("Upisite : ");
            document.write("<br>" + text);
        }
        else if (x < 15){
            text = x;
            document.write("<br>" + text);
        }
        else{
            text = prompt("Upisite : ");
            document.write("<br>" + text);
        }
    }
}