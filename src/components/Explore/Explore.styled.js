import styled from "styled-components";

export const StyledExplore = styled.div`
  position: relative;
  background: ${({ theme }) => theme.primaryLight};
  padding: 50px;
  z-index: 10000;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primaryDark};
  font-weight: 600;
`;
