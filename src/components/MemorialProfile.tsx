'use client';
import Image from "next/image";
import molduraFoto from "../lib/images/moldura_foto.svg";
import { SVGAttributes } from "lucide-react";

export default function MemorialProfile() {
    return (
        <div className="flex flex-col items-center">
            <div
                className="bg-cover bg-center bg-no-repeat p-14 pt-[5.75rem]"
                style={{ backgroundImage: `url(${molduraFoto.src})` }}
            >
                <Image
                    src="https://thispersondoesnotexist.com/"
                    alt="memorial"
                    width={175}
                    height={175}
                    className="rounded-[100%] w-[175px] h-[200px] object-cover"
                />
            </div>
            <div className="flex flex-col items-center mt-4">
                <h2 className="text-2xl font-bold">Nome do Homenageado</h2>
                <p className="text-fuscous-gray-200">dd/mm/yyyy <FaCross className="inline" size={22} /> dd/mm/yyyy</p>
                {/* <p className="text-fuscous-gray-300 text-sm mt-2 text-center line-clamp-2">
                    Uma breve descrição ou homenagem ao homenageado, celebrando sua vida e legado.
                </p> */}
            </div>
        </div>
    );
}

function FaCross({ size, className }: { size?: number, className?: SVGAttributes['className'] }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M176 0c-26.5 0-48 21.5-48 48l0 80-80 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l80 0 0 208c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-208 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-80 0 0-80c0-26.5-21.5-48-48-48L176 0z"/>
        </svg>
    );
}