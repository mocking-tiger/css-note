import styled, { keyframes } from "styled-components";
import { Wrapper } from "../Pages/Home";
import { useEffect, useState } from "react";

const Wrapper2 = styled(Wrapper)`
  img {
    width: 400px;
    height: auto;
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

  &.loading-complete {
    opacity: 0;
    transition: opacity 3s ease-in-out;

    div,
    h1,
    p {
      display: none;
    }
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function DynamicLoading() {
  // Math.floor(Math.random()*(최대값-최소값+1)+최소값);
  const [totalTasks] = useState(
    Math.floor(Math.random() * (100 - 50 + 1) + 50)
  );
  const [loading, setLoading] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [killLoadingScreen, setKillLoadingScreen] = useState(false);

  useEffect(() => {
    // 단순히 로딩 진행율만 올리는 방법
    // const progress = setInterval(() => {
    //   setLoading((prev) => {
    //     console.log(prev);
    //     if (prev >= 100) {
    //       clearInterval(progress);
    //       return 100;
    //     }
    //     return prev + Math.floor(Math.random() * (10 - 1 + 1) + 1);
    //   });
    // }, Math.floor(Math.random() * (3000 - 1000 + 1) + 1000));

    // return () => clearInterval(progress);

    const tasks = Array.from({ length: totalTasks }, (_, index) => index + 1);
    const timeouts: NodeJS.Timeout[] = [];

    tasks.forEach(() => {
      const timeoutId = setTimeout(() => {
        setCompletedTasks((prev) => {
          // setState는 비동기적으로 동작하므로 setState안에서 setState를 하려면 변수 선언을 통해 동기적으로 참조되는 값을 만들어야 함
          console.log("메모리 누수 검사1");
          const updatedTasks = prev + 1;
          setLoading((updatedTasks / totalTasks) * 100);
          return updatedTasks;
        });
      }, Math.floor(Math.random() * (5000 - 3000 + 1) + 3000));

      timeouts.push(timeoutId);
    });

    console.log("메모리 누수 검사2");
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [totalTasks]);

  useEffect(() => {
    if (loading >= 100) {
      setTimeout(() => {
        setKillLoadingScreen(true);
      }, 3000);
    }
  }, [loading]);

  return (
    <Wrapper2>
      {killLoadingScreen || (
        <LoadingScreen
          className={`${loading >= 100 ? "loading-complete" : ""}`}
        >
          <div className="spinner" />
          <h1>Loading... {Math.min(loading, 100).toFixed(0)}%</h1>
          <p>
            {totalTasks}개의 작업 중 {completedTasks}개 작업 완료
          </p>
        </LoadingScreen>
      )}
      <img
        src="/assets/Ex5/modern-illust.jpg"
        alt="모던한 디자인의 일러스트"
        title="오늘도 당신에게~ 큰 기쁨 큰 사랑 큰 행운과 함께 발길 닿는 곳마다 幸福이 가득 하길 소망합니다 사랑합니다"
      />
    </Wrapper2>
  );
}
