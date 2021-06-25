import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import api from "../services/ApiService";

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await api.get(`/produto/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data.id,
			nome: data.nome,
			fotoLink: data.fotoLink,
			valor: data.valor,
			qtdEstoque: data.qtdEstoque,
			qty,
		},
	});

	localStorage.setItem(
		"cartItems",
		JSON.stringify(getState().cart.cartItems)
	);
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem(
		"cartItems",
		JSON.stringify(getState().cart.cartItems)
	);
};
