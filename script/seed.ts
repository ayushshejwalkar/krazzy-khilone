import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "One Piece Sanji Figure",
      slug: "one-piece-sanji-figure",
      description: "Premium anime collectible",
      price: 1499,
      stock: 10,
      featured: true,
    },
  });

  console.log("Product added");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });