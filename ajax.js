class Search {
  async getData(query) {
    let key = "811ec0c4b2d4d51329e93cdde24b72b7140809820aacb7942c2b82827afac5ba"; // Replace with your valid API key
    let res = await fetch(`https://api.unsplash.com/search/photos/?page=10&per_page=25&query=${query}&client_id=${key}`);
    let data = await res.json();
    this.fetchData = data.results;
    console.log(data.results);
  }
}

var state = {};

async function controlSearch() {
  state.gotData = new Search();
  clearImages();
  await state.gotData.getData(document.querySelector('.text-btn').value);
  renderResults(state.gotData.fetchData);
  clearText();
}

function renderResults(x) {
  x.forEach(renderImage);
}

function renderImage(img) {
  let markup = `
    <a href="${img.links.html}" target="_blank">
      <img class="img" src="${img.urls.full}">
    </a>
  `;
  document.querySelector('.renderImage').insertAdjacentHTML('beforeend', markup);
}

document.querySelector('.search').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.querySelector('.submit-btn').addEventListener('click', controlSearch);

function clearText() {
  document.querySelector('.text-btn').value = '';
}

function clearImages() {
  document.querySelector('.renderImage').innerHTML = '';
}
