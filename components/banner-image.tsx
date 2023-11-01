"use client"
import React from 'react';
import Banner from '../public/products/tenzity-banner.jpg'
import Image from 'next/image';

const BannerImage = () => (
    <div className="Container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="Container" style={{ width: '100%', height: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ position: 'absolute', margin: '0 auto' }}>

                <h1 className="text-4xl font-extrabold tracking-normal mb-4">
                    TENZITY STORE <br />
                </h1>

            </span>

            <Image
                className="Image"
                src={Banner}
                alt="Landscape photograph by Tobias Tullius"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', }}
            />
        </div>
    </div >
);

export default BannerImage;