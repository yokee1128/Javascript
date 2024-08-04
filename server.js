const express = require("express");
const app = express();
const mysql = require("mysql2/promise");

app.listen(3000);

const getSutdents = async (address) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1w2e3r4",
    database: "attendance",
  });

  try {
    const [results] = await connection.query(
      `select * from students where address like "${address}%"`
    );
    await connection.end();
    return results;
  } catch (err) {
    console.log(err);
  }
};

app.get("/", function (req, res) {
  res.send("<h1>who</h1>");
});

app.get("/icream", function (req, res) {
  res.send("아이스크림");
});

app.get("/rap", function (req, res) {
  res.send("rap 은?");
});

app.get("/movie", (req, res) => {
  const movie = [
    { name: "인사이드아웃2", running: 90 },
    { name: "파일럿", running: 90 },
    { name: "사랑의 하츄핑", running: 90 },
  ];
  res.json(movie);
});

app.get("/students", async (req, res) => {
  res.json(await getSutdents());
});

app.get("/profile", async (req, res) => {
  const data = await getSutdents();
  res.send(`
    <section style="display: flex; flex-direction: column; gap: 10px">
    ${data
      .map(({ name, phone, address }) => {
        return `
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
            padding: 20px;
          "
        >
          <div
            style="
              width: 50px;
              height: 50px;
              border-radius: 9999px;
              border: 1px solid gray;
            "
          >
            <img
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 9999px;
            "
            src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg"
            alt=""
          />
        </div>
        <div>${name}</div>
        <div style="font-size: 12px">${phone}</div>
        <div style="font-size: 12px">${address}</div>
      </div>`;
      })
      .join("")}
    </section>
    `);
});

app.get("/api/students", async (req, res) => {
  res.json(await getSutdents());
});

app.get("/cars/:id", (req, res) => {
  res.send(`Cars ID: ${req.params.id}`);
});

// app.get("/api/students/:id", async (req, res) => {
//   const data = await getSutdents(req.params.id);
//   res.json(data[0]);
// });

app.get("/api/students/search", async (req, res) => {
  //address 부천?
  const data = await getSutdents(req.query.address);
  // const searchResult = res.json(data);
  res.send(data);
});
// ${req.query.address}에 사는 사람들 ${searchResult}
