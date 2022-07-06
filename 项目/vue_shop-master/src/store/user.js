export default  {

    mutations: {
      getUser(state,value) {
        state.user=value;
      }
    },
  namespaced: true,
  state: {user:null},

};