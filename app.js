const form = document.getElementById("search-form");
const query = document.getElementById("search-query");
const images = document.querySelector(".images");
const clear = document.getElementById("clear-images");
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const searchValue = query.value;
	const config = { params: { q: searchValue } };
	const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
	makeImages(res.data);
	query.value = "";
});

const makeImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement("img");
			img.src = result.show.image.medium;
			images.append(img);
		}
	}
};
clear.addEventListener("click", () => {
	console.log(images.childElementCount);
	for (let i = 0; i < images.childElementCount; i++) {
		images.removeChild(images.childNodes[i]);
	}
});
