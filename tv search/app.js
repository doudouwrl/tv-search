const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const s = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${s}`);
    console.log(res.data);
    makeImage(res.data);

})

const makeImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}