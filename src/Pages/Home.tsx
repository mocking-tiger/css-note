import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Wrapper>
      <Link to={"/01"}>01. we are</Link>
    </Wrapper>
  );
}
