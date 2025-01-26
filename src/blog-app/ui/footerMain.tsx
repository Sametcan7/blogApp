import { ReactNode } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function FooterMain() {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-800 pt-9">
      <p className="text-center text-4xl font-extrabold text-textSecondary">
        Blog App
      </p>
      <ul className="flex justify-center gap-2 py-4 text-xl">
        <IconContainer>
          <FaFacebookF />
        </IconContainer>
        <IconContainer>
          <FaTwitter />
        </IconContainer>
        <IconContainer>
          <FaPinterestP />
        </IconContainer>
        <IconContainer>
          <FaInstagram />
        </IconContainer>
        <IconContainer>
          <FaLinkedinIn />
        </IconContainer>
      </ul>
      <p className="border-t border-blue-500 py-2 text-center text-textPrimary">
        2025 - Blog App All Right Reserved. Designed By Ist Code
      </p>
    </div>
  );
}

function IconContainer({ children }: { children: ReactNode }) {
  return (
    <li className="cursor-pointer hover:bg-textTertiary rounded-full bg-backGroundActive p-2 text-textSecondary hover:m-[-2px] hover:border-2 hover:border-backGroundActiveBorder">
      {children}
    </li>
  );
}
