import { styled } from "styled-components";

export const OverflowDiv = styled.div`
  padding: 20px;

  border: 2px solid #999999;
  /* overflow: hidden; */
  /* z-index: 3; */
`;

export const StInput = styled.input`
  /* display: none; */

  /* z-index: 2; */

  width: 300px;
  height: 40px;

  padding: 0;

  border: 2px solid #999999;
  border-radius: 10px;

  text-indent: 20px;

  /* &::after {
    content: "";
  } */
`;
// position: relative;

export const SpanIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 5%;

  border-bottom: 10px solid transparent;
  border-top: 10px solid black;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  transform: translateY(-25%);
`;

export const StBox = styled.div`
  width: 300px;
  position: relative;

  /* z-index: 2; */
`;

export const StMenuItem = styled.button`
  display: flex;
  align-items: center;

  width: 304px;
  height: 40px;

  position: absolute;
  top: ${props => props.position * 40}px;

  /* z-index: 3; */

  padding: 20px;

  background-color: #ffffff;

  border-top: none;
  border-bottom: none;
  border-left: 2px solid #999999;
  border-right: 2px solid #999999;

  &:first-child {
    border-top: 2px solid #999999;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom: 2px solid #999999;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:hover {
    background-color: #999999;
  }
`;

/* &:focus {
    border: 2px solid #000000;
  } */
