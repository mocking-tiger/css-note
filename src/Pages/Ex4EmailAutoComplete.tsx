import styled, { keyframes } from "styled-components";
import { Wrapper } from "../Pages/Home";
import { KeyboardEvent, MouseEvent, useState } from "react";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper2 = styled(Wrapper)`
  .input-box {
    width: 400px;
    position: relative;

    h6 {
      padding-left: 5px;
      color: gray;
      font-size: 16px;
      position: absolute;
      top: 0;
      transition: all 0.2s ease-in-out;
    }

    input {
      width: 100%;
      padding-bottom: 10px;
      font-size: 20px;
      border: 0;
      border-bottom: 1px solid lightgray;

      &:focus {
        outline: none;
        border-bottom: 2px solid gray;
      }
    }

    &.focused h6 {
      font-size: 12px;
      top: -15px;
    }

    .ex-box {
      width: 100%;
      padding: 3px 0;
      border: 1px solid lightgray;
      position: absolute;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px,
        rgba(0, 0, 0, 0.06) 0px 5px 12px, rgba(0, 0, 0, 0.16) 0px 7px 20px;
      animation: ${slideDown} 0.3s ease-in-out;
    }
  }
`;

const Li = styled.li`
  padding: 10px;
  color: gray;

  &.selected {
    background-color: lightgray;
  }

  &:hover {
    background-color: lightgray;
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function EmailAutoComplete() {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const emailOptions = [
    `${value}@gmail.com`,
    `${value}@naver.com`,
    `${value}@hanmail.net`,
    `${value}@hotmail.com`,
    `${value}@kakao.com`,
  ];

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    if (target) setValue(target.innerText);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" && selectedIndex < emailOptions.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    } else if (e.key === "Enter") {
      setValue(emailOptions[selectedIndex]);
    }
  };

  return (
    <Wrapper2>
      <div className={`input-box ${isFocus ? "focused" : ""}`}>
        <h6>이름</h6>
        <input
          type="email"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => value || setIsFocus(false)}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {value && !value.includes("@") && (
          <div className="ex-box">
            <ul onClick={handleClick}>
              {emailOptions.map((option, index) => (
                <Li
                  key={index}
                  className={index === selectedIndex ? "selected" : ""}
                >
                  {option}
                </Li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Wrapper2>
  );
}
