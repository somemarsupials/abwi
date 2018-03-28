import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClients } from '../actions/clients';
import { ClientsPage } from '../components/pages';


export class ClientsContainer extends Component {
  async componentDidMount() {
    this.props.fetchClients();
  };

  render() {
    return (
      <ClientsPage
        clients={this.props.response.data} 
        error={this.props.response.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    response: state.clients.response,
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

