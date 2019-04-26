/*
 * @Author: YuWen.tao 
 * @Date: 2019-04-24 17:42:53 
 * @Last Modified by: YuWen.tao
 * @Last Modified time: 2019-04-26 11:59:02
 */
import Mock from 'mockjs'
export default{
    mocks(){
        //时间
        Mock.setup({
            timeout:"200-600"
        });
        
        let randomData=Mock.Random;//模拟数据方法调用
        let listScreen={};//列表筛选数据
        let listData=[];//列表数据
        listScreen.area=[];//列表区域
        listScreen.metro=[];//列表地铁
        listScreen.price=[];//列表价格
        listScreen.type=[];//列表房屋类型
        listScreen.minBanner=[{
            img: randomData.image("375x80", "#75878a", "#ffffff", "广告")
        }]
        listScreen.more={
            feature:{
                title:"特色",
                center:[],
            },//特色
            floor:{
                title:"楼层",
                center:[],
            },//楼层
            loop:{
                title:"环线",
                center:[],
            },//环线
            house:{
                title:"合作楼盘",
                center:[],
            },//合作楼盘
        };//列表更多
        
        //列表数据
        for(let i=0;i<5;i++){
            let objData = {};//列表数据
            objData.img=randomData.image("80x80", "#589802");
            objData.title=randomData.cword(5,10);
            objData.site=randomData.cword(10,15);
            objData.sign=randomData.cword(2,4);
            objData.price=randomData.increment(10000);
            listData.push(objData);//列表数据
        }
        //筛选数据
        for(let i=0;i<9;i++){
            let areaData={};//区域数据
            let metroData={};//列表地铁
            let priceData={};//列表价格
            let typeData={};//列表房屋类型
            let [feature,floor,loop,house]=[{},{},{},{}];//更多
            areaData.id=randomData.integer(1,100);//区域id
            areaData.title=randomData.cword(2,4);//区域title
            listScreen.area.push(areaData);//区域数据

            metroData.id=randomData.integer(1,100);//地铁id
            metroData.title=randomData.cword(2,4);//地铁title
            listScreen.metro.push(metroData);//列表地铁

            priceData.id=randomData.integer(1,100);//价格id
            priceData.title=randomData.integer(8000,15000)+'元';//价格title
            listScreen.price.push(priceData);//列表价格

            typeData.id=randomData.integer(1,100);//户型id
            typeData.title=randomData.cword(2,4);//户型title
            listScreen.type.push(typeData);//合作户型
            
             feature.id=randomData.integer(1,100);//更多特色id
             feature.title=randomData.cword(2,4);//更多特色title
             listScreen.more.feature.center.push(feature);
             
             floor.id=randomData.integer(1,100);//更多楼层id
             floor.title=randomData.cword(2,4);//更多楼层title
             listScreen.more.floor.center.push(floor);
             
             loop.id=randomData.integer(1,100);//更多环路id
             loop.title=randomData.cword(2,4);//更多环路title
             listScreen.more.loop.center.push(loop);
             
             house.id=randomData.integer(1,100);//更多楼盘id
             house.title=randomData.cword(2,4);//更多楼盘title
             listScreen.more.house.center.push(house);
        }

        Mock.mock("house/listScreen","get",listScreen);//请求筛选数据配置
        Mock.mock("house/list","post",listData);//请求列表数据配置
    }
}