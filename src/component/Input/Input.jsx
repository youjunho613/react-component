import { useState, useRef } from "react";
import { StInput, StLabel } from "./StInput";
import { StButton } from "component/Button/StButton";

const Input = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onTitleHandler = event => {
    const value = event.target.value;
    setTitle(value);
  };

  const onPriceHandler = event => {
    const value = event.target.value;
    const reValue = value.toString().replaceAll(",", "");
    setPrice(reValue);
  };

  const titleRef = useRef();
  const priceRef = useRef();
  const onSubmitHandler = event => {
    event.preventDefault();

    titleRef.current.value === "" || priceRef.current.value === ""
      ? alert("이름과 가격 모두 입력해주세요.")
      : alert(`이름 : ${title}, 가격 : ${price}`);

    setPrice("");
    setTitle("");

    titleRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <StLabel htmlFor="title">이름</StLabel>
        <StInput type="text" value={title} ref={titleRef} onChange={onTitleHandler} />
        <StLabel htmlFor="price">가격</StLabel>
        <StInput
          type="text"
          value={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          ref={priceRef}
          onChange={onPriceHandler}
        />
        <StButton size={"small"} theme={"primary"}>
          저장
        </StButton>
      </form>
    </div>
  );
};

export default Input;
