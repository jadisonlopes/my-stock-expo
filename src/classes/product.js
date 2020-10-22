import api from '../services/api';

class Product {
  getRequest = async (code) => {
    try {
      const { data } = await api.get(`/supernet/produtos/${code}`);
      return data;
    } catch (error) {
      return null;
    }
  };
}

export default new Product();
