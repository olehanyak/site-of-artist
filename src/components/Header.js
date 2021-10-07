import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { MenuData } from "../data/MenuData"
import { Button } from "./Button"
import BarsOfMenu from "./BarsOfMenu"

const Header = () => {
  const [openBars, setOpenBars] = React.useState(false)

  const toggleHum = () => {
    setOpenBars(!openBars)
  }

  return (
    <header>
      <Nav>
        <NavLink to='/'>Home</NavLink>

        <Bars onClick={toggleHum} />
        {openBars ? <BarsOfMenu /> : null}

        <NavMenu>
          {MenuData.map((item, index) =>
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          )}
        </NavMenu>
        <NavBtn>
          <Button primary='true' round='true' to='/photo'>Глянути</Button>
        </NavBtn>
      </Nav>
    </header>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
      display: none;
    }
`
