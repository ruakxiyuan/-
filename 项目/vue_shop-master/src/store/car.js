import axios from 'axios'
export default {
  namespaced: true,
  mutations: {
    getCarData(state,values) {
      axios({
        method: 'GET',
        url:'http://localhost:8080/api/getCar',
        params: {
          id:localStorage.getItem("id")
        }

      }).then((res) => {
        state.total=0
        state.CarData.length=0;
        for(let i=0; i<res.data.length; i++){
           axios({
          method: 'GET',
          url: 'http://localhost:8080/api/getCarData',
          params: {
            id:res.data[i].goods_id
          },
        }).then((response) => {
          state.CarData.push(response.data)
      
        })
        }
       
      })
    },
    getTotal(state,values){
      axios({
        method: 'GET',
        url:'http://localhost:8080/api/getCar',
        params: {
          id:localStorage.getItem("id")
        }

      }).then((res) => {
        state.total=0
        for(let i=0; i<res.data.length; i++){
           axios({
          method: 'GET',
          url: 'http://localhost:8080/api/getCarData',
          params: {
            id:res.data[i].goods_id
          },
        }).then((response) => {
          
          state.total+=(response.data[0].goods_discount*res.data[i].cart_count)
        })
        }
       
      })
    },
    getQuantity(state){
      if(localStorage.getItem("id")!=null){
        axios({
     method: "get",
     url: "http://localhost:8080/api/getCar",
     params: {
       id: localStorage.getItem("id"),
     },
   }).then((res) => {
    state.quantity=0
     res.data.forEach(e => {
      state.quantity+= e.cart_count
     });
   
   });
      }
      
   },
  },

  state: { CarData: [],total:0,quantity:0},

};