import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const UpdateCategoriaScreen = () => {
	const [id, setId] = useState("");
	const [categoryList, setCategoryList] = useState([]);
	const [descricao, setDescricao] = useState("");
	const [nome, setNome] = useState("");

	useEffect(() => {
		const getCategoria = () => {
			api.get("/categoria")
				.then((data) => {
					setCategoryList(data.data);
				})
				.catch((error) => alert(error));
		};
		getCategoria();
	}, []);

	useEffect(() => {
		const getCategoria = () => {
			api.get("/categoria")
				.then((data) => {
					setCategoryList(data.data);
				})
				.catch((error) => alert(error));
		};
		getCategoria();
	}, []);

	const submit = (e) => {
		let data = {
			nome: nome,
			descricao: descricao,
		};
		updateCategoria(data);
	};
	const updateCategoria = (data) => {
		api.put(`/categoria/${id}`, data)
			.then((d) => {
				alert("Atualizado com sucesso!");
			})
			.catch((error) => alert(error));
	};

	const filterById = (obj) => {
		if (obj.id === id) return obj;
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
					<Form.Group controlId="categoria">
						<Form.Label>Selecione a categoria a editar</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => {
								setId(e.target.value);
								setNome(categoryList.filter(filterById).nome);
								setDescricao(
									categoryList.filter(filterById).descricao
								);
							}}
						>
							{categoryList.map((category) => (
								<option value={category.id}>
									{category.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="nome">
						<Form.Label>Novo nome</Form.Label>

						<Form.Control
							type="text"
							placeholder="nome"
							onChange={(e) => setNome(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="descricao">
						<Form.Label>Nova Descrição</Form.Label>
						<Form.Control
							type="text"
							placeholder="descricao"
							onChange={(e) => setDescricao(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Atualizar Categoria
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default UpdateCategoriaScreen;
