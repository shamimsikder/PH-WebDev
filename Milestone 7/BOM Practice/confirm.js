const res =  confirm("Do You Want To See MY Site?")

if(res === true){

    const loc = location.href

    console.log(loc)
    alert(loc)

}

else{
    console.log("ok")
}