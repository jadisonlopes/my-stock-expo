import axios from 'axios';
import { configAPI } from '../config/api';

const api = axios.create(configAPI);

export default api;
