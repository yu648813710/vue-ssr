/*
 * @Author: YuWen.tao 
 * @Date: 2019-04-19 16:36:20 
 * @Last Modified by: YuWen.tao
 * @Last Modified time: 2019-04-23 14:42:15
 */
import Mock from 'mockjs'
export default {
    mocks() {
        Mock.setup({
            timeout: '200-600'
        });//配置请求时间
        let randomData = Mock.Random;//模拟数据方法
        const data = {};
        data.banner = [];//首页banner
        data.indexNav = [];//首页导航
        data.minNav = [];//首页二级导航
        data.houseRecommend = [];//首页好盘推荐
        data.exPlanning = [];//首页独家策划
        data.minBanner = [];//首页横幅广告
        data.indexNews = {
            hot: [],//热门
            hotPaper: [],//热点
            guide: [],//指南
        };//首页新闻
        data.houseList = [];//楼盘推荐
        //banner与首页新闻与首页横幅广告处理
        for (let i = 0; i < 3; i++) {
            let objData = {};//banner
            let objDataB = {};//首页横幅广告
            let objDataC = {};//热门
            let objDataD = {};//热点
            let objDataE = {};//指南
            objData.img = randomData.image("390x178", "#f6f8fa", "#000", "广告" + i);
            data.banner.push(objData);//banner

            objDataB.img= randomData.image("375x80", "#75878a", "#ffffff", "广告" + i);
            data.minBanner.push(objDataB);//首页横幅广告

            objDataC.title=randomData.cword(10,15);
            objDataC.time=randomData.date("MM.dd");
            data.indexNews.hot.push(objDataC);//热门

            
            objDataD.title=randomData.cword(10,15);
            objDataD.time=randomData.date("MM.dd");
            data.indexNews.hotPaper.push(objDataD);//热点

            
            objDataE.title=randomData.cword(10,15);
            objDataE.time=randomData.date("MM.dd");
            data.indexNews.guide.push(objDataE);//指南
        };
        //导航与猜你喜欢处理
        for(let i = 0; i < 5; i++){
            let objData = {};//导航
            let objDataB = {};//猜你喜欢
            objData.img=randomData.image("80x80", "#44cef6");
            objData.text=randomData.cword(2,4);
            data.indexNav.push(objData);//导航

            objDataB.img=randomData.image("80x80", "#589802");
            objDataB.title=randomData.cword(5,10);
            objDataB.site=randomData.cword(10,15);
            objDataB.sign=randomData.cword(2,4);
            objDataB.price=randomData.increment(10000);
            data.houseList.push(objDataB);//猜你喜欢

            
        };
  
        //好盘推荐与独家策划与二级导航处理
        for(let i = 0; i < 4; i++){
            let objData = {};//好盘推荐
            let objDataB = {};//独家策划
            let objDataC = {};//二级导航
            objData.img=randomData.image("185x116", "#a1afc9");
            objData.site=randomData.city();
            objData.price=randomData.increment(10000);
            objData.text=randomData.cword(4,10);
            data.houseRecommend.push(objData);//好盘推荐

            objDataB.img=randomData.image("185x160", "#bbcdc5");
            objDataB.text=randomData.cword(4,10);
            objDataB.info=randomData.cword(4,5);
            data.exPlanning.push(objDataB);//独家策划

            
            objDataC.img=randomData.image("188x77", "#e9f1f6","#e9f1f6","1");
            objDataC.text=randomData.cword(3,4);
            objDataC.info=randomData.cword(4,10);
            data.minNav.push(objDataC);//二级导航
        };
        Mock.mock("house/index.json", "get", data);//请求配置,注意此处的请求方式是小写
    }
} 