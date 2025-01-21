import styled from "styled-components";
import { Wrapper } from "../Pages/Home";
import { useEffect, useState } from "react";

const Wrapper2 = styled(Wrapper)`
  /* background-color: black; */
  position: relative;

  .intro {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 9999;

    img {
      width: 240px;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
  }

  header {
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  main {
    /* margin-top: 325px; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text-box {
      color: white;
      font-size: 36px;
      position: absolute;
      top: 40%;
      left: 15%;
      z-index: 1;

      h2:first-child {
        margin-bottom: 10px;
      }
    }
  }

  footer {
    width: 100%;
    height: 10%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function LandingClip() {
  const [fadeOutSwitch, setFadeOutSwitch] = useState(false);
  const [isCoverOn, setIsCoverOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFadeOutSwitch(true);
    }, 0);

    setTimeout(() => {
      setFadeOutSwitch(false);
      setTimeout(() => {
        setIsCoverOn(false);
      }, 1500);
    }, 2000);
  }, []);

  return (
    <Wrapper2>
      <div style={{ display: isCoverOn ? "flex" : "none" }} className="intro">
        <img
          style={{ opacity: fadeOutSwitch ? 1 : 0 }}
          src="/assets/Ex3/beautyTech.png"
          alt="fadeout-icon"
        />
      </div>
      <header>헤더입니다</header>
      <main>
        <video src="/assets/Ex3/mement.mp4" autoPlay loop />
        <div className="text-box">
          <h2>Tech Company</h2>
          <h2>running Beauty business</h2>
        </div>
      </main>
      <footer>푸터입니다</footer>
    </Wrapper2>
  );
}
