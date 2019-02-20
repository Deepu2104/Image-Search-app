//you just need key to work this code..and download images in hd quality
//https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${key}
class Search{
    async getData(Query){
        let key = "key"
        let res = await fetch(`https://api.unsplash.com/search/photos/?page=10&per_page=25&query=${Query}&client_id=${key}`)
        let data = await res.json();
        this.fetchData = data.results;
        console.log(data.results)
    }
}

var state = {};
async function controlSearch(){
    state.gotData = new Search()
    clearImages()
    await state.gotData.getData(document.querySelector('.text-btn').value)
    renderResults(state.gotData.fetchData);
    clearText()
}
// controlSearch()

function renderResults(x){
    x.forEach(renderImage)
}

function renderImage(img){
    let markup = 
    `
    <p>
        <img class = "img" src = "${img.urls.full}">
    </p>
    `
    document.querySelector('.p').insertAdjacentHTML('beforeend', markup)
}


document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault()
})
document.querySelector('.submit-btn').addEventListener('click', controlSearch);

function clearText(){
document.querySelector('.text-btn').value = ``;
}
function clearImages(){
    document.querySelector('.p').innerHTML = ` `;
}








// function noData(){
//     let markup = `
//         <p>
//         No results found!!
//         </p>
//     `
//     document.querySelector('.p').insertAdjacentElement('beforeend', markup)
// }
// var el = document.getElementById('action');
// if(el){
// el.addEventListener('click', controlSearch);
// }
// async getData(){
//     let key = "dbb6f774ba6ea7046c44d9a0749307bb08f2f5f24c4d1018741dd7b62127bd63"
//     let res = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page10&query=${query}&client_id=${key}`) 
//     let data = await res.json();
//     this.fetchData = await (data[0].urls);
