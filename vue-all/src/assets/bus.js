import Vue from 'vue'

var bus = new Vue({
  name: 'bus',
  data: {
    store:''

  }
})

bus.$on('sendInsured', result => {
  bus.store = result;
  console.log(bus);
});

bus.$on('sendBaoxian', result =>{
  bus.insuredArr = result;
})
bus.$on('checkPid',result => {
  if(!result.pId.length>0){
      console.log(result);
      result.$store.commit('ROUT_PATH','/');
  }
})



bus.$on('insPricePage',result =>{
  result.insuranceArr = bus.store;
  console.log(result);
});
export default bus;
