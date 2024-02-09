const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getZakat = async function (req, res) {
  try {
    const data = await prisma.dataZakat.findMany();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.getZakatbyId = async function (req, res) {
  try {
    const { id } = req.params;
    const data = await prisma.dataZakat.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.createZakat = async function (req, res) {
  try {
    const { nama, gender, barang, uang, beras } = req.body;
    const data = await prisma.dataZakat.create({
      data: {
        nama: nama,
        gender: gender,
        barang: barang,
        uang: uang,
        beras: beras,
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.updateZakatbyId = async function (req, res) {
  try {
    const { id } = req.params;
    const { nama, gender, barang, uang, beras } = req.body;

    const data = await prisma.dataZakat.update({
      where: {
        id: Number(id),
      },
      data: {
        nama: nama,
        gender: gender,
        barang: barang,
        uang: uang,
        beras: beras,
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteZakatbyId = async function (req, res) {
  try {
    const { id } = req.params;
    const data = await prisma.dataZakat.delete({
      where: {
        id: Number(id),
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
