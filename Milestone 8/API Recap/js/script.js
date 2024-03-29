const loadData = async(userName) => {

    const URL = `https://api.github.com/users/${userName}`

    const res = await fetch(URL)
    const data = await res.json()

    showData(data)

}

const showData = (data) => {

    const {login,avatar_url,name,company,blog,location,bio,twitter_username,public_repos,followers,following,created_at} = data

    const date = new Date(created_at);
    const year = date.getFullYear();
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = date.getDate();

    document.getElementById('img').innerHTML = `<img class="h-20 w-20 rounded-full" src="${avatar_url}" alt="">` 
    
    document.getElementById('name').innerText = name
    document.getElementById('userName').innerText = login
    document.getElementById('date').innerText = `${day} ${month} ${year}`
    document.getElementById('bio').innerText = bio ? bio : "This Profile Has No Bio"
    document.getElementById('repo').innerText = public_repos
    document.getElementById('follower').innerText = followers
    document.getElementById('following').innerText = following
    document.getElementById('location').innerText = location ? location : "No Data"
    document.getElementById('your-link').innerText = blog ? blog : "No Data"
    document.getElementById('twitter').innerText = twitter_username ? twitter_username : "No Data"
    document.getElementById('company').innerText = company ? company : "No Data"


}

document.getElementById('btn').addEventListener('click', function(){

    const userName = document.getElementById('input').value

    loadData(userName)

})

document.getElementById('input').addEventListener('keypress', function(e){

    const userName = document.getElementById('input').value

    if(e.key === 'Enter'){
        loadData(userName)
    }

})

loadData('programminghero1')