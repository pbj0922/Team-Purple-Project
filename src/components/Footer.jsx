function Footer({ isBlackNWhite }) {
  return (
    <footer
      className={`flex justify-end items-center h-12 pr-4 font-bold ${
        isBlackNWhite ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      2023, Designed by, BlockChianSchool Team PURPLE
    </footer>
  );
}

export default Footer;
