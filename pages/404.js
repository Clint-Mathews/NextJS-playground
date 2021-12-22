import styled from "styled-components";
const Title = styled.h2`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const pageNotfound = () => {
  return (
    <h1 style={{ color: "red" }}>
      Page not found
      <Title>Styled part</Title>
    </h1>
  );
};
export default pageNotfound;
