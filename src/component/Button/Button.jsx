import { StButton, StSpan } from "./StButton";

// inner Text 빼기
const Button = () => {
  return (
    <div>
      <div>
        <StButton size={"large"} theme={"primary"} outline={"outline"}>
          <StSpan>large primary button</StSpan>
        </StButton>
        <StButton size={"medium"} theme={"primary"}>
          medium button
        </StButton>
        <StButton size={"small"} theme={"primary"}>
          small button
        </StButton>
      </div>
      <div>
        <StButton size={"large"} theme={"negative"} outline={"outline"}>
          large negative button
        </StButton>
        <StButton size={"medium"} theme={"negative"}>
          medium button
        </StButton>
        <StButton size={"small"} theme={"negative"}>
          small button
        </StButton>
      </div>
    </div>
  );
};

export default Button;
