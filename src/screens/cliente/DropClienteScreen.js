import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";
const DropClienteScreen = () => {
	const [id, setId] = useState("");
	const [listaClientes, setListaClientes] = useState([]);

	useEffect(() => {
		const getListaClientes = () => {
			api.get("/cliente")
				.then((data) => {
					setListaClientes(data.data);
					console.log(listaClientes);
				})
				.catch((error) => alert(error));
		};
		getListaClientes();
	}, []);

	const submit = (e) => {
		deleteCliente();
	};
	const deleteCliente = () => {

		api.delete(`/cliente/${ parseInt(id, 10)}`)
			.then((d) => {
				alert("Deletado com sucesso!")
				console.log(d);
			})
			.catch((error) => alert(error));
	};
	return (
		<FormContainer>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					submit(e);
				}}
			>
				<Form.Group controlId="cliente">
					<Form.Label>Cliente</Form.Label>
					<Form.Control
						as="select"
						onChange={(e) => setId(e.target.value)}
					>
						{listaClientes.map((cliente) => (
							<option value={cliente.id}>{cliente.nome}</option>
						))}
						;
					</Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Deletar Cliente
				</Button>
			</Form>
		</FormContainer>
	);
};

export default DropClienteScreen;
