import { forwardRef } from "react";
import ReactTooltip from "react-tooltip";

import warningImg from "../../assets/warning.svg";

import styles from "./input.module.scss";

const Input = forwardRef(
  (
    {
      label,
      type,
      placeholder,
      value,
      error,
      maxLength,
      defaultValue,
      name,
      onChange,
      onBlur,
    },
    ref
  ) => (
    <div
      className={`${styles.field} ${
        styles[error ? "field-input-container-error" : ""]
      }`}
    >
      <label htmlFor={name} className={styles["field-label"]}>
        {label}
      </label>
      {type === "text" && (
        <>
          <input
            readOnly={!!value}
            maxLength={maxLength}
            type={type}
            name={name}
            id={name}
            className={`${styles["field-input"]} ${
              styles[error ? "field-input-error" : ""]
            }`}
            placeholder={placeholder}
            value={value}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
          />
        </>
      )}

      {type === "textarea" && (
        <textarea
          readOnly={!!value}
          maxLength={maxLength}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles["field-textarea"]} ${
            styles[error ? "field-textarea-error" : ""]
          }`}
        />
      )}

      {type === "datetime-local" && (
        <input
          readOnly={!!value}
          type={type}
          maxLength={maxLength}
          name={name}
          id={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles["field-input"]} ${
            styles[error ? "field-input-error" : ""]
          }`}
        />
      )}

      {error && (
        <>
          <img
            className={styles["field-error-icon"]}
            data-tip={error}
            src={warningImg}
            alt="Warning"
          />
          <ReactTooltip
            textColor="#fff"
            backgroundColor="#cb2722"
            type="error"
            effect="solid"
            place="top"
          />
        </>
      )}
    </div>
  )
);

export default Input;
