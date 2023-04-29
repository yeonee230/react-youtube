import React from "react";
import {useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/videos/watch/${video.id}`,{state:{video}})}>
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="w-full rounded-xl"
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">🔆 {title}</p>
        <p className="text-sm opacity-80"> {channelTitle}</p>
        <p className="text-sm opacity-80"> {formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
