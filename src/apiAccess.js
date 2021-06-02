import axios from "axios";

class ApiCache {
	// cache = {};
	// hits = 0;
	// misses = 0;

	constructor() {
		let storage = JSON.parse(localStorage.getItem('githubCache'));

		if (!storage) {
			storage = {};
			localStorage.setItem('githubCache', JSON.stringify(storage));
			localStorage.setItem('githubCacheHits', 0);
			localStorage.setItem('githubCacheMisses', 0);
		}

		this._cache = storage;
	}

	has(url) {
		const hasItem = Object.hasOwnProperty.call(this._cache, url);

		if (!hasItem)
			console.log(`Github Cache: ${++this.misses} miss!`)

		return hasItem;
	}

	get(url) {
		if (!this.has(url))
			throw Error("Did you even check first?");

		console.log(`Github Cache: ${++this.hits} served from cache!`)
		return this._cache[url];
	}

	add(url, data) {
		this._cache[url] = data;

		localStorage.setItem('githubCache', JSON.stringify(this._cache));

		console.log(`Github Cache: ${Object.keys(this._cache)} items stored!`)
	}

	get hits() {
		return parseInt(localStorage.getItem('githubCacheHits'));
	}

	set hits(value) {
		localStorage.setItem('githubCacheHits', value);
	}

	get misses() {
		return parseInt(localStorage.getItem('githubCacheMisses'));
	}

	set misses(value) {
		localStorage.setItem('githubCacheMisses', value);
	}
}

const cache = new ApiCache();

const fetch = url => {
	if (cache.has(url)) {
		return Promise.resolve(cache.get(url));
	}

	else {
		return axios.get(url)
			.then(response => {
				cache.add(url, response);
				return response;
			})
			.catch(error => {
				console.log(error);
			});
	}
}

export default fetch;