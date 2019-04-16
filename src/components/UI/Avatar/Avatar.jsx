import React from "react";
import DefaultAvatar from "./avatar.png";
import { avatar, img} from "./Avatar.module.scss";

function Avatar(props){
  const { url: src = DefaultAvatar } = props;

  return (
    <div className={avatar}>
      <img className={img} src={src} alt="User avatar" />
    </div>
  )
}

export default Avatar;
