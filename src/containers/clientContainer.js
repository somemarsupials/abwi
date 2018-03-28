import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClient } from '../actions/client';
import { ClientPage } from '../components/pages';


export class ClientContainer extends Component {
  async componentDidMount() {
    this.props.fetchClient(this.props.match.params.id);
  };

  render() {
    return (
      <ClientPage
        client={this.props.response.data} 
        error={this.props.response.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    fetching: state.client.fetching,
    response: state.client.response,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchClient: (id) => dispatch(fetchClient(id)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ClientContainer);
