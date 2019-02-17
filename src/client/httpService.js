import axios from 'axios';
import API from '../shared/API.js';

export default axios.create({ baseURL: API.base });