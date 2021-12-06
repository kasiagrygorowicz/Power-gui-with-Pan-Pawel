import styled from "styled-components";

export const FooterStyled = styled.div `
  background-color: ${({ theme }) => theme.backgroundColorNavbar};
  width:100%;
  height: 43px;
  position:absolute;
  bottom: 0;
  text-align: center;
  color: #F5F0F0 !important;
  line-height: 28px;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`