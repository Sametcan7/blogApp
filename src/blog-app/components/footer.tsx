import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="bg-blue-300">
        <div className="text-center">
          <p className="text-textTertiary py-4 text-2xl font-bold">
            Newsletter
          </p>
          <div className="flex mx-auto w-[50%] h-10 items-center justify-center">
            <label className="bg-backGroundHover outline-backGroundActiveBorder flex w-full items-center rounded-l-xl p-2 px-4 outline-offset-[-3px] focus-within:outline">
              <span className="material-symbols-outlined">mail</span>
              <input
                placeholder="Enter Your Email Here "
                type="email"
                className="bg-backGroundHover px-2 w-full outline-none"
              />
            </label>
            <button className="flex h-full items-center rounded-r-xl border border-black bg-blue-700 px-2">
              <span className="material-symbols-outlined text-white">
                chevron_right
              </span>
            </button>
          </div>
          <p className="text-textSecondary py-4">
            Subscribe to the newsletter for the latest posts
          </p>
        </div>
      </div>
      <div className="bg-blue-700 pt-9">
        <p className="text-textSecondary text-center text-4xl font-extrabold">
          Blog App
        </p>
        <ul className="flex justify-center gap-2 py-4 text-xl">
          <li className="text-textSecondary hover:border-backGroundActiveBorder bg-backGroundActive cursor-pointer rounded-full p-2 hover:m-[-2px] hover:border-2">
            <FaFacebookF />
          </li>
          <li className="text-textSecondary hover:border-backGroundActiveBorder bg-backGroundActive cursor-pointer rounded-full p-2 hover:m-[-2px] hover:border-2">
            <FaTwitter />
          </li>
          <li className="text-textSecondary hover:border-backGroundActiveBorder bg-backGroundActive cursor-pointer rounded-full p-2 hover:m-[-2px] hover:border-2">
            <FaPinterestP />
          </li>
          <li className="text-textSecondary hover:border-backGroundActiveBorder bg-backGroundActive cursor-pointer rounded-full p-2 hover:m-[-2px] hover:border-2">
            <FaInstagram />
          </li>
          <li className="text-textSecondary hover:border-backGroundActiveBorder bg-backGroundActive cursor-pointer rounded-full p-2 hover:m-[-2px] hover:border-2">
            <FaLinkedinIn />
          </li>
        </ul>
        <p className="text-textPrimary border-backGroundActiveBorder border-t py-2 text-center">
          2025 - Blog App All Right Reserved. Designed By Ist Code
        </p>
      </div>
    </div>
  );
}
