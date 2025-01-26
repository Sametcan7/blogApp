export default function Newsletter() {
  return (
    <div className="border-t-2 border-backGroundActiveBorder bg-gradient-to-b from-blue-400 to-blue-200">
      <div className="text-center">
        <p className="py-4 text-2xl font-bold text-textTertiary">Newsletter</p>
        <div className="mx-auto flex h-10 w-[50%] items-center justify-center">
          <label className="flex w-full items-center rounded-l-xl bg-backGroundHover p-2 px-4 outline-offset-[-3px] outline-backGroundActiveBorder focus-within:outline">
            <span className="material-symbols-outlined">mail</span>
            <input
              placeholder="Enter Your Email Here "
              type="email"
              className="w-full bg-backGroundHover px-2 outline-none"
            />
          </label>
          <button className="flex h-full items-center rounded-r-xl border border-black bg-blue-700 px-2">
            <span className="material-symbols-outlined text-white">
              chevron_right
            </span>
          </button>
        </div>
        <p className="py-4 text-textSecondary">
          Subscribe to the newsletter for the latest posts
        </p>
      </div>
    </div>
  );
}
