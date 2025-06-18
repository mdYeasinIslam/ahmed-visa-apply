"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({
  className,
  isShowBorder = false,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className={cn("text-black flex  gap-6  font-normal ps-3", className)}>
      <Link href={"/"}>
        <div
          // className="cursor-pointer hover:text-red-primary transition duration-200"
          className={cn(
            "cursor-pointer hover:text-[#0056B3] transition duration-200",
            pathname === "/" && "text-[#0056B3] font-semibold underline "
          )}
        >
          Home
        </div>
      </Link>
      {/* {isShowBorder && <div className="h-5 border "></div>} */}
      <Link href={"/apply-now"}>
        <div
          className={cn(
            "cursor-pointer hover:text-[#0056B3] transition duration-200",
            pathname === "/apply-now" && "text-red-primary font-semibold underline"
          )}
        >
          Apply Now
        </div>
      </Link>
      <Link href={"/faq"}>
        <div
          className={cn(
            "cursor-pointer hover:text-[#0056B3] transition duration-200",
            pathname === "/faq" && "text-red-primary font-semibold underline"
          )}
        >
          FAQ
        </div>
      </Link>
      <Link href={"/contact"}>
        <div
          className={cn(
            "cursor-pointer hover:text-[#0056B3] transition duration-200",
            pathname === "/contact" && "text-red-primary font-semibold underline"
          )}
        >
          Contact Us
        </div>
      </Link>
      <Link href={"/about"}>
        <div
          className={cn(
            "cursor-pointer hover:text-[#0056B3] transition duration-200",
            pathname === "/about" && "text-red-primary font-semibold underline"
          )}
        >
          About Us
        </div>
      </Link>
    </div>
  );
};

export default NavMenu;
