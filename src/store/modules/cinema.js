import Http from '../../api/http'
import {CINEMA_DETAIL_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        cinemaData: [],//热映电影
    },
    mutations: {
        setCinemaData(state,payload) {
            state.cinemaData = payload;
        },
    },
    actions: {
        // 获取热映电影,及电影列表ID
        async getCinemaData(context,payload) {
            const {data} = await Http.get(CINEMA_DETAIL_API);
            const newData = data.map(item=>{
                return {
                    id: item.id,
                    title: item.title,
                    location: item.location,//地址
                    lable: item.lable,//改签信息
                    discountText: item.discountText,//开卡特惠，首单2张最高立减2元
                    price: item.price,
                    distance: item.distance, //距离
                }
            });
            // console.log(newData);
            context.commit('setCinemaData',newData);//热映信息
        },
    }
}