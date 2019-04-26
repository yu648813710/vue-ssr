/*
 * @Author: YuWen.tao 
 * @Date: 2019-04-23 15:55:26 
 * @Last Modified by: YuWen.tao
 * @Last Modified time: 2019-04-24 16:47:30
 */
import Vue from "vue"//引入
import Vuex from 'vuex'//引入
Vue.use(Vuex);//使用
const store = new Vuex.Store({
    //状态树
    state:{
        requestOver:true,
    },
    //从state上面派生下来的状态
    getter:{

    },
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation,全部是同步
    mutations:{
        //改变请求状态
        setRequestState(state,bo){
            state.requestOver=bo;
        }
    },
    //可以异步提交mutation的方法
    actions:{
        setRequestState(context,bo){
            context.commit("setRequestState",bo);
        }
    }
});
let stores=()=>store;//需要每次 import 得时候 return 出一个新的对象，不然会有错误提示
export default stores;//出口 