import { NavLink } from "react-router-dom";

export default function NavBar(){


    return (
      <li>
      <NavLink exact to="/" activeClassName="link-active">
        Todas Las Peliculas
      </NavLink>
      <NavLink exact to="/mostValued" activeClassName="link-active">
        Mejores Valoradas
      </NavLink>
      <NavLink exact to="/lessValued" activeClassName="link-active">
        Menos Valoradas
      </NavLink>
      <NavLink exact to="/login" activeClassName="link-active">
       Login
      </NavLink>
    </li>
    )
}
