import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";
const AddFuncionarioScreen = () => {
	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");

	

	const submit = (e) => {
		let data = {
			nome: nome,
			cpf: cpf,
		};
		postFuncionario(data);
	};
	const postFuncionario = (data) => {
		api.post("/funcionario", data)
			.then((d) => {
				alert ("Funcionário registrado com sucesso!")
				console.log(d);
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

					<Form.Group controlId="cpf">
						<Form.Label>CPF</Form.Label>
						<Form.Control
							type="text"
							placeholder="Cpf"
							onChange={(e) => setCpf(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Registrar Funcionário
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default AddFuncionarioScreen;
