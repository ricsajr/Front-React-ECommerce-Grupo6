// import React, { useState, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// // import FormContainer from "../components/FormContainer";
// import api from "../../services/ApiService";
// import FormContainer from "../../components/FormContainer";

// const UpdateProductScreen = () => {
// 	const [id, setId] = useState();
// 	const [produtoList, setProdutoList] = useState([]);
// 	const [descricao, setDescricao] = useState("");
// 	const [nome, setNome] = useState("");
// 	const [qtdEstoque, setQtdEstoque] = useState("");
// 	const [valor, setValor] = useState("");
// 	const [categoryList, setCategoryList] = useState([]);
// 	const [funcionarioList, setFuncionarioList] = useState([]);
// 	const [dataFabricacao, setDataFabricacao] = useState("");
// 	const [fotoLink, setFotoLink] = useState("");
// 	const [idCategoria, setIdCategoria] = useState("");
// 	const [idFuncionario, setIdFuncionario] = useState("");

// 	useEffect(() => {
// 		const getFuncionario = () => {
// 			api.get("/funcionario/")
// 				.then((data) => {
// 					setFuncionarioList(data.data);
// 				})
// 				.catch((error) => alert(error));
// 		};
// 		getFuncionario();
// 	}, []);

// 	useEffect(() => {
// 		const getCategoria = () => {
// 			api.get("/categoria/")
// 				.then((data) => {
// 					setCategoryList(data.data);
// 				})
// 				.catch((error) => alert(error));
// 		};
// 		getCategoria();
// 	}, []);

// 	useEffect(() => {
// 		const getProduto = () => {
// 			api.get("/produto/")
// 				.then((data) => {
// 					setProdutoList(data.data);
// 				})
// 				.catch((error) => alert(error));
// 		};
// 		getProduto();
// 	}, []);

// 	const submit = (e) => {
// 		let data = {
// 			id: id,
// 			nome: nome,
// 			descricao: descricao,
// 			qtdEstoque: qtdEstoque,
// 			valor: valor,
// 			idCategoria: idCategoria,
// 			idFuncionario: idFuncionario,
// 			dataFabricacao: dataFabricacao,
// 			fotoLink: fotoLink,
// 		};

// 		updateProduto(data);
// 	};
// 	const updateProduto = (data) => {
// 		api.put(`/produto/${id}`, data)
// 			.then((d) => {
// 				alert("Atualizado com sucesso!");
// 			})
// 			.catch((error) => alert(error));
// 	};

// 	const filterById = (obj) => {
// 		if (obj.id === id) return obj;
// 	};
// 	return (
// 		<>
// 			<FormContainer>
// 				<Form
// 					onSubmit={(e) => {
// 						e.preventDefault();
// 						submit(e);
// 					}}
// 				>
// 					<Form.Group controlId="produto">
// 						<Form.Label>Selecione o produto a editar</Form.Label>
// 						<Form.Control
// 							as="select"
// 							onChange={(e) => {
// 								setId(e.target.value);
// 								setNome(produtoList.filter(filterById).nome);
// 							}}
// 						>
// 							{produtoList.map((produto) => (
// 								<option value={produto.id}>
// 									{produto.nome}
// 								</option>
// 							))}
// 						</Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="nome">
// 						<Form.Label>Novo nome</Form.Label>
// 						{nome}
// 						<Form.Control
// 							type="text"
// 							placeholder="Nome Produto"
// 							onChange={(e) => setNome(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="descricao">
// 						<Form.Label>Nova Descrição</Form.Label>
// 						{setDescricao(produtoList.filter(filterById).descricao)}
// 						<Form.Control
// 							type="text"
// 							placeholder="Descrição"
// 							onChange={(e) => setDescricao(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="qtdEstoque">
// 						<Form.Label>Nova Quantidade em Estoque</Form.Label>
// 						{setQtdEstoque(
// 							produtoList.filter(filterById).qtdEstoque
// 						)}
// 						<Form.Control
// 							type="number"
// 							placeholder="Quantidade em Estoque"
// 							onChange={(e) => setQtdEstoque(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="valor">
// 						<Form.Label>Novo Valor</Form.Label>
// 						{setValor(produtoList.filter(filterById).valor)}
// 						<Form.Control
// 							type="number"
// 							placeholder="Descrição"
// 							onChange={(e) => setValor(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="categoria">
// 						<Form.Label>Selecione a categoria a editar</Form.Label>
// 						<Form.Control
// 							as="select"
// 							onChange={(e) => {
// 								setId(e.target.value);
// 								setNome(categoryList.filter(filterById).nome);
// 							}}
// 						>
// 							{categoryList.map((categoria) => (
// 								<option value={categoria.id}>
// 									{categoria.nome}
// 								</option>
// 							))}
// 						</Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="funcionario">
// 						<Form.Label>
// 							Selecione o funcionário a editar
// 						</Form.Label>
// 						<Form.Control
// 							as="select"
// 							onChange={(e) => {
// 								setId(e.target.value);
// 								setNome(
// 									funcionarioList.filter(filterById).nome
// 								);
// 							}}
// 						>
// 							{funcionarioList.map((funcionario) => (
// 								<option value={funcionario.id}>
// 									{funcionario.nome}
// 								</option>
// 							))}
// 						</Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="dataFabricacao">
// 						<Form.Label>Data de Fabricação</Form.Label>
// 						{setDataFabricacao(
// 							produtoList.filter(filterById).dataFabricacao
// 						)}
// 						<Form.Control
// 							type="text"
// 							placeholder="Data de Fabricação"
// 							onChange={(e) => setDataFabricacao(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Form.Group controlId="fotoLink">
// 						<Form.Label>Nova Descrição</Form.Label>
// 						{setFotoLink(produtoList.filter(filterById).fotoLink)}
// 						<Form.Control
// 							type="text"
// 							placeholder="Link da Foto"
// 							onChange={(e) => setFotoLink(e.target.value)}
// 						></Form.Control>
// 					</Form.Group>

// 					<Button type="submit" variant="primary">
// 						Atualizar Produto
// 					</Button>
// 				</Form>
// 			</FormContainer>
// 		</>
// 	);
// };

// export default UpdateProductScreen;
