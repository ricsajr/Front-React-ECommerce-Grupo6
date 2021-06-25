import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const UpdateFuncionarioScreen = () => {
	const [id, setId] = useState("");
	const [funcionarioList, setFuncionarioList] = useState([]);
	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");

	useEffect(() => {
		const getFuncionario = () => {
			api.get("/funcionario")
				.then((data) => {
					setFuncionarioList(data.data);
				})
				.catch((error) => alert(error));
		};
		getFuncionario();
	}, []);

	const submit = (e) => {
		let data = {
			id: parseInt(id, 10),
			nome: nome,
			cpf: cpf,
		};
		updateFuncionario(data);
	};
	const updateFuncionario = (data) => {
		api.put(`/funcionario/${id}`, data)
			.then((d) => {
				alert("Funcionario atualizado com sucesso!");
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
					<Form.Group controlId="funcionario">
						<Form.Label>
							Selecione o funcionario a editar
						</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => {
								setId(e.target.value);
								setNome(
									funcionarioList.filter(filterById).nome
								);
								setCpf(funcionarioList.filter(filterById).cpf);
							}}
						>
							{funcionarioList.map((funcionario) => (
								<option value={funcionario.id}>
									{funcionario.nome}
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

					<Form.Group controlId="cpf">
						<Form.Label>Novo CPF</Form.Label>
						<Form.Control
							type="text"
							placeholder="cpf"
							onChange={(e) => setCpf(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Atualizar funcionario
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default UpdateFuncionarioScreen;
