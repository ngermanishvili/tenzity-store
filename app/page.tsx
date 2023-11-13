import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import Image from "next/image";
import LuffyImgSticked from "@/public/products/luffy.png";
import LuffyImgSticked2 from "@/public/products/luffy-rotate.png";


interface Props {
  searchParams: {
    date?: string
    price?: string
    color?: string
    category?: string
    size?: string
    search?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const { date = "desc", price, color, category, size, search } = searchParams

  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colorFilter = color ? ` && "${color}" in colors` : ""
  const categoryFilter = category ? ` && "${category}" in categories` : ""
  const sizeFilter = size ? ` && "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`

  const products = await client.fetch<SanityProduct[]>(
    groq`${filter} ${order} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
  )

  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">TENZITY STORE</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">არსებული პროდუქცია გაიყიდება მხოლოდ საცალოდ, ჩვენი მიზანია მომხმარებელს შევუქმნათ კომფორტის და ელეგანტურობის მაღალი განცდა</p>
      </div>
      <div className="mt-10 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] absolute right-[7px] sm:right-[60px] top-14 sm:top-20">
        <Image src={LuffyImgSticked} alt="Luffy" />
      </div>
      <div className="mt-10 w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] absolute left-[7px] sm:left-[60px] top-14 sm:top-20">
        <Image src={LuffyImgSticked2} alt="Luffy" />
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters />
              </div>
              {/* Product grid */}
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}