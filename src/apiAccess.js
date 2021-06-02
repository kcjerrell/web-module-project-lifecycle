// I know it is not best practice to include an access token in the source or repo

import axios from "axios";

// But I'm doing it anyway!
const accessToken = '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';
const username = 'kcjerrell';
const auth = { username, password: accessToken };


// But now I'm going to cache all the responses anyway
const githubCache = { ...JSON.parse(localStorage.getItem('githubCache')) };

const fetch = url =>
{
	if (Object.hasOwnProperty.call(githubCache, url)) {
		console.log(`we've got '${url} already!`)

		// This is where I would check how old the cache value is, and fetch if stale

		return Promise.resolve(githubCache[url]);
	}

	else {
		return axios.get(url, { auth })
			.then(response => {
				githubCache[url] = response;
				localStorage.setItem('githubCache', JSON.stringify(githubCache));
				return response;
			})
			.catch(error => console.log(error));
	}
}

export default fetch;