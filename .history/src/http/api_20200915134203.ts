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
  }
}