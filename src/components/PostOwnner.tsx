"use client";

interface PostComponent {
  content:string;
  profilePic:string;
  Name:string;
  likes:number
}
export default function PostOwnner(
  {content,
  profilePic,
  Name,
  likes,}:PostComponent) {
  return (<div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={profilePic}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">{Name}</span>
            </div>

            <span className="text-white">{content}</span>

            <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>{likes} คน</span>
            </div>
            <hr className="m-0 border" />
          </div>);
}
