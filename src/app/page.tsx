"use client";
import PostOwnner from "@/components/PostOwnner";
import { CommentComponent } from "@/libs/types";
import { comments } from "@/libs/comments";
import Comment from "@/components/Comment";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner 
        Name="Suphaloek Khueanphet 660610799"
        content="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        profilePic="/profileImages/picture.jpg"
        likes={100}></PostOwnner>


        {/* Comment Example */}
        
        {/* Reply Example */}

        {/* map-loop render Comment component here */}
        {comments.map((cmd: CommentComponent) => (
          <Comment
          key={cmd.username}
            userImagePath={cmd.userImagePath}
            username={cmd.username}
            commentText={cmd.commentText}
            likeNum={cmd.likeNum}
            replies={cmd.replies}
          ></Comment>
        ))}
      </div>
    </div>
  );
}
