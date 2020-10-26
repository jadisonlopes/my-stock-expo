import api from '../services/api';

class Product {
  static async request(code) {
    try {
      const { data } = await api.get(`/supernet/produtos/${code}`);
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default Product;
