import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const AddProductScreen = () => {
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [categoria, setCategoria] = useState("");
	const [funcionario, setFuncionario] = useState("");
	const [estoque, setEstoque] = useState("");
	const [valor, setValor] = useState("");
	const [categoryList, setCategoryList] = useState([]);
	const [funcionarioList, setFuncionarioList] = useState([]);

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

	useEffect(() => {
		const getFuncionario = () => {
			api.get("/funcionario/")
				.then((data) => {
					setFuncionarioList(data.data);
				})
				.catch((error) => alert(error));
		};
		getFuncionario();
	}, []);

	const submit = (e) => {
		let data = {
			nome: nome,
			descricao: descricao,
			idCategoria: categoria,
			idFuncionario: funcionario,
			qtdEstoque: estoque,
			valor: valor,
		};
		postProduct(data);
	};
	const postProduct = (data) => {
		api.post("/produto", data)
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

					<Form.Group controlId="categoria">
						<Form.Label>Categoria</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => setCategoria(e.target.value)}
						>
							{categoryList.map((category) => (
								<option value={category.id}>
									{category.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="funcionario">
						<Form.Label>Funcionário</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => setFuncionario(e.target.value)}
						>
							{funcionarioList.map((funcionario) => (
								<option value={funcionario.id}>
									{funcionario.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="estoque">
						<Form.Label>Quantidade em Estoque</Form.Label>
						<Form.Control
							type="number"
							placeholder="Quantidade"
							onChange={(e) => setEstoque(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="valor">
						<Form.Label>Valor</Form.Label>
						<Form.Control
							type="number"
							placeholder="Valor"
							onChange={(e) => setValor(e.target.value)}
						></Form.Control>
					</Form.Group>

					{/* <Form.Group controlId="foto">
						<Form.Label>Foto</Form.Label>
						<Form.Control
							type="text"
							className="custom-file-label"
							onChange={(e) => setFoto(e.target.value)}
						/>
					</Form.Group> */}

					<Button type="submit" variant="primary">
						Registrar Produto
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default AddProductScreen;
