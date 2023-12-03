import styled from 'styled-components';
import { color } from './color';

// ----------------------------MAIN STYLES-------------------------------

export const Container = styled.div`
  font-family: Manrope;
  padding: 50px;
  margin: 0 auto;
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${color.blue};
  font-size: 40px;
`;

export const SubTitle = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;
export const Loading = styled.h2`
  display: flex;
  margin: 100px auto;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: ${color.blue};
  color: ${color.white};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-top: 30px;

  &:hover,
  &:focus {
    background-color: ${color.hover_blue};
  }
`;

export const CardButton = styled.button`
  display: flex;
  background-color: ${color.blue};
  color: ${color.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 12px 96px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  &:hover,
  &:focus {
    background-color: ${color.hover_blue};
  }
`;

export const ButtonMore = styled.button`
  display: block;
  margin: 80px auto 0px auto;
  background-color: transparent;
  color: ${color.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: ${color.hover_blue};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  justify-content: center;
  width: calc(100% - 120px);
  margin: 0 auto;
`;

export const CarContainer = styled.li`
  position: relative;

  width: 274px;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;

  object-fit: cover;

  margin-bottom: 14px;
`;

export const ImageSlider = styled.img`
  width: 600px;
  height: 350px;
  border-radius: 14px;

  object-fit: cover;

  margin-bottom: 14px;
`;

export const FirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  color: ${color.black};

  margin-bottom: 8px;
`;

export const Year = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const SecondBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 270px;
  height: 40px;
  font-size: 12px;
  font-weight: 400;

  color: ${color.black};

  margin-bottom: 28px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  color: ${color.grey};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  &:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    height: 16px;
    width: 1px;

    background-color: ${color.grey};
    margin-left: 6px;
  }
`;

// ----------------------------FORM STYLES-------------------------------

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 60px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  gap: 1px;
  border-radius: 14px;

  overflow: hidden;

  color: ${color.black};

  border: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid ${color.black};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 48px;
    background-color: ${color.grey};
  }
`;

export const Input = styled.input`
  font-family: Manrope;
  border: none;
  background-color: ${color.input_background};

  padding: 16px 24px;

  &::placeholder {
    color: ${color.black};
    font-size: 16px;
  }

  outline: none;
`;

export const Name = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;

  color: ${color.grey};

  margin-bottom: 8px;
`;

export const Select = styled.select`
  font-family: Manrope;
  border: none;

  padding: 14px 24px;

  &::placeholder {
    color: ${color.black};
    font-weight: 600;
    font-size: 18px;
  }

  outline: none;
  border-radius: 14px;
  color: ${color.black};
  background-color: ${color.input_background};

  border: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid ${color.black};
  }
`;
export const Icon = styled.button`
  position: absolute;
  background-color: transparent;
  right: 14px;
  top: 14px;
`;

// ----------------------------HEADER STYLES-------------------------------

export const HeaderContainer = styled.header`
  font-family: Manrope;
  background-color: ${color.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  margin: 0 10px;
  position: fixed;
  z-index: 10;
  width: 100%;
`;

export const Logo = styled.h1`
  color: ${color.black};
  margin: 0;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: ${color.blue};
    font-weight: bold;
    font-size: 24px;

    &:hover {
      text-decoration: underline;
      color: ${color.hover_blue};
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 60px;
`;

// ----------------------------MODAL STYLES-------------------------------

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.2);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.white};
  width: 541px;
  min-height: 752px;
  padding: 40px;
  border-radius: 24px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const TopicHeader = styled.h2`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const ConditionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionParag = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 7px 14px;
  background-color: ${color.border_grey};
  border-radius: 35px;

  & span {
    font-weight: 600;
  }
`;

export const Accent = styled.span`
  color: ${color.blue};
  font-size: inherit;
`;

export const Link = styled.a`
  font-family: Manrope;
  padding: 12px 50px;
  font-weight: 600;
  font-size: 14px;

  background-color: ${color.blue};
  color: ${color.white};
  text-decoration: none;
  border-radius: 12px;
  transition: background-color 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${color.hover_blue};
  }
`;
