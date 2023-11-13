import React from 'react'
import { Image } from "@nextui-org/react";
import LuffyImageSticked from '@/public/products/luffy.png'

const LuffyImgSticked = () => {
    return (
        <>
            <Image
                width={50}
                height={50}
                alt="NextUI hero Image with delay"
                src={LuffyImageSticked.src}
            />
        </>
    )
}

export default LuffyImgSticked