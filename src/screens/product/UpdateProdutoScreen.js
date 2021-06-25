import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const UpdateProdutoScreen = () => {
	const [idProduto, setIdProduto] = useState("");
	const [idCategoria, setIdCategoria] = useState("");
	const [idFuncionario, setIdFuncionario] = useState("");
	const [nomeProduto, setNomeProduto] = useState("");
	const [descricao, setDescricao] = useState("");
	const [nomeCategoria, setNomeCategoria] = useState("");
	const [nomeFuncionario, setNomeFuncionario] = useState("");
	const [estoque, setEstoque] = useState("");
	const [valor, setValor] = useState("");
	const [categoryList, setCategoryList] = useState([]);
	const [funcionarioList, setFuncionarioList] = useState([]);
	const [produtoList, setProdutoList] = useState([]);

	useEffect(() => {
		const getProduto = () => {
			api.get("/produto")
				.then((data) => {
					setProdutoList(data.data);
				})
				.catch((error) => alert(error));
		};
		getProduto();
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
		let data = {
			nome: nomeProduto, //
			descricao: descricao, //
			qtdEstoque: parseInt(estoque, 10), //
			valor: parseInt(valor, 10), //
			idCategoria: parseInt(idCategoria, 10), //
			idFuncionario: parseInt(idFuncionario, 10), //
		};
		updateProduto(data);
	};
	const updateProduto = (data) => {
		api.put(`/produto/${idProduto}`, data)
			.then((d) => {
				alert("Atualizado com sucesso!");
			})
			.catch((error) => alert(error));
	};

	const filterByIdProduto = (obj) => {
		if (obj.id === idProduto) return obj;
	};
	const filterByIdCategoria = (obj) => {
		if (obj.id === idCategoria) return obj;
	};
	const filterByIdFuncionario = (obj) => {
		if (obj.id === idFuncionario) return obj;
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
						<Form.Label>Selecione o produto a editar</Form.Label>
						<Form.Control
							as="select"
							onChange={(option) => {
								setIdProduto(option.target.value);
								// setNomeProduto(
								// 	produtoList.filter(filterByIdProduto()).nome
								// );
								// setDescricao(
								// 	produtoList.filter(filterByIdProduto())
								// 		.descricao
								// );
								// setValor(
								// 	produtoList.filter(filterByIdProduto())
								// 		.valor
								// );
								// setNomeCategoria(
								// 	produtoList.filter(filterByIdProduto())
								// 		.nomeCategoria
								// );
								// setNomeFuncionario(
								// 	produtoList.filter(filterByIdProduto())
								// 		.nomeFuncionario
								// );
								setEstoque(option.target.value.qtdEstoque);
								console.log(idProduto);
							}}
						>
							{produtoList.map((produto) => (
								<option key={produto.id} value={produto.id}>
									{produto.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="nome">
						<Form.Label>Novo nome</Form.Label>

						<Form.Control
							type="text"
							placeholder="nome"
							onChange={(e) => setNomeProduto(e.target.value)}
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

					<Form.Group controlId="valor">
						<Form.Label>Novo Valor</Form.Label>
						<Form.Control
							type="number"
							placeholder="Novo Valor"
							onChange={(e) => setValor(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="categoria">
						<Form.Label>Selecione a categoria</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => {
								setIdCategoria(e.target.value);
								setNomeCategoria(
									categoryList.filter(filterByIdCategoria)
										.nome
								);
							}}
						>
							{categoryList.map((categoria, index) => (
								<option value={categoria.id} key={index}>
									{categoria.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="funcionario">
						<Form.Label>Selecione o funcionário</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => {
								setIdFuncionario(e.target.value);
								setNomeFuncionario(
									funcionarioList.filter(
										filterByIdFuncionario
									).nome
								);
							}}
						>
							{funcionarioList.map((funcionario, index) => (
								<option value={funcionario.id} key={index}>
									{funcionario.nome}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="estoque">
						<Form.Label>Quantidade em Estoque</Form.Label>

						<Form.Control
							type="text"
							placeholder="Quantidade Estoque"
							onChange={(e) => setEstoque(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Atualizar Produto
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default UpdateProdutoScreen;
