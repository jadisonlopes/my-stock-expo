import api from '../services/api';

class Usuario {
  static async permitted(name) {
    try {
      const { data } = await api.get(`/usuario/permitido/${name}`);
      return !!data;
    } catch (error) {
      return false;
    }
  }

  static async logon(name, password) {
    try {
      const { data } = await api.get(`/usuario/acesso/${name}`, {
        params: { senha: password },
      });
      return !!data;
    } catch (error) {
      return false;
    }
  }
}

export default Usuario;
