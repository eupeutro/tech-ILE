/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Terreiro` (
    `id_terreiro` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_terreiro` VARCHAR(99) NOT NULL,
    `cnpj_terreiro` VARCHAR(14) NOT NULL,
    `Cep_terreiro` VARCHAR(8) NOT NULL,
    `Tipo_terreiro` VARCHAR(20) NULL,

    PRIMARY KEY (`id_terreiro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_usuario` VARCHAR(99) NOT NULL,
    `idade_usuario` DATETIME(3) NOT NULL,
    `email_usuario` VARCHAR(99) NOT NULL,
    `contato_usuario` VARCHAR(12) NOT NULL,
    `senha_usuario` VARCHAR(255) NOT NULL,
    `permicao_adm` BOOLEAN NULL,
    `id_terreiro_fk` INTEGER NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adm` (
    `id_adm` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_adm` VARCHAR(99) NOT NULL,
    `id_terreiro_fk` INTEGER NULL,

    PRIMARY KEY (`id_adm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_terreiro_fk_fkey` FOREIGN KEY (`id_terreiro_fk`) REFERENCES `Terreiro`(`id_terreiro`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adm` ADD CONSTRAINT `Adm_id_terreiro_fk_fkey` FOREIGN KEY (`id_terreiro_fk`) REFERENCES `Terreiro`(`id_terreiro`) ON DELETE SET NULL ON UPDATE CASCADE;
