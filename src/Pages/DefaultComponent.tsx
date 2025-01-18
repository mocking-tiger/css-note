import styled from "styled-components";
import { Wrapper } from "./Home";

const Wrapper2 = styled(Wrapper)``;

// 스타일드 컴포넌트 영역 끝

export default function DefaultComponent() {
  return (
    <Wrapper2>
      <h1>Default</h1>
    </Wrapper2>
  );
}
