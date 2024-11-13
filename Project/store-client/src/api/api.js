
import axios from 'axios'


const API = 'http://localhost:5000'


const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) =>axios.post(`${API}/products/addproduct`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct = (id) => axios.delete(`${API}/products/delete/${id}`)



const getOrders = () => axios.get(`${API}/orders/all`)


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)



const getUsers = () => axios.get(`${API}/users/all`)
const addUser = (user) =>axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)

export { getProducts, getOrders, Login, Register, addProduct,editProduct, deleteProduct,getUsers ,addUser, editUser, deleteUser}