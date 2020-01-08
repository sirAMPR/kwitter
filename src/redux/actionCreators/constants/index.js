export const domain = "https://kwitter-api.herokuapp.com";
//export const domain = "http://localhost:3000";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    // status code is 200-399
    return res.json();
  }
  // status code response of 400-599
  return res.json().then(result => {
    throw result;
  });
};
