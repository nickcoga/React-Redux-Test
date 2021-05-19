import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./page";
import findSuggestions from "../../redux/actions/findSuggestions";

class IAppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });

    this.props.findSuggestions(text);
  }

  onChangeSelection(text) {}

  render() {
    const { text } = this.state;
    const { suggestions } = this.props;
    return (
      <Page
        text={text}
        suggestions={suggestions}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onChangeSelection}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     findSuggestions: (text) => dispatch(findSuggestions(text)),
//   };
// };

const mapDispachToProps = {
  findSuggestions,
};

export default connect(mapStateToProps, mapDispachToProps)(IAppBar);
