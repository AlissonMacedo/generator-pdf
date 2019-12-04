import styled from "styled-components";

import Background from "../../assets/certificate.gif";

export const BackgroundImage = styled.div`
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
