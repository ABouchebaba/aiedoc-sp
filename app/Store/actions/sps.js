import { SET_SPS, SPS_LOADING, ERROR_SPS } from "../../constants/ActionTypes";
import { getReadySps } from "../api";

export const getAvailableSps = () => (dispatch) => {
  dispatch({ type: SPS_LOADING });

  getReadySps()
    .then((res) => {
      console.log("Get sps - got results : " + res.data.length);
      return dispatch({
        type: SET_SPS,
        data: res.data,
      });
    })
    .catch((err) => {
      console.log("Get sps - got error : " + err.message);
      return dispatch({
        type: ERROR_SPS,
        data: err.message,
      });
    });
};
