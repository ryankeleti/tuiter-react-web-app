import React, { useState } from "react";
import { BsChatLeft, BsRepeat, BsHeartFill, BsHeart, BsHandThumbsDown, BsShare } from "react-icons/bs";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const [likes, setLikes] = useState(tuit.likes);
  const [liked, setLiked] = useState(tuit.liked);
  const [dislikes, setDislikes] = useState(tuit.dislikes);
  const dispatch = useDispatch();
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
              //if (liked) { setLikes(likes - 1); } else { setLikes(likes + 1); }
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
              setLiked(!liked);
          }}>
            { liked ?
            <BsHeartFill color="red"/>
            : <BsHeart/> }
          </button>
          {likes}
        </div>
        <div className="col-sm">
          <button onClick={() => {
             dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1}));
             setLiked(false);
          }}>
           <BsHandThumbsDown/>
          </button>
            {dislikes}
        </div>
        <div className="col-sm">
          <BsShare/>
        </div>
      </div>
    </li>
  );
};

export default TuitStats;
