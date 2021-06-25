import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { listProductDetails } from "../../actions/productActions.js";

const ProductDetailsScreen = ({ match, history }) => {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

	return (
		<>
			<Link
				to="/"
				className="btn btn-secondary my-3 btn-sm btn-outline-primary"
				variant="outline-danger"
			>
				Voltar
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image
							src={product.fotoLink}
							alt={product.nome}
							fluid
						/>
					</Col>
					<Col md={3}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h3>{product.nome}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								Descrição: {product.descricao}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col>Preço:</Col>
										<Col>
											<strong>R${product.valor}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.qtdEstoque > 0
												? `Quantidade disponível: ${product.qtdEstoque}`
												: "Produto Indisponível"}
										</Col>
									</Row>
								</ListGroup.Item>

								{product.qtdEstoque > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as="select"
													value={qty}
													onChange={(e) =>
														setQty(e.target.value)
													}
												>
													{[
														...Array(
															product.qtdEstoque
														).keys(),
													].map((x) => (
														<option
															key={x + 1}
															value={x + 1}
														>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className="btn-block"
										type="button"
										disabled={product.qtdEstoque === 0}
									>
										Adicionar ao carrinho
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductDetailsScreen;
