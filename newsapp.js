let URL = `https://newsdata.io/api/1/news?apikey=pub_8212e5910ab78d635646f20291a789e19497`;
let Post = document.querySelector('.cont');
const country = document.getElementById('country');
const category = document.getElementById('category');
const submitBtn = document.getElementById('submitBtn');

async function fetchData(url) {
    let outPut = '';
    let response = await fetch(url);
    if (response.status === 200) {
        let data = await response.json();
        data = data.results;
        console.log(data);
        data.forEach(element => {
            let imageurl = `https://source.unsplash.com/random/400x400/?${element.category}`
            let content = (element.content) === null ? element.description : element.content;
            let image = (element.image_url) === null ? imageurl : element.image_url;
            outPut += `
            <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <a href="${element.link}" class="btn btn-primary">Read Full Article</a>
                    </div>
                    </div>
                    `;
                    // <p class="card-text">${content.slice(10)}</p>
        });
        Post.innerHTML = outPut;
    }
}

fetchData('https://newsdata.io/api/1/news?apikey=pub_8212e5910ab78d635646f20291a789e19497&country=in');

submitBtn.addEventListener('click',()=>{
    URL = `https://newsdata.io/api/1/news?apikey=pub_8212e5910ab78d635646f20291a789e19497`;
    let countryValue = country.value.slice(-2);
    let categoryValue = category.value;
    URL = `${URL}&country=${countryValue}&category=${categoryValue}`;
    console.log(URL);
    fetchData(URL);
})