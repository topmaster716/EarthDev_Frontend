import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PrimaryView extends React.Component {
  constructor() {
    super();

    // Component default state
    this.state = {
      zoomedIn: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleZoom = this.handleZoom.bind(this);
  }

  // TODO: check if zoomIn, not just any zoom (i.e. zoomOut)
  handleZoom(e) {
    this.setState(state => ({
      zoomedIn: true
    }));
  }

  render() {
    const { router, dispatch } = this.props;

    const { zoomedIn } = this.state;

    var componentsToRender;
    if (zoomedIn == false) {
      componentsToRender = <h2>This is primary view WITHOUT zoomed Earth</h2>;
    } else {
      componentsToRender = <h2>This is primary WITH zoomed Earth</h2>;
    }

    return (
      <div 
        className="h100per w100per" 
        onWheel={e => this.handleZoom(e)}>
        {componentsToRender}
      </div>
    )
  }
}

PrimaryView.propTypes = {
  router: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};


// Add dispatch from redux, for dispatching redux actions 
const mapStateToProps = state => ({
  dispatch: state.dispatch,
});

// connect is redux function, to connect with react component
export default connect(mapStateToProps)(PrimaryView);
