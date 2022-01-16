import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<nav>
			<Link to="/">
				Home
			</Link>
			<Link to="/create">
				Create Todo
			</Link>
			<Link to="/todo">
				List Todo
			</Link>
		</nav>
	)
}

export default NavBar