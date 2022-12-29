import React from "react";
import styled from "styled-components";

const Item = ({ handleClick, children }) => (
    <Option className="option" onClick={() => handleClick(children)}>
        {children}
    </Option>
);

export default Item;

const Option = styled.div`
  background-color: white;
  position: relative;

  &:hover {
    background-color: lightblue;
  }
`;
