-- CreateTable
CREATE TABLE "dataZakat" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "barang" TEXT NOT NULL,
    "uang" TEXT NOT NULL,
    "beras" TEXT NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dataZakat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);
