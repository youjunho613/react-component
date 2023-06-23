import { styled, css } from "styled-components";
import { BUTTON_WIDTH_MAP, BUTTON_HEIGHT_MAP, BUTTON_COLOR_MAP } from "./Button.constants";

const baseStyle = ({ theme }) => {
  return css`
    background-color: ${BUTTON_COLOR_MAP[theme]};
    border: none;
  `;
};

const outlineStyle = ({ theme }) => {
  return css`
    background-color: white;
    border: 3px solid ${BUTTON_COLOR_MAP[theme]};
  `;
};

export const StButton = styled.button`
  ${props => css`
    min-width: ${BUTTON_WIDTH_MAP[props.size]}px;
    height: ${BUTTON_HEIGHT_MAP[props.size]}px;
  `}

  ${props => {
    switch (props.outline) {
      case "outline":
        return outlineStyle(props);

      default:
        return baseStyle(props);
    }
  }}

  margin: 20px 20px;

  border-radius: 10px;

  color: #111111;
  text-transform: capitalize;

  cursor: pointer;
`;

export const StSpan = styled.span`
  &:after {
    content: ">";
    margin-left: 10px;
    font-size: 15px;
    font-weight: 400;
  }
`;
