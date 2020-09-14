export interface Author {
    loginname: string,
    avatar_url: string
  }
  
  export interface ResItem {
    url:string
    desc:string
    cover:string
    departCity:string
    departCode:string
    departDate:string
    destCity:string
  }
  
  export interface Res {
    success?: boolean,
    data: ResItem[]
  }