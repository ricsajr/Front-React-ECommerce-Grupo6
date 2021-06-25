import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/home/HomeScreen";
import { ManageScreen } from "./screens/ManageScreen";
import CartScreen from "./screens/CartScreen";

import AddProductScreen from "./screens/product/AddProductScreen";
import UpdateProdutoScreen from "./screens/product/UpdateProdutoScreen";
import DropProdutoScreen from "./screens/product/DropProdutoScreen";
import ProductDetailsScreen from "./screens/product/ProductDetailsScreen";
import UpdateProductScreen from "./screens/product/UpdateProductScreen";
import UpdateCategoriaScreen from "./screens/categoria/UpdateCategoriaScreen";

import AddCategoriaScreen from "./screens/categoria/AddCategoriaScreen";
import DropCategoriaScreen from "./screens/categoria/DropCategoriaScreen";
import UpdateCategoriascreen from "./screens/categoria/UpdateCategoriaScreen";

import AddClienteScreen from "./screens/cliente/AddClienteScreen";
import DropClienteScreen from "./screens/cliente/DropClienteScreen";
import UpdateClienteScreen from "./screens/cliente/UpdateClienteScreen";

import AddFuncionarioScreen from "./screens/funcionario/AddFuncionarioScreen";
import DropFuncionarioScreen from "./screens/funcionario/DropFuncionarioScreen";
import UpdateFuncionarioScreen from "./screens/funcionario/UpdateFuncionarioScreen";

function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Switch>
						<Route
							path="/manage/categoria/DropCategoriaScreen"
							component={DropCategoriaScreen}
							exact
						/>

						<Route
							path="/manage/categoria/add-categoria-screen"
							component={AddCategoriaScreen}
							exact
						/>
						<Route
							path="/manage/categoria/update-categoria-screen"
							component={UpdateCategoriaScreen}
						/>

						<Route path="/" component={HomeScreen} exact />
						<Route path="/manage" component={ManageScreen} exact />
						<Route path="/cart/:id?" component={CartScreen} />

						<Route
							path="/manage/produto/add-produto-screen"
							component={AddProductScreen}
							exact
						/>
						<Route
							path="/manage/produto/update-produto-screen"
							component={UpdateProdutoScreen}
							exact
						/>
						<Route
							path="/produto/:id"
							component={ProductDetailsScreen}
							exact
						/>
						<Route
							path="/manage/produto/drop-produto-screen"
							component={DropProdutoScreen}
							exact
						/>
						{/* <Route
							path="/manage/product/update-produto-screen"
							component={UpdateProductScreen}
							exact
						/> */}

						<Route
							path="/manage/funcionario/add-funcionario-screen"
							component={AddFuncionarioScreen}
							exact
						/>

						<Route
							path="/manage/funcionario/update-funcionario-screen"
							component={UpdateFuncionarioScreen}
						/>

						<Route
							path="/manage/funcionario/drop-funcionario-screen"
							component={DropFuncionarioScreen}
							exact
						/>

						<Route
							path="/manage/cliente/add-cliente-screen"
							component={AddClienteScreen}
						/>
						<Route
							path="/manage/cliente/update-cliente-screen"
							component={UpdateClienteScreen}
						/>
						<Route
							path="/manage/cliente/drop-cliente-screen"
							component={DropClienteScreen}
						/>
					</Switch>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
