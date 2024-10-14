export class PhotoService {

	constructor(apiEndpoint) {
		this.apiEndpoint = apiEndpoint
	}

	async getAll() {
		const url = this.apiEndpoint + `/photos`
		const resp = await fetch(url, {
			headers: {
				"Accept": "application/json"
			},
			method: "GET",
		})
		const json = await resp.json()
		return json
	}

	async getOne(id) {
		const url = this.apiEndpoint + `/photos/${id}`
		const resp = await fetch(url, {
			headers: {
				"Accept": "application/json"
			},
			method: "GET",
		})
		const json = await resp.json()
		return json
	}
}

const photoService = new PhotoService(process.env.API_URL)

export default photoService