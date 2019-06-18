import React from 'react';

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...rest
}) => {
  const inputProps = { ...input, ...rest };
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...inputProps} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};
