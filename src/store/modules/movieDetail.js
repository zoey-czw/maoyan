import Http from '../../api/http'
import {HOTDetail_API,CINEMA_REGION_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        hotDetailData: [], //热映电影详情
        completeFlage: false,
        cinemaData: [],//影院数据
        showDays: [],//排片时间
    },
    mutations: {
        setHotDetailData(state, payload) {
            state.hotDetailData = payload;
        },
        setCompleteFlage(state, payload) {
            state.completeFlage = payload;
        },
        setCinemaData(state, payload) {
            state.cinemaData = payload;
        },
        setShowDays(state, payload) {
            // console.log(payload);
            state.showDays = payload;
        },
    },
    actions: {
        // 获取hot热映电影,及电影列表ID
        async getHotDetailData(context, payload) {
            const {data:{detailMovie}} = await Http.get(HOTDetail_API,{movieId:payload});
        
            let newData =  {
                id: detailMovie.id,
                img: detailMovie.img.replace('w.h','148.208'),
                name: detailMovie.nm,
                enm: detailMovie.enm, //英文名
                sc: detailMovie.sc,//评分  =0 则想看
                wish: detailMovie.wish, //想看人数
                cat: detailMovie.cat,//电影类型
                src: detailMovie.src,//地区
                dur: detailMovie.dur,//播放时长
                pubDesc: detailMovie.pubDesc,//上映时间和地点
            }

            // console.log(newData);
            context.commit('setHotDetailData', newData); //热映信息
        },
        //获取该电影的影院数据
        async getCinemaData(context, payload) {
            context.commit('setCompleteFlage', false); //完成判断标记
            const {data} = await Http.post(CINEMA_REGION_API,payload);
            //获取全部播放时间
            // console.log(data);
            if(data.showDays != null) {
                const {showDays:{dates}} = data;
                const newDate = dates.map(({date})=>date);
                context.commit('setShowDays',newDate);
            }
            //获取影院数据
            const {cinemas} = data;
            const newData = cinemas.map(item=>{
                return {
                    title: item.nm,
                    id: item.id,
                    price: item.sellPrice,
                    location: item.addr,
                    distance: item.distance,
                    lable: [{
                        allowRefund: item.tag.allowRefund? "退":'',
                        endorse: item.tag.endorse? "改签":'',
                        vipTag: item.tag.vipTag? "折扣卡":'',
                        hallType: item.tag.hallType[0]? "4DX厅":'',
                        hallType2: item.tag.hallType[1]? "60帧厅":'',
                    }],
                    discountText: item.promotion.cardPromotionTag,
                    showTimes: item.showTimes,
                }
            });
            // console.log(newData);
            context.commit('setCinemaData',newData);
            context.commit('setCompleteFlage', true); //完成标记
        }
    }
}