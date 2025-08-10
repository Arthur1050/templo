"use client";
import { useTempleStore, TempleState } from '@/store';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useState, useEffect } from 'react'

type TargetOption = {
    icon: React.ComponentProps<typeof DynamicIcon>['name'];
    label: string;
    value?: TempleState['target'];
};

export default function TargetOption({ icon, label, value = null }: TargetOption) {
    const { target, setTarget } = useTempleStore();
    const [optionSelected, setOptionSelected] = useState(target === value);

    const handleClick = () => {
        setTarget(value);
        setOptionSelected(true);
    }

    useEffect(() => {
        setOptionSelected(target === value);
    }, [target, value]);

    return (
        <div onClick={handleClick} className={`${optionSelected ? "scale-105" : "scale-100"} flex flex-col gap-3 items-center transition duration-200 ease-in-out cursor-pointer`}>
            <div className={`${optionSelected ? "border-fuscous-gray-100 bg-fuscous-gray-700 shadow-lg shadow-fuscous-gray-900" : "border-fuscous-gray-500"} w-32 h-32 rounded-2xl border-4 flex items-center justify-center transition duration-300 ease-in-out`}>
                <DynamicIcon name={icon} size={80} className={`${optionSelected ? 'text-fuscous-gray-50' : 'text-fuscous-gray-300'}`} />
            </div>
            <p>{label}</p>
        </div>
    );
}