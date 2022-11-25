import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 105px;
  left: 75px;
  background-color: #daaaff;
  color: #FFF;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;

  small {
    font-size: 15px;
  }

  div {
    display: flex;
    align-items: center;

    span{
      font-size: 25px;
      font-weight: 400;
      margin-right: 5px;
    }
  }
  
  i{
    width: 150px;
    height: 77px;
    position: absolute;
    border-radius: 55px;

    &.circle1{
      left: 104px;
      top: -20px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
    }

    &.circle2 {
      background: linear-gradient(
        0deg, 
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
        );
      left: 81px;
      bottom: -50px;
      transform: rotate()(45deg);
    }
    
    &.circle3 {
      border: 1px solid rgba(255, 255, 255, 0.5);
      transform: rotate(-72deg);
      top: -54px;
      left: 47px;
    }
  }
`;