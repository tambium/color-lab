import styled from '@emotion/styled';

export const Badge = styled.div`
  background-color: #fce2de;
  border-radius: 20px;
  color: #a52654;
  font-size: 13px;
  font-weight: 500;
  padding: 2px 8px;
`;

export const Button = styled.button`
  appearance: none;
  background: transparent;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex: 0 1 auto;
  margin: 0;
  outline: 0;
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  transition: background-color 240ms, box-shadow 240ms;
  vertical-align: middle;
  word-break: normal;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.12) 0px 3px 9px, rgba(60, 66, 87, 0.12) 0px 2px 5px;
  }
  &:active {
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(58, 151, 212, 0.34) 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px;
  }
`;

export const PropertyInput = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  border-radius: 4px;
  display: inline-flex;
  min-height: 26px;
  margin-left: 2px;
  margin-right: 2px;

  & button {
    user-select: none;
    margin: 0;
    padding: 0;
    color: inherit;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
  }

  & input {
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    ouline: 0;
    &:active,
    &:focus {
      outline: 0;
    }
  }
`;
