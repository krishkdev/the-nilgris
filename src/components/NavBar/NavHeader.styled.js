import styled from "styled-components";

export const StyledNavHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 15px 40px;
  }
`;
