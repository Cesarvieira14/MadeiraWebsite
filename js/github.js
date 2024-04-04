const target = document.getElementById('target');
const username = 'Cesarvieira14';
const baseUrl = 'https://api.github.com';

async function getJSON(url) {
    const response = await fetch(url);
    return response.json();
}

async function getGithubUser(Username) {
    const url = `${baseUrl}/users/${username}`;
    return getJSON(url);
}

function userArticle(user) {

    console.log(user);

    //elements creation
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const div = document.createElement('div');

    //data extract
    h2.textContent = user.name;
    p.textContent = user.bio;
    img.src = user.avatar_url;

    //structure composing
    div.append(h2, p)
    article.append(img, div);
    return article;
}

getGithubUser(username).then(user => {
    const article = userArticle(user);
    target.append(article);
})