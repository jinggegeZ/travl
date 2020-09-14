export interface Author {
    loginname: string,
    avatar_url: string
  }
  
  export interface ResItem {
    url:string
    desc:string
  }
  
  export interface Res {
    success?: boolean,
    list: ResItem[]
  }