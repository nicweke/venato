import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        {" "}
        <Image
          src="/logo/logo.svg"
          alt="logo"
          className="rounded-xl"
          height={28}
          width={28}
        />
        <p className="font-semibold text-white text-2xl ml-2">Venato</p>
      </div>
    </Link>
  );
};
