"use client";

import { useRouter } from "next/navigation";
import { TbCategory } from "react-icons/tb";

const CategoryIcon = () => {
    const router = useRouter();
    return (
        <div
            className="relative cursor-pointer"
            onClick={() => router.push("/")}
        >
            <div className="text-3xl">
                <TbCategory />
            </div>
        </div>
    );
};

export default CategoryIcon;
