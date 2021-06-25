import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const DropProdutoScreen = () => {
	const [id, setId] = useState("");
	const [produtoList, setProdutoList] = useState([]);

	useEffect(() => {
		const getProduto = () => {
			api.get("/produto/")
				.then((data) => {
					setProdutoList(data.data);
				})
				.catch((error) => alert(error));
		};
		getProduto();
	}, []);

	const submit = (e) => {
		deleteProduto();
	};
	const deleteProduto = () => {
		api.delete(`/produto/${id}`)
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
					<Form.Group controlId="produto">
						<Form.Label>Produto</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => setId(e.target.value)}
						>
							{produtoList.map((produto) => (
								<option value={produto.id}>
									{produto.nome}
								</option>
							))}
							;
						</Form.Control>
					</Form.Group>
					<Button type="submit" variant="primary">
						Deletar Produto
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default DropProdutoScreen;
