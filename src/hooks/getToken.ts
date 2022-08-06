const Token = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    return token;
  }
};

export default Token;
