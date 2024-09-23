// import { NavLink } from "react-router-dom";
const Nav = () => {
  //   const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-base">
      <li className="">
        {/* <NavLink to='/' className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "text-[#81C9E9] font-bold flex items-center gap-2" : "flex items-center gap-2"
                 }> */}
        Home
        {/* </NavLink> */}
      </li>
      <li>
        {/* <NavLink to='/availableCamps' className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "text-[#81C9E9] font-bold flex items-center gap-2" : "flex items-center gap-2"
                 }> */}
        Shop
        {/* </NavLink> */}
      </li>
      <li>
        {/* <NavLink to='/availableCamps' className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "text-[#81C9E9] font-bold flex items-center gap-2" : "flex items-center gap-2"
                 }> */}
        Blog
        {/* </NavLink> */}
      </li>
    </ul>
  );

  // for nav fix on scroll
  //   const [fix, setFix] = useState(false);
  //   const setFixed = () => {
  //     if (window.scrollY > 50) {
  //       setFix(true);
  //     } else {
  //       setFix(false);
  //     }
  //   };
  //   window.addEventListener("scroll", setFixed);
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Akatsuki</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default Nav;
