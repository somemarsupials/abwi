import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClients } from '../actions';
import { Page } from '../components/allClients';


export class ClientsContainer extends Component {
  async componentDidMount() {
    this.props.fetchClients();
  };

  render() {
    return (
      <Page
        clients={this.props.clients} 
        error={this.props.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    clients: state.clients.data,
    error: state.clients.error,
    fetching: state.clients.fetching,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchClients: () => dispatch(fetchClients()),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ClientsContainer);

