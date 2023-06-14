import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";
import {BsXLg} from "react-icons/bs";

const TuitItem = ({
  tuit
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };
  return (
    <li className="list-group-item">
     <BsXLg className="float-end"
            onClick={() => deleteTuitHandler(tuit._id)} />
      <div className="row">
        <div className="col-10">
          <div>
            {tuit.userName} . {tuit.time}
          </div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.title}</div>
        </div>
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`/images/${tuit.image}`}
          />
        </div>
      </div>
      <TuitStats tuit={tuit}/>
    </li>
  );
};
export default TuitItem;
