import styled, { keyframes } from "styled-components";
import { Wrapper } from "../Pages/Home";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper2 = styled(Wrapper)`
  flex-direction: column;
  background: url("/assets/Ex7/bg.jpg");
  background-size: cover;
  background-position: center center;

  label {
    position: relative;

    input {
      width: 400px;
      margin-bottom: 50px;
      padding: 10px;

      &:focus {
        outline: none;
      }
    }

    .spinner {
      width: 25px;
      height: 25px;
      border: 5px solid lightgray;
      border-top: 5px solid gray;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
      margin-bottom: 20px;
      position: absolute;
      top: 7px;
      right: 5px;
    }
  }

  .name-box {
    width: 400px;

    h6 {
      width: 100%;
      margin-bottom: 50px;
      text-align: center;
      font-size: 24px;
    }

    ul {
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 16px;
      position: absolute;
    }
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function DelayedSearch() {
  const names = useMemo(
    () => [
      "강구팔",
      "이왕태",
      "제갈포",
      "전사독",
      "마영웅",
      "독고황",
      "탁계환",
      "장득춘",
      "선우모란",
      "왕휘영",
      "곽청호",
      "팽진양",
      "구상룡",
      "만후인",
      "여관천",
      "당후",
      "노독기",
      "황보동",
      "서문세극",
      "나야월",
      "막천경",
    ],
    []
  );
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string[]>(names);
  const [isLoading, setIsLoading] = useState(false);

  // 방법1. 이렇게 하니까 입력값이 바뀔 때마다 매번 setTimeOut이 실행되면서 좀 조잡해짐
  // const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);
  //   setTimeout(() => {
  //     setResult(names.filter((name) => name.includes(newValue)));
  //   }, 1000);
  // };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 방법2. useEffect 활용
  useEffect(() => {
    if (value !== "") {
      setIsLoading(true);
      const typeHandler = setTimeout(() => {
        setResult(names.filter((name) => name.includes(value)));
        setIsLoading(false);
      }, 1000);

      // value가 바뀜 => 컴포넌트 리렌더링 => return문으로 밀려있는 timeOut들 삭제
      return () => clearTimeout(typeHandler);
    } else {
      // 입력값 다 지웠을 땐 그냥 바로 초기값 리턴
      setResult(names);
      setIsLoading(false);
    }
  }, [value, names]);

  return (
    <Wrapper2>
      <label>
        <input
          value={value}
          onChange={handleInputValue}
          type="text"
          placeholder="자녀분의 이름을 찾아보세요!"
        />
        {isLoading && <div className="spinner" />}
      </label>
      <div className="name-box">
        <h6>2025 은솔유치원 신입생 합격자 명단</h6>
        <ul>
          {result.length === 0 ? (
            <li>검색결과가 없습니다.</li>
          ) : (
            result.map((name) => <li>{name}</li>)
          )}
        </ul>
      </div>
    </Wrapper2>
  );
}
