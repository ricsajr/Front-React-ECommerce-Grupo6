import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Produtos = ({ product }) => {
	return (
		<Card className="my-3 rounded">
			<Link to={`/produto/${product.id}`}>
				<Card.Img
					src={product.fotoLink}
					style={{ width: "300px", height: "300px" }}
					variant="top"
				/>
			</Link>

			<Card.Body>
				<Link to={`/produto/${product.id}`}>
					<Card.Title as="div">
						<h5>
							<strong>{product.nome}</strong>
						</h5>
					</Card.Title>
				</Link>

				<Card.Text as="h3">R${product.valor}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Produtos;
