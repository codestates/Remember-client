import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
type Props = {
  open: boolean;
};

const OpenNav = ({ open }:Props) => {
  return (
      <Ul open={open}>
        <li>게시물</li>
        <li>후원하기</li>
      </Ul>
  )
}

export default OpenNav;