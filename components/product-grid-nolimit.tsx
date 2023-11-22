"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { XCircle } from 'lucide-react';
import { formatCurrencyString } from 'use-shopping-cart';
import { SanityProduct } from '@/config/inventory';
import { shimmer, toBase64 } from '@/lib/image';
import { Pagination } from '@nextui-org/react';

interface Props {
    products: SanityProduct[];
}

export function ProductGridNoLimit({ products }: Props) {
    const itemsPerPage = 9; // Set the desired number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    if (products.length === 0) {
        return (
            <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
                <div>
                    <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
                    <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
                        No products found
                    </h1>
                </div>
            </div>
        );
    }

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Ensure endIndex does not exceed the total number of products
    const actualEndIndex = Math.min(endIndex, products.length);

    const currentProducts = products.slice(startIndex, actualEndIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
                {currentProducts.map((product) => (
                    <Link key={product._id} href={`/products/${product.slug}`} className="group text-sm">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
                            {product.images && product.images.length > 0 && (
                                <Image
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(225, 280))}`}
                                    src={urlForImage(product.images[0]).url()}
                                    alt={product.name}
                                    width={225}
                                    height={280}
                                    className="h-full w-full object-cover object-center"
                                />
                            )}
                        </div>
                        <h3 className="mt-4 font-medium">{product.name}</h3>
                        <p className="mt-2 font-medium">
                            {product.currency && formatCurrencyString({ value: product.price, currency: product.currency })}
                        </p>
                    </Link>
                ))}
                <div className='w-full flex justify-center items-center mt-10 ml-4 sm:ml-20 md:ml-[300px] lg:ml-[250px]'>
                    <Pagination
                        total={Math.ceil(products.length / itemsPerPage)}
                        initialPage={currentPage}
                        onChange={handlePageChange}
                    />
                </div>
            </div>


        </>
    );
}
