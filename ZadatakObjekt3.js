var bob = {
    age : 30
};
var susan = {
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

document.getElementById("bob").innerHTML +="bob : " + bob.age + "<br>";
document.getElementById("susan").innerHTML += "susan : " +  susan.age + "<br>";
