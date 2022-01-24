import styled from "styled-components";

interface Props {
  width?: string;
  size?: string;
  margin?: string;
  pointer?: string;
}

export const PrimaryButton = styled.button`
  width: ${(props: Props) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : ""};
  height: ${(props) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : ""};
  background-color: #00d9d0;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #0a1633;
  font-size: ${(props) => (props.size == "large" ? "17px" : "15px")};
  cursor: pointer;
  margin: ${(props) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const SecundaryButton = styled.button`
  width: ${(props: Props) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : ""};
  height: ${(props) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : ""};
  background-color: #0a1633;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: ${(props) => (props.size == "large" ? "17px" : "15px")};
  cursor: pointer;
  margin: ${(props) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;
