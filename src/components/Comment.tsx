"use client";
import Reply from "./Reply";
import { ReplyProps } from "../libs/types";

interface CommentComponent {
  userImagePath: string;
  username: string;
  commentText: string;
  likeNum: number;
  replies: ReplyProps[];
}

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}:CommentComponent) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>
            <div className="d-flex align-items-center gap-1">
            {likeNum > 0 && <img src="/like.svg" width={20}></img>}
            {likeNum > 0 && <span style={{ color: "#B0B3B8" }}>{likeNum}</span>}
            </div>
          </div>
        </div>
        {replies.map((rep: any) => (
        <Reply
          key={rep.username}
          userImagePath={rep.userImagePath}
          username={rep.username}
          replyText={rep.replyText}
          likeNum={rep.likeNum}
        ></Reply>
      ))}
    </div>
  );
}
