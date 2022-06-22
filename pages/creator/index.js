import cn from "classnames";
import React, { useState } from "react";
import { useAccount } from "wagmi";

import ReactConfetti from "react-confetti";
import { Input, Checkbox, Slider, Button, message } from "antd";
const { TextArea } = Input;
import { Header } from "../../components/header";
import UploadBtn from "../../components/uploadBtn";

import styles from "./creator.module.scss";
import PassportIcon from "../../public/icons/passport-svgrepo-com.svg";

import {
  STEP_ONE,
  STEP_TWO,
  stamps,
  CUSTOM,
  DEFAULT,
  DEFAULT_CHECKS,
} from "../../utils/constants";
import { createEntity } from "../../utils/fetches";

export default function CreatorPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState("");
  const [currentStep, setCurrentStep] = useState(STEP_ONE);
  const [stampsList, setStampsList] = useState([]);
  const [wantCustomise, setWantCustomise] = useState(false);
  const [isCelebrate, setCelebrate] = useState(false);
  const { data } = useAccount();

  function handleStampsList(elem) {
    if (stampsList.some((el) => elem.id === el.id)) {
      setStampsList(stampsList.filter((el) => el.id !== elem.id));
    } else {
      setStampsList(stampsList.concat(elem));
    }
  }

  function validate() {
    if (!data) {
      message.error("Wallet should be connected!");
    }
    if (!imageUrl || !title || !description) {
      message.error("All inputs are required!");
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validate()) {
      return;
    } else {
      if (wantCustomise && currentStep !== STEP_TWO) {
        setCurrentStep(STEP_TWO);
      } else {
        const res = await createEntity({
          title,
          itemUrl: encodeURI(title),
          description,
          imgBase64: imageUrl,
          checkType: wantCustomise ? CUSTOM : DEFAULT,
          reqStamps: wantCustomise ? stampsList : DEFAULT_CHECKS,
        });

        if (res.status === 200) {
          setCelebrate(true);
        }
        if (res.status === 403) {
          message.error("Entity with such title already exist!");
        }
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {isCelebrate && <ReactConfetti />}
      <div className={styles.content}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>Create your mint</h1>
          <span style={{ display: "block", fontSize: "20px" }}>
            Step {currentStep} / {wantCustomise ? 2 : 1}
          </span>
        </div>
        <div className={styles.form_container}>
          {currentStep === STEP_ONE && (
            <>
              <div className={styles.form_part}>
                <UploadBtn imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </div>
              <div className={styles.form_part}>
                <label className={styles.input_container}>
                  Title:
                  <Input
                    value={title}
                    showCount
                    maxLength={20}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </label>
                <label className={styles.input_container}>
                  Description:
                  <TextArea
                    value={description}
                    showCount
                    maxLength={100}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </label>
                <div className={styles.submit_container}>
                  <div className={styles.submit_checkbox_container}>
                    <span className={styles.submit_checkbox_title}>
                      Customise GitCoin Passport Requirements
                    </span>
                    <Checkbox
                      checked={wantCustomise}
                      onChange={() => setWantCustomise(!wantCustomise)}
                    />
                  </div>
                  <Button
                    onClick={handleSubmit}
                    className={styles.button}
                    type="primary"
                  >
                    {wantCustomise ? "NEXT" : "SUBMIT"}
                  </Button>
                </div>
              </div>
            </>
          )}
          {currentStep === STEP_TWO && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.form_container_large}>
                <h3>GitCoin Passport requirements:</h3>
                <div className={styles.stamps_list}>
                  <div className={styles.stamps_list__half}>
                    {stamps.slice(0, stamps.length / 2).map((el) => (
                      <StampItem
                        key={el.id}
                        el={el}
                        stampsList={stampsList}
                        handleStampsList={handleStampsList}
                      />
                    ))}
                  </div>
                  <div className={styles.stamps_list__half}>
                    {stamps
                      .slice(stamps.length / 2, stamps.length)
                      .map((el) => (
                        <StampItem
                          key={el.id}
                          el={el}
                          stampsList={stampsList}
                          handleStampsList={handleStampsList}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <Button
                onClick={handleSubmit}
                className={styles.button}
                type="primary"
              >
                SUBMIT
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const StampItem = ({ el, handleStampsList, stampsList }) => {
  const [score, setScore] = useState(50);
  return (
    <div className={styles.stamp_item}>
      <Checkbox
        className={styles.stamp_checkbox}
        onChange={() => handleStampsList({ ...el, score, icon: null })}
      />
      <PassportIcon
        width={30}
        height={30}
        style={{ marginTop: "-30px", marginRight: "15px" }}
      />
      <div
        className={cn(styles.stamp_item_container, {
          [styles.stamp_grayscale]: !stampsList.some(
            (element) => el.id === element.id
          ),
        })}
      >
        <div className={styles.stamp_item_container_info}>
          {el.icon}
          <span className={styles.stamp_item_title}>{el.title}</span>
        </div>
        <Slider
          className={styles.slider}
          disabled={!stampsList.some((element) => el.id === element.id)}
          value={score}
          onChange={(val) => {
            setScore(val);
          }}
        />
      </div>
    </div>
  );
};
