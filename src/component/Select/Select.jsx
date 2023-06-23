import { useState } from "react";
import { StTitle } from "component/Common/commonStComponents";
import { OverflowDiv, StMenuItem } from "./StSelect";

const Select = () => {
  const [data, setData] = useState("");
  // const onChangeHandler = event => {
  //   setData(event.target.value);
  // };

  return (
    <OverflowDiv>
      <StTitle>select</StTitle>
      <StMenuItem
        role={"parent"}
        value={data}
        // onChange={onChangeHandler}
      ></StMenuItem>
      <StMenuItem
        role={"child"}
        value={"리액트"}
        onClick={event => {
          setData(event.target.value);
        }}
      >
        리액트
      </StMenuItem>
      <StMenuItem role={"child"} value={"자바"}>
        자바
      </StMenuItem>
      <StMenuItem role={"child"} value={"스프링"}>
        스프링
      </StMenuItem>
      <StMenuItem role={"child"} value={"리액트네이티브"}>
        리액트네이티브
      </StMenuItem>
    </OverflowDiv>
  );
};

export default Select;
