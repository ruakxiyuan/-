export default  {

    mutations: {
      reload(state,value) {
        state.isRouterAlive=false;
      
            state.isRouterAlive=true;
  
      }
    },
  namespaced: true,
  state: {isRouterAlive: true},

};