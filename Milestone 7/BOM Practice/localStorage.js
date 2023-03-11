const setValue = () => {

    localStorage.setItem("name", JSON.stringify("Shakib Khan"))
    localStorage.setItem("age", JSON.stringify("37"))

    localStorage.setItem("object", JSON.stringify({"firstname":"Abraham","lastname":"Lincoln"}))

}

const getValue = () => {

   console.log( JSON.parse(localStorage.getItem("name")))
   console.log( JSON.parse(localStorage.getItem("age")))
   console.log( JSON.parse(localStorage.getItem("object")))
    
}

const removeValue = () => {

    localStorage.removeItem("name")
    localStorage.removeItem("age")

}

setValue()
getValue()

//removeValue()