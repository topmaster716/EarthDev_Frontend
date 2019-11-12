import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  aggrementLink: {
    color: "#2996cc",
    paddingLeft: "5px",
    paddingRight: "5px"
  }
});

class Link extends React.Component {
  render() {
    const { classes, text, onClick } = this.props;

    return (
      <span className={classes.aggrementLink} onClick={onClick}>
        {text}
      </span>
    );
  }
}

Link.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Link);
