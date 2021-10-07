import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { MenuData } from "../data/MenuData"

const BarsOfMenu = () => {
  return (
    <ContainerBurgerMenu>
      <NavMenu>
        {MenuData.map((item, index) =>
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        )}
      </NavMenu>
    </ContainerBurgerMenu>
  )
}

export default BarsOfMenu

const ContainerBurgerMenu = styled.div`
 width: 300px;
 height: 700px;
 display: block;
 position: absolute;
 top: 10px;
 left: 10px;
 /* z-index: 101; */
 background-color: #203652;
 border-radius: 5px;

 @media screen and (min-width: 768px) {
   display: none;
 }
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  
`

const NavLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #2b4c77;
  }
`


// const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;

//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `

// const NavMenu = styled.div`
//    display: flex;
//    align-items: center;
//    margin-right: 48px;

//    @media screen and (max-width: 768px) {
//      display: none;
//    }
// `

// const NavBtn = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen and (max-width: 768px) {
//         display: none;
//       }
// `
