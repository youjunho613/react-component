import { styled } from "styled-components";

export const OverflowDiv = styled.div`
  height: 200px;

  border: 2px solid #999999;
  /* overflow: hidden; */
  /* z-index: 3; */
`;

export const StSelect = styled.div`
  /* display: none; */

  /* z-index: 2; */

  width: 300px;

  margin-top: -2px;

  background-color: #ffffff;

  border: 2px solid #999999;
  border-radius: 10px;
`;

export const StMenuItem = styled.button`
  display: flex;
  align-items: center;

  width: 300px;
  height: 40px;

  /* z-index: 2; */

  padding: 20px;

  background-color: #ffffff;

  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  ${props => {
    if (props.role === "parent")
      return `
        display: flex;
        justify-content: space-between;
        
        border: 2px solid #999999;
        border-radius: 10px;

        &::after {
        content: "";

        position: absolute;

        border-bottom: 10px solid transparent;
        border-top: 10px solid black;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;

        transform: translateY(25%);
        }
        `;
    else if (props.role === "child")
      return `
        border:none;
        &:hover {
        background-color: #999999;
        }
        `;
  }};

  /* &:focus {
    border: 2px solid #000000;
  } */
`;
