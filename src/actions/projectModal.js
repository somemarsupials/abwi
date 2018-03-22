const CONTEXT = 'PROJECT_MODAL';

export const actions = {
  DESCRIPTION_CHANGE: `${CONTEXT}/DESCRIPTION_CHANGE`,
  CLIENT_CHANGE: `${CONTEXT}/CLIENT_CHANGE`,
  TOGGLE_MODAL: `${CONTEXT}/TOGGLE_CREATE_MODAL`,
};

export function toggleProjectModal() {
  return {
    type: actions.TOGGLE_MODAL,
  };
};

export function descriptionChange(string) {
  return {
    type: actions.DESCRIPTION_CHANGE,
    value: string && string.target.value,
  };
};

export function clientChange(string) {
  return {
    type: actions.CLIENT_CHANGE,
    value: string && string.target.value,
  };
};
