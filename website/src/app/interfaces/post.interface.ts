export interface PostInterface  {
  title:{rendered:string},
  content:{rendered:string},
  tags:Array<string>,
  fimg_url:string,
  excerpt:{rendered:string},
  id?:string
}
