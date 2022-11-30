import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  width: 210px;
  height: 210px;
  border-radius: 18px;
  background-color: #fff;
  box-shadow: 0px 17.5px 28px rgba(0, 0, 0, 0.1);
  padding: 33.6px 24.5px;

  >div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong{
      font-weight: 500;
    }
  }
`;

function generateSpan () {
  const amountBars = [...Array(12).keys()];
    let styleSpan: any = [];

    amountBars.forEach(item => {
      styleSpan.push(`
        span:nth-child($(item)){
          background-color: #5236ff;
          display: block;
          height: ${Math.ceil(Math.random() * item)}px;
          width: 3.5px;
          border-radius: 5px;
        };
      `);
    });
    return styleSpan.join("");
}

export const Chart = styled.div`
  margin-top: 28px;
  
  div {
    background-color: #EFF3FE;
    height: 91px;
    width: 2.1px;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;

   ${generateSpan()}
  }
`;