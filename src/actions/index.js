export const selectOption = (option) => {
  console.log("You Have Selected", option);
  return {
    type: "OPTION_SELECTED",
    payload: option
  }
};