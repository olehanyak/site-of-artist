import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImFilePicture } from "react-icons/im"

const MyWorks = ({ heading }) => {
  const data = useStaticQuery(graphql`
  query MyWorksQuery {
    allMyWorksJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `)

  const getImagesOfMyWorks = (data) => {
    const imagesArr = []
    data.allMyWorksJson.edges.forEach((item, index) => {
      imagesArr.push(
        <ProductCard key={index}>
          <ProductImg src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImFilePicture />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to="/artist"
              round={true}
              primary={true}
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return imagesArr
  }

  return (
    <MyWorksContainer>
      <MyWorksHeading>{heading}</MyWorksHeading>
      <MyWorksWrapper>{getImagesOfMyWorks(data)}</MyWorksWrapper>
    </MyWorksContainer>
  )
}

export default MyWorks

const MyWorksContainer = styled.section`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #E6E0CC;
  color: #fff;
`

const MyWorksHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #515469;
`

const MyWorksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0ms.2s ease;
`

const ProductImg = styled(Img)`
 height: 100%;
 max-width: 100%;
 position: absolute;
 border-radius: 10px;
 filter: brightness(70%);
 transition: 0ms.4s cubic-bezier(0.075, 0.82, 0.165, 1);

 &:hover {
   filter: brightness(100%);
 }
`

const ProductInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 0 2rem;

 @media screen and (max-width: 280px) {
   padding: 0 1rem;
 }
`

const TextWrap = styled.div`
 display: flex;
 align-items: center;
 position: absolute;
 top: 375px;
`

const ProductTitle = styled.div`
 font-weight: 400;
 font-size: 1rem;
 margin-left: 0.5rem;
`
