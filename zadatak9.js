var bob = {
    name: "Bob",
    age: 30
};
bob.setAge = function (newAge) {
    bob.age = "newAge"
}

var susan = {
    name: "Susan",
    age : 60
};

newAge = document.getElementById("bgodine").value;
bob.setAge(newAge)

console.log(bob.name);
console.log(susan.age);
/**
 * Created by Ucenik on 23.3.2017..
 */
