import { hashSync } from "bcryptjs";
import { User } from "../@types/usersTypes.js";

const Users: User[] = [
  {
    name: "Shoaib Tahir",
    email: "shoaibtahir97@gmail.com",
    password: hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@doe.com",
    password: hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    password: hashSync("123456"),
    isAdmin: false,
  },
];
