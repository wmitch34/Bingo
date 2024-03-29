import axios from "axios";

let url_body;
if (import.meta.env.MODE === "development") {
  url_body = "http://localhost:5000";
} else if (import.meta.env.MODE === "production") {
  url_body = "http://162.243.173.148";
} else {
  console.log("Running in some other mode");
}

export async function submitBoard(board, user, setSubmitModal) {
  let reqBody = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      row.push(board[i][j].value);
    }
    reqBody.push(row);
  }

  await axios({
    method: "post",
    url: `${url_body}/api/verify`,
    data: { board: reqBody, user },
  })
    .then((response) => {
      let res = response.data.response;
      console.log(res);
      setSubmitModal(!res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getSentence() {
  try {
    const response = await axios.get(`${url_body}/api/getSentence`);

    const ret = response.data.data;
    return ret;
  } catch (err) {
    console.log(err);
  }
}
