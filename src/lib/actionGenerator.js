export default function generateActions(context, actions) {
  let mapping = {};

  actions.forEach(function(action) {
    mapping[action] = `${context}/${action}`;
  });

  return mapping;
};

