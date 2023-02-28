function getLink(){

    const link = document.getElementById('input-field')
    
    if(link.value === ''){
        alert("Please Insert A Link")
    }
    else{
        const linkValue = link.value

    link.value = ''

    return linkValue
    }

}

document.getElementById('submit').addEventListener('click', function(){

    const link = getLink()

    loadData(link)
    
})

const loadData = async(link) => {

    const URL = `https://api.shrtco.de/v2/shorten?url=${link}`

    const res = await fetch(URL)
    const data = await res.json()

    showData(data.result.short_link)

}

const showData = (link) => {

    console.log(link)

    const lists = document.getElementById('lists')

    const li = document.createElement('li')

    li.classList.add("flex", "justify-between", "item-center", "mt-2")

    li.innerHTML = `
    
        <p class="link-text">${link}</p>

        <button class="copy-button px-3 py-1 bg-sky-500 text-white rounded-sm">Copy!</button>
    
    `

    const copyButton = li.querySelector(".copy-button");
    const linkText = li.querySelector(".link-text");

    copyButton.addEventListener("click", () => {
      copy(linkText);
    });

    lists.appendChild(li);

    function copy(copyText) {
      const text = copyText.innerText;
      
      navigator.clipboard.writeText(text);
      
      console.log("Copied to clipboard: " + text);
    }
}


document.getElementById('hide-list').addEventListener('click', function(){

    const lists = document.getElementById('lists')
    lists.classList.remove('hidden')

})

  

loadData()