
const loadMems = async() => {

    try{

        const URL =  "https://meme-api.com/gimme/25"
        const res = await fetch(URL)
        const meme = await res.json()

        displayMeme(meme.memes)

    }

    catch(error){
        console.log(error)
    }

}

const displayMeme = (memes) => {

    memes.slice(0, 9).forEach((meme) => {
        console.log(meme.url);

        const memeContainer = document.getElementById('section')
        const div = document.createElement('div')

        div.innerHTML = `
            <div class="card w-full h-96 glass shadow-2xl">
            
            <figure><img class="w-[90%] h-[90%] p-1" src="${meme.url}" alt="car!"/></figure>
  
            </div>
    `;
        memeContainer.appendChild(div)

    })

}

loadMems()