// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath:string, 
    username:string, 
    replyText:string, 
    likeNum:number
}
export type { ReplyProps };
interface CommentComponent {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[] | any;
  }
export type { CommentComponent };
interface CommentComponent {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[] |any;
  }