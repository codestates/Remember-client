import React, { useState } from 'react';
import styled from "styled-components";
import OpenNav from "./OpenNav";

const StyledHamburger = styled.div<{ open: boolean }>`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 20;
  display: none;
  @media {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'white' : 'black'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



function Hamburger() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
    <StyledHamburger
    open={open}
    onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
    <OpenNav open={open}/>
    </div>
  )
}

export default Hamburger