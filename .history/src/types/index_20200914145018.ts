export interface Author {
    loginname: string,
    avatar_url: string
  }
  
  export interface ResItem {
    author: Author
    author_id: string
    content: string
    id: string
    last_reply_at: string
    reply_count: number
    tab: string
    title: string
    top: boolean
    visit_count: number
    url:string
  }
  
  export interface Res {
    success: boolean,
    data: ResItem[]
  }