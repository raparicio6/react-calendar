import { forwardRef } from "react";
import ReactTooltip from "react-tooltip";

import warningImg from "../../assets/warning.svg";

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
    <div className={`field ${error ? "field-input-container-error" : ""}`}>
      <label htmlFor={name} className="field-label">
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
            className={`field-input ${error ? "field-input-error" : ""}`}
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
          className={`field-textarea ${error ? "field-textarea-error" : ""}`}
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
          className={`field-input ${error ? "field-input-error" : ""}`}
        />
      )}

      {error && (
        <>
          <img
            className="field-error-icon"
            data-tip={error}
            src={warningImg}
            alt="Warning"
          />
          <ReactTooltip
            textColor="#fff"
            backgroundColor="#f95e5a"
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
