import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getGlossary() {
	return axios.get(`${BASE_URL}/api/glossary`)
		.then(response => response.data);
}

