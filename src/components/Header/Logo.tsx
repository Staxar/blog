import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "../../../project images/About-Big.png";
function Logo() {
  return (
    <Link href={"/"} className="flex items-center text-dar">
      <div className="w-12 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profileImg}
          alt="logo"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">Marcin</span>
    </Link>
  );
}

export default Logo;
