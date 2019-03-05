import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../../images/pexels-photo-1552252.jpeg';

const StyledHero = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.8),
    rgba(40, 180, 133, 0.8)),
    url(${img});
  background-size: cover;
  background-position: top;
`

const HeroContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroGhost = styled.div`
  margin: 10px 0;
  padding: 30px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 10px 20px rgba(0, 0, 0, .6);

  ${props => props.fullWidth ? `
    width: 100%;
  ` : ''}

  ${props => props.textCenter ? `
    text-align: center;
  ` : ''}
`

const HeroText = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px 15px 0;
  @media (min-width: 360px) {
    width: 75%;
  }
`

const HeroHeading = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin-bottom: 40px;
`

const HeroHeadingMain = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: 400px;
  letter-spacing: 6px;
  margin-bottom: 70px;

  @media (min-width: 360px) {
    letter-spacing: 8px;
    font-size: 2.8rem;
  }
  @media (min-width: 480px) {
    letter-spacing: 11px;
    font-size: 6rem;
  }
`

const HeroHeadingSub = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 4px;

  @media (min-width: 480px) {
    letter-spacing: 6px;
    font-size: 2rem;
  }
`

const HeroLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 480px) {
    width: 75%
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-around;
  }
`

const HeroLink = styled(Link)`
  margin-top: 20px !important;
`

export {
  StyledHero,
  HeroContainer,
  HeroText,
  HeroHeading,
  HeroHeadingMain,
  HeroHeadingSub,
  HeroLinks,
  HeroLink,
  HeroGhost
}
