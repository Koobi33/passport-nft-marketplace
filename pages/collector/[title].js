import cn from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./collector.module.scss";
import { useRouter } from "next/router";
import { useConnectPassport } from "../../utils/hooks/useConnectPassport";
import { useAccount } from "wagmi";

import { Header } from "../../components/header";
import { Button, message } from "antd";
import ReactConfetti from "react-confetti";

import PassportColorIcon from "../../public/icons/passport-colorfull.svg";
import { DEFAULT, DEFAULT_CHECKS, ICONS } from "../../utils/constants";
import { callParticipation, fetchCollections } from "../../utils/fetches";

export default function CollectorPage() {
  const [stamps, setStamps] = useState([]);
  const [userStamps, setUserStamps] = useState([]);
  const [isCelebrate, setCelebrate] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const { data: userData } = useAccount();
  const { passport } = useConnectPassport(userData && userData.address);

  useEffect(() => {
    if (passport && passport.stamps) {
      setUserStamps(passport.stamps.filter((el) => el.verified));
    }
  }, [passport]);

  useEffect(() => {
    if (data) {
      if (data.checkType === DEFAULT) {
        setStamps(DEFAULT_CHECKS);
      } else {
        setStamps(data.reqStamps);
      }
    }
  }, [data]);

  const requestedTitle = router.asPath.split("/")[2];
  async function getDataFunc() {
    if (requestedTitle !== "[title]") {
      const res = await fetchCollections(requestedTitle);
      if (res.status === 200) {
        const data = await res.json();
        setData(data);
      } else {
        setError(true);
      }
      setLoading(false);
    }
  }

  const getData = useCallback(getDataFunc, [requestedTitle]);

  async function handleSubmit() {
    if (
      stamps.every((el) =>
        userStamps.some((elem) => elem.provider === el.title && elem.verified)
      )
    ) {
      const res = await callParticipation({
        itemTitle: data.title,
        address: userData.address,
        passport,
      });
      if (res.status === 200) {
        setCelebrate(true);
      }
      if (res.status === 403) {
        message.error("All stamps are required!");
      }
    } else {
      message.error("All stamps are required!");
    }
  }
  useEffect(() => {
    getData();
  }, [requestedTitle, getData]);

  return (
    <div className={styles.wrapper}>
      <Header />
      {isCelebrate && <ReactConfetti />}

      <div className={styles.content}>
        {isLoading && <div>Loading...</div>}
        {!isLoading && error && <div>Error</div>}
        {!isLoading && data && (
          <div className={styles.data_container}>
            <div className={styles.data_part}>
              <h1 className={styles.title}>{data.title}</h1>
              <img
                className={styles.data_img}
                alt={data.title}
                src={data.imgBase64}
              />
              <p className={styles.data_description}>{data.description}</p>
            </div>
            <div className={styles.data_part}>
              <h2 className={styles.title}>Required stamps:</h2>
              {stamps.map((el) => (
                <StampItem
                  key={el.title}
                  el={el}
                  verified={userStamps.some(
                    (elem) => el.title === elem.provider
                  )}
                />
              ))}
              <Button
                onClick={handleSubmit}
                className={styles.button}
                type="primary"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const StampItem = ({ el, verified }) => {
  return (
    <div className={styles.stamp_item}>
      <div
        className={cn({
          [styles.stamp_grayscale]: !verified,
        })}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <PassportColorIcon
          width={50}
          height={50}
          style={{ marginRight: "15px" }}
        />
        <div className={styles.stamp_item_container}>
          <div className={styles.stamp_item_container_info}>
            {ICONS[el.title]()}
            <span className={styles.stamp_item_title}>{el.title}</span>
          </div>
        </div>
      </div>
      {!verified && (
        <a
          rel="noreferrer"
          target="_blank"
          className={styles.get_stamp_link}
          href={"https://passport.gitcoin.co/"}
        >
          get stamp
        </a>
      )}
    </div>
  );
};
