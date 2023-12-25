import bostaImg from "/public/bosta.svg";

const Navbar = () => {
  const navOne = ["الرئيسية", "الأسعار", "كلم المبيعات"];
  const navTwo = ["تتبع شحنتك", "تسجيل الدخول"];
  return (
    <nav className="flex flex-row items-center justify-around p-6 border border-b-1 border-b-gray-200">
      <a href="https://www.bosta.co" target="_blank">
        <img src={bostaImg} />
      </a>
      <div className="flex flex-row gap-12 text-gray-600 font-bold cursor-pointer">
        {navOne.map((item: string, id: number) => (
          <span key={id}>{item}</span>
        ))}
      </div>
      <div className="flex flex-row gap-6 text-gray-600 font-bold cursor-pointer">
        {navTwo.map((item, id) => (
          <span key={id}>{item}</span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
