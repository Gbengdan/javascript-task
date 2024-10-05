const person = {
    name: "Nick" ,
    age: 34 ,
    sibblings: [{   
        name: "Richard" ,
        age: 27,
    }, {
   name: "Ken",
   age: 23,
    }, {
        name: "Rose",
        age: 21
    } ],
    addsibling: function(name) {
        person.sibblings.push(name)
    }
}
// console.log(person.sibblings[2])
person.haircolor = "black"
person.addsibling({
    name: "Herny" ,
    age: 0
})

console.log(person)
