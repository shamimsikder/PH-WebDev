const loadData = async() => {

    const URL = "https://api.github.com/users/programminghero1"

    const res = await fetch(URL)
    const data = await res.json()

    showData(data)

}

const showData = (data) => {

    const {login,avatar_url,name,company,blog,location,bio,twitter_username,public_repos,followers,following,created_at} = data

    document.getElementById('name').innerText = name
    document.getElementById('userName').innerText = login
    document.getElementById('date').innerText = created_at
    document.getElementById('bio').innerText = bio
    document.getElementById('repo').innerText = public_repos
    document.getElementById('follower').innerText = followers
    document.getElementById('following').innerText = following
    document.getElementById('location').innerText = location ? location : "No Data"
    document.getElementById('your-link').innerText = blog
    document.getElementById('twitter').innerText = twitter_username ? twitter_username : "No Data"
    document.getElementById('company').innerText = company ? company : "No Data"

}

loadData()