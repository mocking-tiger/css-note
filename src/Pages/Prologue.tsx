import styled from "styled-components";
import { Wrapper } from "../Pages/Home";
import { useEffect, useState } from "react";

const Wrapper2 = styled(Wrapper)`
  gap: 30px;
  background-color: black;

  h2 {
    color: white;
    transition: opacity 0.5s ease-in-out;
  }

  h2:last-child {
    font-style: italic;
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function Prologue() {
  const str1 = "당신은 누구인가요?";
  const str2 = "그녀가 묻자, 남자는 조용히 미소 지으며 말했다.";
  const str3 = "나는, 당신이 만든 이야기의 마지막 조각입니다.";
  const [index, setIndex] = useState(0);
  const [p1, setP1] = useState<string[]>([]);
  const [p2, setP2] = useState<string[]>([]);
  const [isP1End, setIsP1End] = useState(false);
  const [isP2Start, setIsP2Start] = useState(false);

  useEffect(() => {
    const animation = setInterval(() => {
      setP1((prev) => {
        const newP1 = [...prev];
        if (!isP1End) {
          if (newP1.length < str1.length) {
            newP1.push(str1[index]);
            setIndex((prev) =>
              str1.length - 1 === prev ? str1.length - 1 : prev + 1
            );
          } else if (newP1.length === str1.length) {
            setIndex(0);
            setTimeout(() => {
              setIsP1End(true);
              setTimeout(() => {
                setIsP2Start(true);
              }, 2000);
            }, 1000);
          }
        }
        return newP1;
      });

      if (isP1End && isP2Start) {
        setP2((prev) => {
          const newP2 = [...prev];
          if (newP2.length < str3.length) {
            newP2.push(str3[index]);
            setIndex((prev) =>
              str3.length - 1 === prev ? str3.length - 1 : prev + 1
            );
          }
          return newP2;
        });
      }

      // console.log("인터벌 종료되는지 테스트");
    }, 100);

    if (str3.length === p2.length) {
      clearInterval(animation);
    }

    return () => clearInterval(animation);
  }, [index, isP1End, isP2Start, p2.length]);

  return (
    <Wrapper2>
      <h2>{`" ${p1.join("")} "`}</h2>
      <h2 style={{ opacity: isP1End ? 1 : 0 }}>{str2}</h2>
      <h2>{`" ${p2.join("")} "`}</h2>
    </Wrapper2>
  );
}
