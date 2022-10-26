import Http from '../../api/http'
import {CINEMA_ARRANGEMENT_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        cinemaArrangementData: [], //电影院排片
        cinemaData: {},//电影院数据
        moviesData: [],//电影banner数据
        completeFlage: false,
        dateListData: [],//日期列表信息
    },
    mutations: {
        setCinemaArrangementData(state, payload) {
            //取出排片日期信息
            state.cinemaArrangementData = payload;
        },
        setCinemaData(state, payload) {
            state.cinemaData = payload;
        },
        setMoviesData(state, payload) {
            state.moviesData = payload;
        },
        setCompleteFlage(state, payload) {
            state.completeFlage = payload;
        },
        setDateListData(state, payload) {
            state.dateListData = payload;
        },
    },
    actions: {
        //获取该电影的影院数据
        async getCinemaArrangementData(context, payload) {
            context.commit('setCompleteFlage', false); //完成判断标记
            const {data} = await Http.get(CINEMA_ARRANGEMENT_API,payload);
            //头部标题影院数据
            const newCinemaData = {
                name: data.cinemaData.nm,//电影院名字
                addr: data.cinemaData.addr,
            }
            //banner电影数据
            // console.log( data.showData);
            if(data.showData==null) return;
            const newMoviesData = data.showData.movies.map(item=>{
                return {
                    id: item.id,//电影id，可用来匹配排片信息
                    name: item.nm,
                    img: item.img.replace('w.h','148.208'),
                    sc: item.sc,//评分
                    wish: item.wish,
                    desc: item.desc,//放映 时长|演员 等信息
                    shows: item.shows,//电影排片信息
                }
            });
            //拍片
            const newData = newMoviesData.map(({shows})=>shows);
            //日期list 信息
            const dateListData = newData.map(item=>{
                return item.map(item2=>item2.dateShow)
            });
            //每天天场次信息
            const cinemaArrangementData = newData.map(item=>{
                return item.map(item2=>item2.plist)
            });

            // console.log(cinemaArrangementData);
            context.commit('setCinemaArrangementData',cinemaArrangementData);
            context.commit('setCinemaData',newCinemaData);
            context.commit('setMoviesData',newMoviesData);
            context.commit('setDateListData',dateListData); //完成标记
            context.commit('setCompleteFlage', true); //完成标记
        }
    }
}