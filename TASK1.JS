const myObject = {
    name: "vehicle",
    type: "car",
    color: "red",
    model: "Toyota 2024"
}
// console.log(myObject)
const json = JSON.stringify(myObject)
console.log(json)
console.log(JSON.parse(json))