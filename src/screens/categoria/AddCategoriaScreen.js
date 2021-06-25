import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const AddCategoriaScreen = () => {
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");

	const submit = (e) => {
		let data = {
			nome: nome,
			descricao: descricao,
		};
		postProduct(data);
	};
	const postProduct = (data) => {
		api.post("/categoria/", data)
			.then((d) => {
				alert("Registrado com sucesso!");
			})
			.catch((error) => alert(error));
	};

	return (
		<>
			<FormContainer>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						submit(e);
					}}
				>
					<Form.Group controlId="nome">
						<Form.Label>Nome</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nome"
							onChange={(e) => setNome(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="descricao">
						<Form.Label>Descrição</Form.Label>
						<Form.Control
							type="text"
							placeholder="Descrição"
							onChange={(e) => setDescricao(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Button type="submit" variant="primary">
						Registrar Categoria
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default AddCategoriaScreen;
