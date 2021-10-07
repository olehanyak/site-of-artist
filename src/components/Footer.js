
import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaFacebook, FaTelegram, FaTwitter, FaViber } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContactsWrapper>
        <FooterContactItem>
          <FooterContactMail to="/">myMail@mail.com</FooterContactMail>
          <FooterContactPhone>телефон: 011 34 55 660</FooterContactPhone>
        </FooterContactItem>
        <FooterLinkItem>
          <FooterLink to="/"><FaFacebook /></FooterLink>
          <FooterLink to="/"><RiInstagramFill /></FooterLink>
          <FooterLink to="/"><FaTelegram /></FooterLink>
          <FooterLink to="/"><FaTwitter /></FooterLink>
          <FooterLink to="/"><FaViber /></FooterLink>
        </FooterLinkItem>
        <p>&#169; Hanyak Oleh 2021</p>
      </FooterContactsWrapper>
    </FooterContainer>
  )
}

// Footer.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Footer

const FooterContainer = styled.footer`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B2B9E8;
  color: #515469;
`
const FooterContactsWrapper = styled.div`

`
const FooterContactItem = styled.div`

`
const FooterContactMail = styled(Link)`
  padding: 0%.5rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;
  color: #515469;
`
const FooterContactPhone = styled.div`
  padding: 0%.5rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 20px;
  color: #515469;
`

const FooterLinkItem = styled.div`

`
const FooterLink = styled(Link)`
  padding: 0%.5rem;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 24px;
  color: #515469;

  &:hover {
    color: #38366B;
  }
`