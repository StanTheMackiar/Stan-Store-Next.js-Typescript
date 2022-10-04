import React from "react";
import styles from "../../../../styles/Main.module.scss";

interface Props {
  children: JSX.Element
}

const Main = ({ children } : Props) => {
  return <main>{children}</main>;
};

export default Main;
