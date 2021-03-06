import service from './index'

export default {
  //1.获取轮播
  getswiper(){
    return service.get('/scenics/banners')
  },
  //2.获取这扣机票
  getsale(){
    return service.get('/airs/sale')
  },
  //3.获取城市
  getcity(){
    return service.get('/posts/cities')
  },
  //4.获取posts
  getposts({city}:{city:string|number}){
    return service.get(`/posts?city=${city}`)
  },
  //5.获取推荐文章
  getrecommed(){
    return service.get(`/posts/recommend`)
  },
  upload({files}:{files:string}){
    return service.get(`upload?files=${files}`,{headers:{
      Authorization:'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTYwMDIyNDM5MCwiZXhwIjoxNjAyODE2MzkwfQ.7WFk0YjURLcoEadpVY1_5NC3NEUdOkUYP8ECmbxVhtI'
    }})
  }

}