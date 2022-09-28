import React, { FC } from "react";
import Router from "next/router";
import styles from "./PageHeader.module.css";
import Title from "../Title/Title";
import { LeftOutlined } from "@ant-design/icons";

interface PageHeaderProps {
  children: string;
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
  return (
    <div className={styles.container} onClick={() => Router.back()}>
      <LeftOutlined />
      <Title title="h2">{children}</Title>
    </div>
  );
};

export default PageHeader;
