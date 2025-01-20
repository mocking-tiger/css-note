import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper>
      <Link to={"/01"}>01. we are</Link>
      <Link to={"/02"}>02. prologue</Link>
    </Wrapper>
  );
}
