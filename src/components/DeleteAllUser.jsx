import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import styled from "styled-components";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAllUser = () => {
    dispatch(deleteUsers());
  }
  return (
   <button onClick={()=>{clearAllUser()}}>
      Delete All Users
   </button>
  )
}

export default DeleteAllUser