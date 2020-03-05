import {
  HOME_INFO,
  HOME_SEARCH_COUNT,
  HOME_RECOMEND,
  HOME_PIN
} from "@constants/home";

const INITIAL_STATE={
  homeInfo:{},
  searchCount:0,
  pin:[],
  recomend:[]
}

export default function Home(state=INITIAL_STATE,action) {
  switch(action.type){
    case HOME_INFO:{
      return {
        ...state,
        homeInfo:action.payload
      }
    }
    case HOME_SEARCH_COUNT:{
      return {
        ...state,
        searchCount:action.payload.count
      }
    }
    case HOME_PIN:{
      //每个分成三组
      const pin=[];
      action.payload.forEach((item,index)=>{
        const groupIndex=parseInt(index/3);
        if(!pin[groupIndex]){
          pin[groupIndex]=[];
        }
        pin[groupIndex].push(item);
      })

      return {...state,pin}
    }

    case HOME_RECOMEND:{
      return {
        ...state,
        recommend:state.recomend.concat(action.payload.rcmdItemList)
      }
    }

    default:
      return state;
  }
}
