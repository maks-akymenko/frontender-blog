import styled from 'styled-components'

export const ToggleHandler = styled.span``

export const Crater = styled.span``

export const ToggleInput = styled.input``

export const Star = styled.span`
  position: absolute;
  background-color: ${({ theme }) => theme.white};
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
`

export const Toggler = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.lightBlue};
  border-radius: 90px;
  transition: background-color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:before {
    content: 'DAY';
    position: absolute;
    left: -3rem;
    top: 1rem;
  }

  &:after {
    content: 'NIGHT';
    position: absolute;
    right: -4rem;
    top: 1rem;
    color: ${({ theme }) => theme.primaryYellow};
  }

  ${ToggleHandler} {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 3px;
    left: 3px;
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.primaryYellow};
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,.3);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform:  rotate(-45deg);
  }

  ${Crater} {
    position: absolute;
    background-color: ${({ theme }) => theme.darkYellow};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 100%;

    &:first-child {
      top: 18px;
      left: 10px;
      width: 4px;
      height: 4px;
    }

    &:nth-child(2) {
      top: 28px;
      left: 22px;
      width: 6px;
      height: 6px;
    }

    &:nth-child(3) {
      top: 10px;
      left: 25px;
      width: 8px;
      height: 8px;
    }
  }

  ${Star} {
    position: absolute;
    background-color: ${({ theme }) => theme.white};
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;

    &:first-child {
      top: 10px;
      left: 35px;
      z-index: 0;
      width: 30px;
      height: 3px;
    }

    &:nth-child(2) {
      top: 18px;
      left: 28px;
      z-index: 1;
      width: 30px;
      height: 3px;
    }

    &:nth-child(3) {
      top: 27px;
      left: 40px;
      z-index: 0;
      width: 30px;
      height: 3px;
    }

    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      opacity: 0;
      transition: all 0.3s 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    &:nth-child(4) {
      top: 16px;
      left: 11px;
      z-index: 0;
      width: 2px;
      height: 2px;
      transform: translate3d(3px,0,0);
    }

    &:nth-child(5) {
      top: 32px;
      left: 17px;
      z-index: 0;
      width: 3px;
      height: 3px;
      transform: translate3d(3px,0,0);
    }

    &:nth-child(6) {
      left: 28px;
      z-index: 0;
      width: 2px;
      height: 2px;
      transform: translate3d(3px,0,0);
    }
  }
`

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${ToggleInput} {
    &:checked + ${Toggler} {
      background-color: ${({ theme }) => theme.blue};

      &:before {
        color: ${({ theme }) => theme.primaryYellow};
      }

      &:after {
        color: ${({ theme }) => theme.white};
      }

      ${ToggleHandler} {
        background-color: ${({ theme }) => theme.primaryYellowHover};
        transform: translate3d(42px, 0, 0) rotate(0);

        ${Crater} { opacity: 1; }
      }

      ${Star} {
        &:first-child {
          width: 2px;
          height: 2px;
        }
      }

      ${Star} {
        &:nth-child(2){
          width: 4px;
          height: 4px;
          transform: translate3d(-5px, 0, 0);
        }
      }

      ${Star} {
        &:nth-child(3){
          width: 2px;
          height: 2px;
          transform: translate3d(-7px, 0, 0);
        }
      }

      ${Star} {
        &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          opacity: 1;
          transform: translate3d(0,0,0);
        }
      }

      ${Star} {
        &:nth-child(4){
          transition: all 0.3s 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }

      ${Star} {
        &:nth-child(5){
          transition: all 0.3s 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }

      ${Star} {
        &:nth-child(6){
          transition: all 0.3s 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }
  }
`
