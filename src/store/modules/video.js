import Http from '../../api/http'
import {VIDEO_API} from '../../api/url'

export default {
    namespaced: true,
    state: {
        videoData: [], //热映电影
    },
    mutations: {
        setVideoData(state, payload) {
            state.videoData = payload.slice(0,11);
        },
    },
    actions: {
        // 获取hot热映电影,及电影列表ID
        async getVideoData(context, payload) {
            const {data:{data:{feeds}}} = await Http.get(VIDEO_API);
            const newData = feeds.map(item=>{
                return {
                    title: item.title,
                    videoUrl: item.video.url,//视频链接
                    id: item.id,
                    coverImg: item.video.imgUrl,//视频封面
                    viewCount: item.video.viewCount,//播放次数
                    upCount: item.upCount,//点赞次数
                    dur: item.video.dur,//评论次数
                    author: item.product.name,
                    authorImg: item.product.img,
                }
            });
            console.log(newData);
            context.commit('setVideoData', newData); //未处理热映信息
        },
    }
}