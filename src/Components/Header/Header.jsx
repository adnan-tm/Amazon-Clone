import React, { useContext } from "react";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            {/* delivery */}
            <span>
              <SlLocationPin />
            </span>

            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" />
          <BsSearch size={38} />
        </div>
        {/* right side link  */}
        <div className={classes.order__container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <select>
              <option value="">EN</option>
            </select>
          </Link>

          {/* three components */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                <p>Hello {user.email?.split("@")[0]}</p>
                <span onClick={()=>auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                <p>Hello, Sign In</p>
                <span>Accounts & Lists</span>
                </>
              )}
            </div>

          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
