import { useState } from "react";
import { OverflowDiv, StMenuItem, StInput, StBox, SpanIcon } from "./StSelect";

const Select = () => {
  const [data, setData] = useState("NONE");

  const onClickHandler = event => {
    setData(event.target.value);
  };

  return (
    <OverflowDiv>
      <StBox>
        <StInput value={data} disabled></StInput>
        <SpanIcon></SpanIcon>
      </StBox>
      <StBox>
        <StMenuItem position={0} value={"리액트"} onClick={onClickHandler}>
          리액트
        </StMenuItem>
        <StMenuItem position={1} value={"자바"} onClick={onClickHandler}>
          자바
        </StMenuItem>
        <StMenuItem position={2} value={"스프링"} onClick={onClickHandler}>
          스프링
        </StMenuItem>
        <StMenuItem position={3} value={"리액트네이티브"} onClick={onClickHandler}>
          리액트네이티브
        </StMenuItem>
      </StBox>
    </OverflowDiv>
  );
};

export default Select;
