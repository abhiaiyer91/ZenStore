ZenProcess = {
  combineProcedures(procedures){
    if (!_.isObject(procedures)) {
      throw new Meteor.Error('Procedures must be objects');
    }
    const proceduresObj = procedures;
    return function combination(state, action) {
      _.chain(procedures).keys().each((key) => {
        if (!_.isFunction(proceduresObj[key])) {
          throw new Meteor.Error('Procedure values must be functions');
        }
        return proceduresObj[key](state, action);
      }).value();
    };
  }
};
