import api from '../services/api';

class Usuario {
  permitted = async (value) => {
    try {
      const { data } = await api.get(`/usuario/permitido/${value}`);
      return !!data;
    } catch (error) {
      return false;
    }
  };

  getRequest = async (name) => {
    try {
      const { data } = await api.get(`/usuario/${name}`);
      return !!data;
    } catch (error) {
      return false;
    }
  };
}

export default new Usuario();
