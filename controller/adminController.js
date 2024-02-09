const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAdmin = async function (req, res) {
  try {
    const data = await prisma.akun.findMany();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.createAdmin = async function (req, res) {
  try {
    const { nama, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const data = await prisma.akun.create({
      data: {
        nama: nama,
        password: hash,
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
