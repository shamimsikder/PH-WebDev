const loadData = () => {

    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayData(data))

}

const loadData2 = async() => {

    try{

        const res = await fetch('https://randomuser.me/api/?gender=female')
        const data = await res.json()

        displayData(data)

    }

    catch(error){

        console.log(error)

    }

}

const displayData = data => {

    const nameTag = document.getElementById('name')
    const genderTag = document.getElementById('gender')

    genderTag.innerHTML = data.results[0].gender;
    nameTag.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

}

loadData2()