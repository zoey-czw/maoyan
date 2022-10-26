import Http from '../../api/http'
import {
    HOT_API,
    HOT_BTM_API
} from '../../api/url'

export default {
    namespaced: true,
    state: {
        hotData: [], //热映电影
        originData: [], //未处理信息
        movieIdsData: [],
        completeFlage: false, //完成判断标志
        scrollHeight: '', //滚轮高度
        appOpenIsShow: true,
    },
    mutations: {
        setHotData(state, payload) {
            //热映电影排序---只显示前面11位
            payload.sort((a, b) => {
                return b.grade - a.grade; //降序
            });
            state.hotData = payload.slice(0,11);
        },
        // 设置未处理信息
        setOriginData(state, payload) {
            //先展示12个
            // const data = payload.slice(11);
            state.originData = payload;
        },
        setMovieIdsData(state, payload) {
            state.movieIdsData = payload;
        },
        setCompleteFlage(state, payload) {
            state.completeFlage = payload;
        },
        // 设置滚轮高度
        setScrollHeight(state, payload) {
            state.scrollHeight = payload.scrollHeight;
            // console.log(payload.maxScrollH);
            //判断是否关闭 打开app组件
            if (payload.scrollHeight < -200) {
                state.appOpenIsShow = false;
            } else {
                state.appOpenIsShow = true;
            }
            if(payload.scrollHeight<payload.maxScrollH) {
                // console.log(1);
                //加载更多
                // state.originData.push(state.originData);
            }
        }
    },
    actions: {
        // 获取hot热映电影,及电影列表ID
        async getHotData(context, payload) {
            context.commit('setCompleteFlage', false); //完成判断标记
            const {data:{movieList}} = await Http.get(HOT_API);
            // console.log(data);
            // 热映电影信息
            const newData = movieList.map(item => {
                return {
                    id: item.id,
                    imgUrl: item.img.replace('w.h', '170.230'),
                    name: item.nm, //电影名
                    grade: item.sc, //评分为0作为 评分和想看人数判断
                    wish: item.wish, //想看人数
                    star: item.star, //主演
                    showInfo: item.showInfo, //播放信息
                    globalReleased: item.globalReleased, //预售信息判断
                    version1: item.version.slice(1, 3).toUpperCase(), //2d max 影视信息
                    version2: item.version.slice(4).toUpperCase(), //2d max 影视信息
                }
            });

            // console.log(newData);
            context.commit('setHotData', newData); //热映信息
            context.commit('setOriginData', newData); //未处理热映信息
            context.commit('setCompleteFlage', true); //完成标记
        },
    }
}