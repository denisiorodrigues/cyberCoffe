import { HeaderContainer, HeaderContent, Location } from "./styles";
import logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return <HeaderContainer>
    <HeaderContent>
      <NavLink to="/" title="Home">
        <img src={logo}/>
      </NavLink>

      <nav>
        <Location>
          <MapPin size={24} weight="fill"/>
          Fortaleza, Ce
        </Location>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill"/>
        </NavLink>
      </nav>
    </HeaderContent>
  </HeaderContainer>
}