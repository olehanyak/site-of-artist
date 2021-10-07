
import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/main.mp4"

const Artist = () => {
  return (
    <ArtistContainer>
      <ArtistBg>
        <VideoBg src={Video} type='video/mp4' autoPlay loop muted playsInline></VideoBg>
      </ArtistBg>
      <ArtistContent>
        <ArtistItem>
          <ArtistH1>Натан Живописець</ArtistH1>
          <ArtistP>Ласкаво прошу!</ArtistP>
          <Button primary='true' big='true' round='true' to='/my-work'>Come on!</Button>
        </ArtistItem>
      </ArtistContent>
    </ArtistContainer>
  )
}

export default Artist

const ArtistContainer = styled.section`
  background: #CFFCFB;  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%,
    ),
    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
    ;
  }
`
const ArtistBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const ArtistContent = styled.div`
  z-index: 3;
  height: calc((100vh - 80px) / 2);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const ArtistItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  line-height: 1.1;
  font-weight: bold;
  color: #fff;
`
const ArtistH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  color: #fff;
`
const ArtistP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`