
import axios from 'axios'


const API = 'http://localhost:5000'


const getProducts = () => axios.get(`${API}/products/all`)




const getOrders = () => axios.get(`${API}/orders/all`)



const getUsers = () => axios.get(`${API}/users/all`)

const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)
const addProduct = (product) =>axios.post(`${API}/products/addproduct`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)


export { getProducts, getOrders, getUsers ,Login, Register, addProduct, deleteProduct}