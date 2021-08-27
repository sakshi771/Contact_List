const express = require("express");
const path = require("path");
const port = 9000;

const app = express();

var contactList = [
  {
    name: "sakshi",
    phone: "9098786577",
  },
  {
    name: "Neha",
    phone: "909878095",
  },
  {
    name: "rahul",
    phone: "909878000",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get("/", function (req, res) {
  return res.render("home", {
    title: "Contact List",
    contact_list: contactList,
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Let Us play with Ejs",
  });
});

app.get("/delete-contact/:phone", function (req, res) {
  let phone = req.params.phone;
  // console.log(req.params);
  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.post("/create-contact", function (req, res) {
  contactList.push(req.body);
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) console.log("error haped");
  else console.log("server running");
});
