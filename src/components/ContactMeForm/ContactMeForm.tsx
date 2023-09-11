import { ChangeEvent, FC, useState } from "react";
import styles from "./ContactMeForm.module.scss";
import cn from "clsx";
import {
  userEmailValidation,
  userMessageValidation,
  userNameValidation,
} from "../../helpers";
import { sendMessage } from "../../services/http";
import FetchLoader from "../FetchLoader/FetchLoader";
import Icon from "../Icon/Icon";
import { useSelector } from "react-redux";
import { getTgKeysSelector } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

const ContactMeForm: FC<Props> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSended, setIsMessageSended] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const isValidName = userNameValidation(userName);
  const isValidEmail = userEmailValidation(userEmail);
  const isValidMessage = userMessageValidation(userMessage);
  const isValidData =
    isValidName && isValidEmail && isValidMessage ? true : false;
  const tgKeys = useSelector(getTgKeysSelector);
  const { t } = useTranslation();

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.currentTarget.name) {
      case "name":
        return setUserName(event.currentTarget.value);
      case "email":
        return setUserEmail(event.currentTarget.value);
      case "message":
        return setUserMessage(event.currentTarget.value);
      default:
        console.log("error in switch");
    }
  };

  const handleResetForm = () => {
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  const handleReturnToWrite = () => {
    setIsMessageSended(false);
  };

  const handleSubmitForm = () => {
    const requestMessage = `Portfolio\n
    From: ${userName}\n
    Email: ${userEmail}\n
    Message: ${userMessage}`;

    if (isValidData) {
      setIsLoading(true);
      const reqData = {
        chat_id: tgKeys.chat_id,
        text: requestMessage,
      };

      try {
        setTimeout(async () => {
          const result = await sendMessage(reqData, tgKeys.token);
          if (result.ok) {
            setIsLoading(false);
            handleResetForm();
            setIsMessageSended(true);
          }
        }, 1000);
      } catch (error: any) {
        console.log(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <form action="#" className={cn(styles.form, className)}>
        {tgKeys === "isLoading" && (
          <div className={styles.loadingBox}>
            <p className={styles.loadingText}>
              {t("Private keys are loading")}
            </p>
            <Loader className={styles.mainLoader} />
          </div>
        )}
        {!isMessageSended && (
          <>
            <p className={styles.formDescription}>
              {t(
                "Please leave your data and messages and it will come to me in Telegram"
              )}
            </p>
            <label className={cn(styles.label, userName && styles.filled)}>
              <input
                className={styles.input}
                onChange={handleChangeInput}
                name="name"
                type="text"
                autoComplete="off"
                min={2}
                max={40}
              />
              <span className={styles.labelText}>{t("Name")}</span>
              <span
                className={cn(
                  styles.errorText,
                  userName.length && !isValidName && styles.show
                )}
              >
                {t("Incorrect name")}
              </span>
            </label>
            <label className={cn(styles.label, userEmail && styles.filled)}>
              <input
                className={styles.input}
                onChange={handleChangeInput}
                name="email"
                type="text"
                autoComplete="off"
              />
              <span className={styles.labelText}>{t("Email")}</span>
              <span
                className={cn(
                  styles.errorText,
                  userEmail.length && !isValidEmail && styles.show
                )}
              >
                {t("Incorrect email")}
              </span>
            </label>
            <label
              className={cn(
                styles.label,
                styles.textAreaLabel,
                userMessage && styles.filled
              )}
            >
              <textarea
                className={cn(styles.input, styles.textArea)}
                onChange={handleChangeInput}
                name="message"
              />
              <span className={styles.labelText}>{t("Message")}</span>
              <span
                className={cn(
                  styles.errorText,
                  userMessage.length && !isValidMessage && styles.show
                )}
              >
                {t("Incorrect message")}
              </span>
            </label>
            <button
              className={styles.formButton}
              onClick={handleSubmitForm}
              disabled={!isValidData}
              type="button"
            >
              {!isLoading ? (
                <p className={styles.buttonText}>{t("Send")}</p>
              ) : (
                <FetchLoader className={styles.loader} />
              )}
            </button>
            <span className={styles.errorFormText}>
              {t("All fields are required")}
            </span>
          </>
        )}
        {isMessageSended && (
          <div className={styles.sendedScreen}>
            <Icon className={styles.icon} name="check" />
            <p className={styles.screenText}>
              {t(
                "Your message was successfully delivered to me, I will contact you shortly, thank you"
              )}
            </p>

            <button
              className={styles.formButton}
              onClick={handleReturnToWrite}
              type="button"
            >
              <p className={styles.screenButtonText}>{t("Send one more")}</p>
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default ContactMeForm;
