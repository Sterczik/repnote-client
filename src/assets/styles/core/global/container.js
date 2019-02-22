import styled from 'styled-components';

const Container = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  ${props => props.centerVertically ? `
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  ` : ''}

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export {
  Container
}