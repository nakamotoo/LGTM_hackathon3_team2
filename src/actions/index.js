import * as actionType from "./types";

export const changeFoodNum = (num, foodId, pepleNum) => {
  return {
    type: actionType.CHANGE_FOOD_NUM,
    num,
    foodId,
    pepleNum
  };
};

export const selectNabe = (nabeId, peopleNum, nabeInfo, material) => {
  return {
    type: actionType.SELECT_NABE,
    nabeId,
    peopleNum,
    nabeInfo,
    material
  };
};
