import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


export default{
    namespaced:true,
    state(){
        return{
            friends: [
                {
                  "id": 0,
                  "name": "Vance Sykes"
                },
                {
                  "id": 1,
                  "name": "Lucy Murphy"
                },
                {
                  "id": 2,
                  "name": "Ashlee Frost"
                }
              ],
        }
    },
    mutations,
    actions,
    getters

}