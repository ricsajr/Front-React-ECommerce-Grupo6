import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import FormContainer from "../components/FormContainer";
import api from "../../services/ApiService";
import FormContainer from "../../components/FormContainer";

const DropFuncionarioScreen = () => {
	const [id, setId] = useState("");
	const [funcionarioList, setFuncionarioList] = useState([]);

	useEffect(() => {
		const getFuncionario = () => {
			api.get("/funcionario/")
				.then((data) => {
					setFuncionarioList(data.data);
					console.log(funcionarioList);
				})
				.catch((error) => alert(error));
		};
		getFuncionario();
	}, []);

	const submit = (e) => {
		deleteFuncionario();
	};
	const deleteFuncionario = () => {
		api.delete(`/funcionario/${parseInt(id, 10)}`)
			.then((d) => {
				alert("Deletado com sucesso!")
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
					<Form.Group controlId="funcionario">
						<Form.Label>Funcionário</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) => setId(e.target.value)}
						>
							{funcionarioList.map((funcionario) => (
								<option value={funcionario.id}>
									{funcionario.nome}
								</option>
							))}
							;
						</Form.Control>
					</Form.Group>
					<Button type="submit" variant="primary">
						Deletar funcionario
					</Button>
				</Form>
			</FormContainer>
		</>
	);
};
export default DropFuncionarioScreen;
