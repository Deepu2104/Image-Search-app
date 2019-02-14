
class Search{
    async getData(query){
        let key = "dbb6f774ba6ea7046c44d9a0749307bb08f2f5f24c4d1018741dd7b62127bd63"
        let res = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page10&query=${query}&client_id=${key}`) 
        let data = await res.json();
        this.fetchData = await data
    }
}
var state = {};
async function controlSearch(){
    state.gotData = new Search() //class function went into its prototype
    await state.gotData.getData(document.querySelector('.text-btn').value) //called here from  it's proto..
    clearText()
    renderImage(state.gotData.fetchData.results[0].urls)
    renderImage(state.gotData.fetchData.results[1].urls)
    renderImage(state.gotData.fetchData.results[2].urls)
    renderImage(state.gotData.fetchData.results[3].urls)
    renderImage(state.gotData.fetchData.results[4].urls)
    renderImage(state.gotData.fetchData.results[5].urls)
    renderImage(state.gotData.fetchData.results[6].urls)
    renderImage(state.gotData.fetchData.results[7].urls)
    renderImage(state.gotData.fetchData.results[8].urls)
    renderImage(state.gotData.fetchData.results[9].urls)


}
// controlSearch()
async function renderImage(img){
    const markup = 
    `
    <div>
        <img class = "img" src = "${img.full}">
    </div>
    `
    document.querySelector('.body').insertAdjacentHTML('beforeend', markup)
}
document.querySelector('.search').addEventListener('submit', e =>{
    e.preventDefault()
})
document.querySelector('.submit-btn').addEventListener('click', controlSearch);

function clearText(){
document.querySelector('.text-btn').value.innerHTML = ``;
}






// var el = document.getElementById('action');
// if(el){
//   el.addEventListener('click', controlSearch);
// }
// async getData(){
//     let key = "dbb6f774ba6ea7046c44d9a0749307bb08f2f5f24c4d1018741dd7b62127bd63"
//     let res = await fetch(`https://api.unsplash.com/search/photos/?page=1&per_page10&query=${query}&client_id=${key}`) 
//     let data = await res.json();
//     this.fetchData = await (data[0].urls);