import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const DropCategoriaScreen = () => {
	const [id, setId] = useState("");
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		const getCategoria = () => {
			api.get("/categoria/")
				.then((data) => {
					setCategoryList(data.data);
				})
				.catch((error) => alert(error));
		};
		getCategoria();
	}, []);

	const submit = (e) => {
		deleteCategoria();
	};
	const deleteCategoria = () => {
		api.delete(`/categoria/${parseInt(id, 10)}`)
			.then((d) => {
				alert("Deletado com sucesso!");
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
					<Form.Group controlId="categoria">
						<Form.Label>Categoria</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => setId(e.target.value)}
						>
							{categoryList.map((category) => (
								<option value={category.id}>
									{category.nome}
								</option>
							))}
							;
						</Form.Control>
					</Form.Group>
					<Button type="submit" variant="primary">
						Deletar Categoria
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default DropCategoriaScreen;
