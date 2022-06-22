import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import styles from "./header.module.scss";

import { Layout } from "antd";
import { FunnelPlotOutlined } from "@ant-design/icons";
const { Header: HeaderAntd } = Layout;

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderAntd
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor:
          router.asPath === "/creator"
            ? "rgba(87, 84, 236, 0.7)"
            : "rgba(28, 122, 28, 0.7)",
      }}
    >
      <div>
        <FunnelPlotOutlined
          style={{
            color: "white",
            fontSize: "25px",
            marginRight: "30px",
          }}
        />
        <a className={styles.navLink} href="/creator">
          For Creators
        </a>
        <a className={styles.navLink} href="/collector">
          For Collectors
        </a>
      </div>
      <div className={styles.offSide}>
        <ConnectButton className={styles.button} />
      </div>
    </HeaderAntd>
  );
};
