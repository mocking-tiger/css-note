import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled(Wrapper)<{ $isLoaded?: boolean }>`
  background: ${(props) =>
    props.$isLoaded ? `url("/assets/library.jpg")` : "none"};
  // background-image: url("/assets/library.jpg");
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
    gap: 10px;

    a {
      width: 400px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingScreen = styled(Wrapper)`
  background-color: black;
  font-size: 24px;
  color: white;
  flex-direction: column;
  position: fixed;

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid lightgray;
    border-top: 5px solid gray;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 20px;
  }
`;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    // Image 객체를 활용한 방법
    const img = new Image();
    img.src = "/assets/library.jpg";
    img.onload = () => {
      setIsLoaded(true);
    };

    // setTimeOut을 활용한 방법
    // const timeout = setTimeout(() => {
    //   setIsLoaded(false);
    // }, 1000);

    // return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen>
          <div className="spinner" />
          Loading...
        </LoadingScreen>
      )}
      {/* {isLoaded && (
        <LoadingScreen>
          <div className="spinner" />
          Loading...
        </LoadingScreen>
      )} */}
      <Wrapper2 $isLoaded={isLoaded}>
        <div>
          <Link to={"/1"}>1. we are - 무한 슬라이더</Link>
          <Link to={"/2"}>2. prologue - 웹소설 연출</Link>
          <Link to={"/3"}>
            3. landing page clip - 영상이 재생되는 랜딩 페이지
          </Link>
          <Link to={"/4"}>4. email - 이메일 양식 자동완성</Link>
        </div>
      </Wrapper2>
    </>
  );
}
