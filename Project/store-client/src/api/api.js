
import axios from 'axios'


const API = 'http://localhost:5000/products/all'

const getProducts = () => axios.get(API)


export { getProducts }