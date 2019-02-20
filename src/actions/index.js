import * as actionType from "./types";

export const changeFoodNum = (num, foodId, peopleNum) => {
  return {
    type: actionType.CHANGE_FOOD_NUM,
    num,
    foodId,
    peopleNum
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

export const increasePeopleNum = () => {
  return {
    type: actionType.INCREASE_PEOPLE_NUM
  };
};

export const decreasePeopleNum = () => {
  return {
    type: actionType.DECREASE_PEOPLE_NUM
  };
};

export const increaseFoodNum = id => {
  console.log(id);
  return {
    type: actionType.INCREASE_FOOD_NUM,
    id
  };
};

export const decreaseFoodNum = id => {
  console.log(id);
  return {
    type: actionType.DECREASE_FOOD_NUM,
    id
  };
};
