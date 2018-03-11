import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClient } from '../actions';
import { Page } from '../components/clients';


export class ClientContainer extends Component {
  async componentDidMount() {
    this.props.fetchClient(this.props.match.params.id);
  };

  render() {
    return (
      <Page
        client={this.props.client} 
        error={this.props.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    client: state.client.data,
    error: state.client.error,
    fetching: state.client.fetching,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchClient: (id) => dispatch(fetchClient(id)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ClientContainer);
