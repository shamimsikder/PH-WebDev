const loadMyData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    
    showData(data);
};

const showData = (data) => {

    const adviceId = document.getElementById('advice-id')
    const advices = document.getElementById('advice')
    
    adviceId.innerText = data.slip.id
    advices.innerText = data.slip.advice

}

document.getElementById('advice-btn').addEventListener('click', loadMyData)

loadMyData()