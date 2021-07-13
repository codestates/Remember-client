import React, { useState } from 'react';
import styled from "styled-components";
import OpenNav from "./OpenNav";

const StyledHamburger = styled.div<{ open: boolean }>`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
  position: fixed;
  top: 30px;

  z-index: 20;
  display: none;
  @media {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.9rem;
    height: 0.2rem;
    background-color: ${({ open }) => open ? 'black' : 'black'};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



function Hamburger({auth}:any) {
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
    <OpenNav auth={auth} open={open} setOpen={setOpen} />
    </div>
  )
}

export default Hamburger