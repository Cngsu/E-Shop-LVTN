import { Redressed } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import CategoryIcon from "./CategoryIcon";
import WishList from "./WishList";

interface NavBarProps {
  currentUser: SafeUser | null;
}

const roboto = Roboto({ subsets: ['vietnamese'], weight: ["400"] })

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div
      className="
    sticky
    w-full
    bg-zinc-950
    z-30
    shadow-sm
    top-0
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link
              href="/homepage"
              className={`${roboto.className} font-bold text-2xl text-slate-700`}
            >
              E-Commerce Shop
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CategoryIcon />
              <WishList />
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
