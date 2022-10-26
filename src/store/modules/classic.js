import Http from '../../api/http'
import {CLASSIC_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        classicData: [], //热映电影
    },
    mutations: {
        setClassicData(state, payload) {
            state.classicData = payload;
        }
    },
    actions: {
        // 获取hot热映电影,及电影列表ID
        async getClassicData(context, payload) {
            const {data} = await Http.get(CLASSIC_API);
            const newData = data.map(item=>{
                return {
                    id: item.id,
                    title: item.title,//标题
                    english: item.english,//电影标题
                    imgUrl: item.img,
                    actors: item.actors,//电影题材
                    showInfo: item.showInfo,//播放时间信息
                    grade: item.grade,//评分
                }
            });
            // console.log(data);
            context.commit('setClassicData', newData); //未处理热映信息
        },
    }
}