import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Container = styled.div`
  display: flex;
  //flex-direction: column-reverse; -> Para Mobile
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 93.75rem;
`

export const Info = styled.div`
  z-index: 2;
  padding: 1.25rem;
  width: 50%;
  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: #ffffff;
    margin-top: 1.8rem;
    margin-bottom: 1.25rem;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1.875rem;
`

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 25rem;
    border-radius: 30px;
  }
`
