import styled from "styled-components";

export const StyledLargeHero = styled.div`
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(17, 59, 27);
  mix-blend-mode: overlay;
`;

export const StyledText = styled.div`
  position: relative;
  z-index: 10;
  h2 {
    font-size: 5em;
    font-weight: 800;
    color: #fff;
    line-height: 1.2px;
    text-transform: uppercase;
  }
  h3 {
    font-size: 4em;
    font-weight: 700;
    color: #fff;
    line-height: 1em;
    text-transform: uppercase;
  }
  p {
    font-size: 1.1em;
    color: #fff;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
  }
  a {
    display: inline-block;
    font-size: 1em;
    background: #fff;
    padding: 10px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    color: #111;
    letter-spacing: 2px;
    transition: 0.2s;
    opacity: 0;
    transform: translateY(-200px);
  }
  a:hover {
    letter-spacing: 6px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 2.5em;
    }
    h3 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
  }
`;
export const StyledSocial = styled.ul`
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 0px;
  }

  li {
    list-style: none;
  }
  a {
    display: inline-block;
    margin-right: 20px;
    filter: invert(1);
    transform: scale(0.5);
    transition: 0.5s;
  }
  a:hover {
    transform: scale(0.5) translateY(-15px);
  }
`;
