window.addEventListener("load", function () {
  let req = new XMLHttpRequest();
  req.open("GET", "https://reqres.in/api/users?page=2");
  req.send();
  req.onload = () => {
    let responseData = JSON.parse(req.response);
    let users = responseData.data;
    users.forEach((user) => {
      console.log(user);
    });
  };
});
