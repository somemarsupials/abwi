import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClientModal } from '../components/modals';
import { toggleClientModal, nameChange } from '../actions/clientModal';
import { createClient } from '../actions/clientModal';

class ClientModalContainer extends Component {
  render() {
    return (
      <ClientModal {...this.props} />
    );
  };
};

function mapStateToProps(state) {
  return state.clientModal;
};

function mapDispatchToState(dispatch) {
  return {
    toggle: () => dispatch(toggleClientModal()),
    nameChange: string => dispatch(nameChange(string)),
    onSubmit: (params) => dispatch(createClient(params)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ClientModalContainer)
