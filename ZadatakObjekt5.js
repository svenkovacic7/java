var bob = {
    name:"bob",
    age : 30
};
var susan = {
    name:"susan",
    age : 30
};
console.log(bob.age);
console.log(susan.age);

var setAge = function(newAge){
    this.age = newAge;
};

bob.setAge = setAge;
susan.setAge = setAge;

bob.setAge(20);
susan.setAge(20);

var godine = function(osoba1,osoba2){
    if (osoba1.age > osoba2.age){
        console.log(osoba1 + " ima vise godina")
    }
    else if (osoba2.age > osoba1.age){
        console.log(osoba2 + " ima vise godina")
    }
    else{
        console.log("Imaju isto godina")
    }
};

godine(susan,bob);

