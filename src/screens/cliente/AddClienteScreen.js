import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const AddClienteScreen = () => {
	const [nome, setNome] = useState("");
	const [usuario, setUsuario] = useState("");
	const [cpf, setCpf] = useState("");
	const [email, setEmail] = useState("");
	const [dataDeNascimento, setDataDeNascimento] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");

	const submit = (e) => {
		let data = {
			nome: nome,
			usuario: usuario,
			cpf: cpf,
			email: email,
			dataNascimento: dataDeNascimento,
			endereco: {
				rua: rua,
				numero: numero,
				complemento: complemento,
				bairro: bairro,
				cidade: cidade,
				estado: estado,
				cep: cep,
			},
		};
		postCliente(data);
	};
	const postCliente = (data) => {
		api.post("/cliente/", data)
			.then((d) => {
				alert("Cliente registrado com sucesso!");
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

					<Form.Group controlId="usuario">
						<Form.Label>Usuário</Form.Label>
						<Form.Control
							type="text"
							placeholder="Usuario"
							onChange={(e) => setUsuario(e.target.value)}
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

					<Form.Group controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="text"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="dataDeNascimento">
						<Form.Label>Data de Nascimento</Form.Label>
						<Form.Control
							type="text"
							placeholder="Data de Nascimento"
							onChange={(e) =>
								setDataDeNascimento(e.target.value)
							}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="rua">
						<Form.Label>Rua</Form.Label>
						<Form.Control
							type="text"
							placeholder="Rua"
							onChange={(e) => setRua(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="numero">
						<Form.Label>Numero</Form.Label>
						<Form.Control
							type="text"
							placeholder="Numero"
							onChange={(e) => setNumero(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="complemento">
						<Form.Label>Complemento</Form.Label>
						<Form.Control
							type="text"
							placeholder="Complemento"
							onChange={(e) => setComplemento(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="bairro">
						<Form.Label>Bairro</Form.Label>
						<Form.Control
							type="text"
							placeholder="Bairro"
							onChange={(e) => setBairro(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="cidade">
						<Form.Label>Cidade</Form.Label>
						<Form.Control
							type="text"
							placeholder="Cidade"
							onChange={(e) => setCidade(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="estado">
						<Form.Label>Estado</Form.Label>
						<Form.Control
							type="text"
							placeholder="Estado"
							onChange={(e) => setEstado(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="cep">
						<Form.Label>CEP</Form.Label>
						<Form.Control
							type="text"
							placeholder="CEP"
							onChange={(e) => setCep(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Registrar Cliente
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};

export default AddClienteScreen;
