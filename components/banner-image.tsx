"use client"
import React from 'react';
import Banner from '../public/products/tenzity-banner.jpg'
import Image from 'next/image';

const BannerImage = () => (
    <div className="Container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="Container" style={{ width: '98%', height: 'auto', }}>
            <Image
                className="Image"
                src={Banner}
                alt="Landscape photograph by Tobias Tullius"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', }}
            />

        </div>


    </div>
);

export default BannerImage;