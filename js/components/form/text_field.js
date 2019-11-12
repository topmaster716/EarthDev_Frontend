import React from "react";
import MaterialTextField from "@material-ui/core/TextField";

class TextField extends React.Component {
  render() {
    const {
      id,
      type,
      multiline,
      required,
      label,
      value,
      onChange,
      error,
      helperText,
      disabled
    } = this.props;

    return (
      <MaterialTextField
        margin="normal"
        fullWidth
        id={id}
        autoComplete={label}
        type={type}
        multiline={multiline}
        rowsMax="5"
        required={required}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
      />
    );
  }
}

export default TextField;
