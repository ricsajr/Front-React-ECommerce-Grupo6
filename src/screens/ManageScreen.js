import React from "react";
import { Card, Row, Container } from "react-bootstrap";

export const ManageScreen = () => {
	return (
		<>
			<Container className="d-flex justify-content-center">
				<h2>Gerenciar</h2>
			</Container>

			<Container className="d-flex justify-content-center" fluid="sm">
				<Row className="mx-auto">
					<Card
						className="my-5 rounded"
						style={{
							width: "20rem",
							marginTop: "20px",
							marginRight: "30px",
						}}
					>
						<Card.Body>
							<Card.Title as="h3">Cliente</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Gerenciar Cliente
							</Card.Subtitle>
							<Card.Text>
								Aqui você pode adicionar, remover, ou deletar
								registros de clientes.
							</Card.Text>
							<Card.Link href="/manage/cliente/add-cliente-screen">
								Adicionar
							</Card.Link>

							<Card.Link href="/manage/cliente/update-cliente-screen">
								Atualizar
							</Card.Link>
							<Card.Link href="/manage/cliente/drop-cliente-screen">
								Remover
							</Card.Link>
						</Card.Body>
					</Card>

					<Card
						className="my-5 rounded"
						style={{
							width: "20rem",
							marginTop: "20px",
							marginRight: "30px",
						}}
					>
						<Card.Body>
							<Card.Title as="h3">Funcionário</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Gerenciar Funcionários
							</Card.Subtitle>
							<Card.Text>
								Aqui você pode adicionar, remover, ou deletar
								registros de funcionários.
							</Card.Text>

							<Card.Link href="/manage/funcionario/add-funcionario-screen">
								Adicionar
							</Card.Link>

							<Card.Link href="/manage/funcionario/update-funcionario-screen">
								Atualizar
							</Card.Link>

							<Card.Link href="/manage/funcionario/drop-funcionario-screen">
								Remover
							</Card.Link>
						</Card.Body>
					</Card>

					<Card
						className="my-5 rounded"
						style={{
							width: "20rem",
							marginTop: "20px",
							marginRight: "30px",
						}}
					>
						<Card.Body>
							<Card.Title as="h3">Produtos</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Gerenciar Produtos
							</Card.Subtitle>
							<Card.Text>
								Aqui você pode adicionar, remover, ou deletar
								registros de produtos.
							</Card.Text>
							<Card.Link href="/manage/produto/add-produto-screen">
								Adicionar
							</Card.Link>
							<Card.Link href="/manage/produto/update-produto-screen">
								Atualizar
							</Card.Link>
							<Card.Link href="/manage/produto/drop-produto-screen">
								Remover
							</Card.Link>
						</Card.Body>
					</Card>

					<Card
						className="my-5 rounded"
						style={{
							width: "20rem",
							marginTop: "20px",
							marginRight: "30px",
						}}
					>
						<Card.Body>
							<Card.Title as="h3">Categoria</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Gerenciar Categoria
							</Card.Subtitle>
							<Card.Text>
								Aqui você pode adicionar, remover, ou deletar
								registros de categoria.
							</Card.Text>
							<Card.Link href="/manage/categoria/add-categoria-screen">
								Adicionar
							</Card.Link>
							<Card.Link href="/manage/categoria/update-categoria-screen">
								Atualizar
							</Card.Link>
							<Card.Link href="/manage/categoria/drop-categoria-screen">
								Remover
							</Card.Link>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
};
