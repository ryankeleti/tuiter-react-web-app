import React, { useState } from "react";
import { BsChatLeft, BsRepeat, BsHeartFill, BsHeart, BsShare } from "react-icons/bs";

const TuitStats = ({ tuit }) => {
  const [likes, setLikes] = useState(tuit.likes);
  const [liked, setLiked] = useState(tuit.liked);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm">
          <BsChatLeft/>
          {tuit.replies}
        </div>
        <div className="col-sm">
          <BsRepeat/>
          {tuit.retuits}
        </div>
        <div className="col-sm">
          <button onClick={() => {
              if (liked) { setLikes(likes - 1); } else { setLikes(likes + 1); }
              setLiked(!liked);
          }}>
            { liked ?
            <BsHeartFill color="red"/>
            : <BsHeart/> }
          </button>
          {likes}
        </div>
        <div className="col-sm">
          <BsShare/>
        </div>
      </div>
    </li>
  );
};

export default TuitStats;
