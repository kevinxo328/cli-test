module.exports = {
  init({ option, param }) {
    console.log("init");
    if (option) {
      console.log(option);
    }
    if (param) {
      console.log(param);
    }
  },
};
