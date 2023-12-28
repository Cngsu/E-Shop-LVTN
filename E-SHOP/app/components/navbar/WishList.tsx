"use client";

import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";

const WishList = () => {
    const router = useRouter();
    return (
        <div
            className="relative cursor-pointer"
            onClick={() => router.push("/wishlist")}
        >
            <div className="text-3xl">
                <FaRegHeart />
            </div>
        </div>
    );
};

export default WishList;
