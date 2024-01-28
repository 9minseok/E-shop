import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({subsets: ['latin'], 
weight:["400"]});

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm"> {/* 네비게이션 상단 고정 */}
      <div className="py-4 border-b-[1px]"> {/* 위아래 1rem padding */}
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link 
              href="/" 
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
 
export default NavBar;