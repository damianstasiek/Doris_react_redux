import React from 'react';
import styled from 'styled-components'
import { device } from '../../styles/Device'

const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 20px;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
  
  div {
    width: 24px;
    height: 2px;
    position: relative;
    background: gray;
    transition: transform .5s ease;
  ::before, ::after {
      width: 24px;
      height: 2px;
      position: absolute;
      content: '';
      display: block;
      background: gray;
      transition: transform .5s ease;
    }
  ::before {
      left: 0;
      top: -6px;
    }
  ::after {
      left: 0;
      top: 6px;
    }
  }
  &:hover div {
    transform: ${props => props.isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
  &::before {
      display: ${props => props.isMenuOpen ? "none" : "block"};
    }
  &::after {
      transform: ${props => props.isMenuOpen ? "rotate(-90deg) translateX(7px)" : "rotate(0) translateX(0px)"};
    }
  }
`;

const Hamburger = (props) => {
  return (
    < StyledHamburger {...props}>
      <div />
    </StyledHamburger >
  )
}


export default Hamburger