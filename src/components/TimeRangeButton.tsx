import {ButtonHTMLAttributes} from "react";

interface TimeRangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    active: boolean;
}

export const TimeRangeButton = ({text, active, onClick}: TimeRangeButtonProps) => (
    <button
        className={`px-4 py-1 rounded-lg ${active ? "bg-gray-800" : ""}`}
        onClick={onClick}
    >
        {text}
    </button>
);
