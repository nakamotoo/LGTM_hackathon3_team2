import * as actionType from "./types";

export const helloworld = () => {
  return {
    type: actionType.HELLO_WORLD,
    payload: "hoge"
  };
};
