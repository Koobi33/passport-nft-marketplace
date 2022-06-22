import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Card } from "antd";
const { Meta } = Card;

import styles from "./collector.module.scss";

import { getCollections } from "../../utils/fetches";

export default function CollectorListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  async function getData() {
    const res = await getCollections();
    if (res.status === 200) {
      setLoading(false);
    }
    if (res.status > 200) {
      setError(true);
    }
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Collections list</h1>
        <div className={styles.list}>
          {!isLoading && data.length === 0 && <p>No data yet</p>}
          {isLoading && <div>Loading...</div>}
          {error && <div>Error</div>}
          {data.map((el) => {
            return (
              <React.Fragment key={el.title}>
                <a href={`/collector/${el.itemUrl}`}>
                  <Card
                    className={styles.card}
                    hoverable
                    cover={<img alt={el.title} src={el.imgBase64} />}
                  >
                    <Meta title={el.title} description={el.description} />
                  </Card>
                </a>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
