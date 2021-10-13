import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(mapStateToProps)(class Player extends Component {
  render() {
    const { categoryFromGlobalState, movieFromGlobalState } = this.props;
    return (
      <div>
        <h1>{ categoryFromGlobalState }</h1>
        <h2>{ movieFromGlobalState }</h2>
      </div>
    );
  }
})

function mapStateToProps(state) {
  return {
    categoryFromGlobalState: state.selectedCategory,
    movieFromGlobalState: state.selectedMovie,
  }
}
