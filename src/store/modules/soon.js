import Http from '../../api/http'
import {SOON_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        soonData: [], //热映电影
        soonListData: [],
        completeFlage: false,
    },
    mutations: {
        setSoonData(state, payload) {
            state.soonData = payload.slice(0,11);
            state.soonListData = payload.slice(11);
        },
        setCompleteFlage(state, payload) {
            state.completeFlage = payload;
        }
    },
    actions: {
        // 获取hot热映电影,及电影列表ID
        async getSoontData(context, payload) {
            context.commit('setCompleteFlage', false); //完成判断标记
            const {data:{coming}} = await Http.get(SOON_API);
            const newData = coming.map(item=>{
                return {
                    id: item.id,
                    imgUrl: item.img,
                    name: item.nm, //电影名
                    grade: item.sc, //评分为0作为 评分和想看人数判断
                    wish: item.wish, //想看人数
                    star: item.star, //主演
                    showInfo: item.showInfo, //播放信息
                    globalReleased: item.globalReleased, //预售信息判断
                    version1: item.version.slice(1, 3).toUpperCase(), //2d max 影视信息
                    version2: item.version.slice(4).toUpperCase(), //2d max 影视信息
                    playDate: item.rt.slice(5).replace('-','月'),//播放时间
                    showInfo: item.showInfo, //上映时间
                    comingTitle: item.comingTitle, //上映时间标题
                }
            });
            const ArrData= [...new Set(newData.map(item=>{
                return item.comingTitle;
            }))];
            var sortData = [];
            ArrData.forEach(item=>{
                sortData.push({item});
            });

            console.log(sortData);
            // console.log(coming);
            context.commit('setSoonData', newData); //未处理热映信息
            context.commit('setCompleteFlage', true); //完成标记
        },
    }
}