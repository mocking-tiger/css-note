import styled, { keyframes } from "styled-components";
import { Wrapper } from "../Pages/Home";

const slideLeft = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-183px);
  }
`;

const Wrapper2 = styled(Wrapper)`
  .container {
    width: 1020px;
    height: 100vh;
    background-color: #eee0cf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    overflow: hidden;

    .upper-band {
      width: 1200px;
      padding: 10px 0;
      color: white;
      background-color: tomato;
      position: absolute;
      top: 0;
      left: 0;
      animation: ${slideLeft} 5s linear infinite;

      span {
        margin-right: 20px;
      }
    }

    .upper-band.upper2 {
      top: inherit;
      bottom: 0;
    }

    h1 {
      width: fit-content;
      margin: 0 auto;
      color: tomato;
    }

    .text-box {
      width: 500px;
      height: auto;
      margin: 0 auto;
      padding: 20px 40px;
      background-color: white;
      border: 2px solid black;

      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
          list-style: circle;
          font-size: 24px;

          div {
            margin-top: 1cqh;
            display: flex;
            flex-direction: column;

            span {
              color: coral;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .container {
      width: 400px;

      .text-box {
        width: 100%;
        ul {
          li {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

// 스타일드 컴포넌트 영역 끝

export default function WarningSlider() {
  return (
    <Wrapper2>
      <div className="container">
        <div className="upper-band">
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
        </div>
        <h1>주의해 주세요</h1>
        <div className="text-box">
          <ul>
            <li>소음이 발생하니 반드시 입주민 동의를 받아주세요.</li>
            <li>
              문/몰딩은 실측을 미리 받아야 하고, 실측 후 더 자세한 견적을 알 수
              있어요.
            </li>
            <li>
              제작된 문/문틀을 옮기기 위해 엘리베이터가 필요하며, 없을 경우
              양중비가 추가돼요
              <div>
                <span>- 문 & 문틀 세트 : 3층 이상 130,000원 추가</span>
                <span>- 문만 : 3층 이상 70,000원 추가</span>
              </div>
            </li>
            <li>
              상단 몰딩은 벽면에 바로 부착되는 제품이라 벽면 상태에 따라 가능한
              몰딩 종류가 제한적이에요
            </li>
          </ul>
        </div>
        <div className="upper-band upper2">
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
          <span>WARNING</span>
        </div>
      </div>
    </Wrapper2>
  );
}
