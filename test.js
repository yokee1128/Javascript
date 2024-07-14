// require == import

const create = require("csv-writer").createObjectCsvWriter;
const { fakerKO } = require("@faker-js/faker");

const namer = require("korean-name-generator");
const makePhone = () =>
  "010" +
  Array(8)
    .fill(0)
    .map(() => String(Math.floor(Math.random() * 9)))
    .join("");

const csvWriter = create({
  path: "C:/Users/admin/Desktop/2024_weekends_webDev_Yokee/CSV/test.csv",
  header: [
    { id: "id", title: "ID" },
    { id: "name", title: "NAME" },
    { id: "phone", title: "PHONE" },
    { id: "address", title: "ADDRESS" },
  ],
});

// dog -> dogs
// datum ->data
const makeDatum = (id) => {
  const gender = !!Math.floor(Math.random() * 1);
  return {
    id: id,
    name: namer.generate(gender),
    phone: makePhone(),
    address: fakerKO.location.city(),
  };
};

const newRecords = Array(1000)
  .fill(0)
  .map((v, i) => makeDatum(i));

csvWriter.writeRecords(newRecords);
