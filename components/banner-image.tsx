"use client"
import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const BannerImage = () => (
    <div className="Container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

        <div className="Container" style={{ width: '90%', height: 'auto', }}>
            <img
                className="Image"
                src="https://img.freepik.com/vecteurs-libre/boutique-mode-illustration-vectorielle-plane-vetements-mode_1284-77655.jpg?w=2000"
                alt="Landscape photograph by Tobias Tullius"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', }}
            />
        </div>


    </div>
);

export default BannerImage;