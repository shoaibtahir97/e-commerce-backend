import bcrypt from "bcryptjs";
import { UserType } from "../@types/usersTypes.js";

const users: UserType[] = [
  {
    name: "Shoaib Tahir",
    email: "shoaibtahir97@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@doe.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export default users;
