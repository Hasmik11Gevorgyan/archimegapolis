import { ReactNode, ElementType } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    as?: ElementType;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
    type = "button",
    disabled = false,
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const sizes = {
        sm: "px-5 py-2 text-xs",
        md: "px-8 py-3.5 text-sm",
        lg: "px-10 py-4 text-sm",
    };

    const variants = {
        primary:
            "bg-accent text-bg-primary hover:bg-accent-light shadow-gold hover:shadow-gold-lg",
        outline:
            "border border-accent text-accent hover:bg-accent hover:text-bg-primary",
        ghost:
            "text-text-muted hover:text-accent border-b border-transparent hover:border-accent pb-0.5",
    };

    const combined = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combined}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={combined}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
