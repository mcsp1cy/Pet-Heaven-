import React from "react";

/**
 * Simple controlled form input that can be reused for Register.js, AdoptPetForm.js, ReleasePetForm.js
 * props:
 *  - label, name, value, onChange, type, required, placeholder, as (input|textarea), rows
 */
export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
  as = "input",
  rows = 4,
}) {
  return (
    <label className="form-row">
      <div className="form-label">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </div>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className="form-input"
        />
      ) : (
        <input
          className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}