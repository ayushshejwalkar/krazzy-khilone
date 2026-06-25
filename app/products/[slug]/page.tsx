import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
    include: {
      images: true,
    },
  });

  if (!product) {
    return (
      <div className="p-10 text-center">
        Product not found
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        
        <div className="relative h-[500px] overflow-hidden rounded-3xl bg-gray-100">
          {product.images[0] ? (
            <Image
              src={product.images[0].imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              No Image
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-black">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-bold text-orange-500">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-bold text-white">
            Add To Cart
          </button>
        </div>

      </div>
    </main>
  );
}