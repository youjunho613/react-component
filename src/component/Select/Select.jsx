import { useState } from "react";
import * as St from "./StSelect";

const Select = () => {
  const [data, setData] = useState("NONE");

  const MenuItemHandler = event => {
    setData(event.target.value);
  };

  const openHandler = () => {};

  return (
    <St.OverflowDiv>
      <St.StBox>
        <St.StInput value={data} disabled onClick={openHandler}></St.StInput>
        <St.SpanIcon></St.SpanIcon>
      </St.StBox>
      <St.StBox>
        <St.StMenuItem position={0} value={"리액트"} onClick={MenuItemHandler}>
          리액트
        </St.StMenuItem>
        <St.StMenuItem position={1} value={"자바"} onClick={MenuItemHandler}>
          자바
        </St.StMenuItem>
        <St.StMenuItem position={2} value={"스프링"} onClick={MenuItemHandler}>
          스프링
        </St.StMenuItem>
        <St.StMenuItem position={3} value={"리액트네이티브"} onClick={MenuItemHandler}>
          리액트네이티브
        </St.StMenuItem>
      </St.StBox>
    </St.OverflowDiv>
  );
};

export default Select;
