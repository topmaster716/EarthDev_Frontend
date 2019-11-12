import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
    padding: "15px",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
      border: "1px solid #dadce0",
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px"
    },
    [theme.breakpoints.up("md")]: {
      width: "40%"
    }
  }
});

class Form extends React.Component {
  render() {
    const { classes, children } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="on"
        onKeyPress={this.props.onKeyPress}
      >
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Form);
