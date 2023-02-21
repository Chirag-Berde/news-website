// login to https://newsapi.org/ get your api key and paste in -->dataUrl
let dataUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=YourApiKey"

setTimeout(()=>{
  fetchNews()
},650)
// fetching data grom newsapi.com
async function fetchNews() {
  let str = ""
  let data = await fetch(dataUrl)
  let response = await data.json()
  let news=response.articles
  console.log(news)
  news.forEach((item) => {
   return str += `
     <div class="col-4">
      <div class="card me-1 ms-5 mt-2 mb-3 shadow rounded  card-custom" style="width: 20rem;">
      <img src=${item["urlToImage"]} class="card-img-top" alt="item-image">
      <div class="card-body">
        <h5 class="card-title">${item["title"]}</h5>
        <p class="card-text">${item["description"].substring(0,100)}...</p>
        <a href=${item["url"]} class="btn btn-dark" target="_blank">Read more &rarr;</a>
      </div>
    </div>
    </div>

    
     `
  })

  let newsData=document.getElementById("newsData")
  newsData.innerHTML=str
}








