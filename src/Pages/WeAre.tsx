import styled, { keyframes } from "styled-components";
import { Wrapper } from "./Home";
import { useEffect, useState } from "react";

const slideUp = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0);
  }
`;

const Wrapper2 = styled(Wrapper)<{ $isLast: boolean }>`
  flex-direction: column;

  .div1 {
    width: 600px;

    .div2 {
      height: 56px;
      font-size: 48px;
      display: flex;
      gap: 10px;
      overflow: hidden;

      .div3 {
        display: flex;
        flex-direction: column;

        span {
          color: brown;
          animation: ${(props) => (props.$isLast ? "none" : slideUp)} 0.5s
            ease-in-out;
        }
      }
    }

    .div2-2 {
      font-size: 24px;
      overflow: hidden;

      .div4 {
        height: 29px;
        display: flex;
        flex-direction: column;

        span {
          animation: ${(props) => (props.$isLast ? "none" : slideUp)} 0.5s
            ease-in-out;
        }
      }
    }
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function WeAre() {
  const arr = ["Are", "Do", "Provide"];
  const arr2 = [
    "디지털 마케팅 에이전시 | 온 오프라인 비즈니스 시너지 강화",
    "데이터 중심 마케팅 | 마케팅 시스템 개선을 통한 효율성 극대화",
    "플러터 (Flutter) | 디지털 기술 기반의 신개념 서비스 플랫폼",
  ];
  const [Y, setY] = useState(0);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setY((prev) => {
          if (prev === -300) {
            setIsLast(true);
            return 0;
          }
          setIsLast(false);
          return prev - 100;
        });
      },
      isLast ? 0 : 2000
    );

    return () => clearInterval(interval);
  }, [isLast]);

  return (
    <Wrapper2 key={Y} $isLast={isLast}>
      <div className="div1">
        <div className="div2">
          <div>We</div>
          <div className="div3" style={{ transform: `translateY(${Y}%)` }}>
            <span>{arr[0]}</span>
            <span>{arr[1]}</span>
            <span>{arr[2]}</span>
            <span>{arr[0]}</span>
          </div>
        </div>
        <div className="div2-2">
          <div className="div4" style={{ transform: `translateY(${Y}%)` }}>
            <span>{arr2[0]}</span>
            <span>{arr2[1]}</span>
            <span>{arr2[2]}</span>
            <span>{arr2[0]}</span>
          </div>
        </div>
      </div>
    </Wrapper2>
  );
}
