
var myName = "Nguyen Duong The Vi"
var a = 5/66
var myAge = myName[0]
var myGlobal = 10
var ourArray =["John", 23, ["Vi", 343]]
ourArray.push("Hoc", [435])
ourArray.pop()
ourArray.unshift("Happy")
ourReusableFunction()
ourReusableFunction()
ourFunctionWithArgs(2,3)
function ourReusableFunction(){
    console.log("Hello world")
    oopsGlobal = 4
}
function ourFunctionWithArgs(a, b){
    console.log(a+b + myGlobal + oopsGlobal)
}

