import styled from "styled-components";

export const Container = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 16px;
  padding: 24px 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  display: inline-block;
  position: relative;

  &:checked::after {
    content: "";
    position: absolute;
    left: 7px;
    top: 2px;
    width: 6px;
    height: 12px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const InputsContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
