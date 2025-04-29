import { types } from "../types/types";
import localAPI from "../controllers/localAPI";

export const startLogin = (usuario, contrasenia) => {
  return async (dispatch) => {
    try {
      const { data } = await localAPI.post("/login", { usuario, contrasenia });

      if (data.Bloqueado) {
        dispatch({
          type: types.loginFailure,
          payload: "Su usuario ha sido bloqueado. Contacte al administrador del sistema."
        });
      } else if (!data.Resultado) {
        dispatch({
          type: types.loginFailure,
          payload: "Usuario y/o contraseña incorrectos."
        });
      } else {
        dispatch({
          type: types.loginSuccess,
          payload: data.Usuario
        });
      }
    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
      dispatch({
        type: types.loginFailure,
        payload: "Error en el servidor. Intente más tarde."
      });
    }
  };
};

const loginSuccess = (usuario) => ({
  type: types.loginSuccess,
  payload: usuario,
});

const loginFailure = (error) => ({
  type: types.loginFailure,
  payload: error,
});

export const logout = () => ({
  type: types.logout,
});