import service from './index'

export default {
  getList({key,subject,model,testType}:{key:string,subject:number,model:string,testType?:string}) {
    return service.get(`jztk/query?key=${key}&subject=${subject}&model=${model}&testTypr=${testType}`)
  },
  getswiper(){
    return service.get('/scenics/banners')
  }
}