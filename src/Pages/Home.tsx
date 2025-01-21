import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled(Wrapper)`
  background: url("/assets/library.jpg");
  background-size: cover;
  background-position: center center;

  div {
    background: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      width: 200px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Home() {
  return (
    <Wrapper2>
      <div>
        <Link to={"/01"}>01. we are</Link>
        <Link to={"/02"}>02. prologue</Link>
      </div>
    </Wrapper2>
  );
}
