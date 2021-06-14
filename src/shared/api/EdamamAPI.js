import Axios from 'axios'

const EdamamAPI = Axios.create({
	baseURL: 'https://swapi.dev/api/'
})

export default EdamamAPI