import { cva, VariantProps } from "cva";
import React from "react";

const getClasses = cva(
    "rounded-md relative min-w-[76px] inline-flex items-center justify-center focus:outline-none whitespace-nowrap",
    {
        variants: {
            intent: {
                solid: "bg-violet-700 hover:bg-violet-400 text-white focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 focus:bg-violet-900 focus:ring-offset-violet-200",
                outline:
                    "border border-2 border border-violet-700 focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 text-violet-700 hover:bg-violet-100 hover:text-violet-400 hover:border-violet-400 focus:text-violet-900 focus:border-violet-900 focus:ring-offset-violet-200",
                ghost: "text-violet-700 hover:text-violet-400 focus:ring-offset-violet-200 focus:ring-2 focus:ring-offset-2 focus:ring-violet-400 focus:text-violet-900",
                link: "",
            },
            size: {
                slim: "text-sm px-3 h-7",
                medium: "text-sm px-4 h-8",
                large: "text-base px-6 h-11",
            },
            disabled: {
                true: "bg-black",
            },
        },
        compoundVariants: [{}],
        defaultVariants: {
            intent: "solid",
            size: "medium",
        },
    }
);

interface Props<C extends React.ElementType>
    extends VariantProps<typeof getClasses> {
    as?: C;
    children: React.ReactNode;
    className?: string;
}

type ButtonProps<C extends React.ElementType> = Props<C> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

export const Button = <C extends React.ElementType = "button">({
    as,
    children,
    intent,
    size,
    disabled,
    className,
    ...props
}: ButtonProps<C>) => {
    const classes = getClasses({
        intent,
        size,
        disabled,
        className,
    });
    const Component = as || "button";
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

// https://dribbble.com/shots/20073541--Noise-UI
