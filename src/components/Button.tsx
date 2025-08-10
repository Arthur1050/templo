'use client';

import { useState, useRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    button?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}

interface Ripple {
    id: number;
    x: number;
    y: number;
}

export default function Button({
    children,
    className = "",
    button = "primary",
    size = "medium",
    ...props
}: ButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const newRipple: Ripple = {
            id: Date.now(),
            x,
            y,
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove the ripple after animation completes
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 400);

        // Call original onClick if provided
        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <button
            ref={buttonRef}
            className={`relative overflow-hidden w-full ${{
                    primary: "bg-foreground hover:bg-foreground/90 text-background",
                    secondary: "bg-transparent border border-foreground/85 hover:bg-foreground/10 text-foreground"
                }[button]}
                ${{
                    small: "py-1 px-2 text-sm rounded",
                    medium: "py-3.5 px-4 text-base rounded-lg",
                    large: "py-3 px-6 text-lg rounded-r-lg"
                }[size]}
            font-bold ${className}`}
            {...props}
            onClick={createRipple}
        >
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className={`absolute pointer-events-none ${button == 'primary' ? 'bg-black/20' : 'bg-white/20'} rounded-full`}
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        transform: 'translate(-50%, -50%)',
                        animation: 'ripple 400ms ease-out forwards',
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes ripple {
                    0% {
                        width: 0;
                        height: 0;
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 0.2;
                    }
                    100% {
                        width: 400px;
                        height: 400px;
                        opacity: 0;
                    }
                }
            `}</style>
        </button>
    );
}