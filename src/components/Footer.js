import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="px-40 bg-gray-200">
      <hr className="m-0" />
      <div className="flex items-start py-10">
        <div className="flex items-center mr-6">
          <div>
            <img className="h-[60]" src={LOGO_URL} />
          </div>
          <h1 className="text-3xl font-bold ml-2">Food App</h1>
        </div>

        <div className="">
          <ul className="m-0">
            <li className="m-3">
              <div className="text-xl">Company</div>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/corporate/" target="_blank">
                About Us
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/corporate/" target="_blank">
                Swiggy Corporate
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/careers" target="_blank">
                Careers
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/team" target="_blank">
                Team
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/swiggy-super"
                target="_blank"
                rel="nofollow noopener"
              >
                Swiggy One
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/instamart"
                target="_blank"
                rel="nofollow noopener"
              >
                Swiggy Instamart
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/dineout"
                target="_blank"
                rel="nofollow noopener"
              >
                Swiggy Dineout
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/swiggy-genie"
                target="_blank"
                rel="nofollow noopener"
              >
                Swiggy Genie
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://mini.store/"
                target="_blank"
                rel="nofollow noopener"
              >
                Minis
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://pyng.co.in/"
                target="_blank"
                rel="nofollow noopener"
              >
                Pyng
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="m-0">
            <li className="m-3">
              <div className="text-lg">Contact us</div>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/support">Help &amp; Support</a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://partner-with-us.swiggy.com/onboard#/swiggy"
                target="_blank"
                rel="nofollow noopener"
              >
                Partner with us
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://ride.swiggy.com"
                target="_blank"
                rel="nofollow noopener"
              >
                Ride with us
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="m-0">
            <li className="m-3">
              <div className="text-lg">Legal</div>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/terms-and-conditions"
                target="_blank"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a href="https://www.swiggy.com/cookie-policy" target="_blank">
                Cookie Policy
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/privacy-policy"
                target="_blank"
                rel=""
              >
                Privacy Policy
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/investor-relations"
                target="_blank"
                rel=""
              >
                Investor Relations
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="m-0">
            <li className="m-3">
              <div className="text-lg">Life at Swiggy</div>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://blog.swiggy.com/category/explore-with-swiggy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore with Swiggy
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://blog.swiggy.com/category/news/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Swiggy News
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://blog.swiggy.com/category/snackables/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Snackables
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="m-0">
            <li className="m-3">
              <div className="text-lg">Available in:</div>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/bangalore"
                className="sc-gwPoFG beAXHm"
              >
                Bangalore
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/gurgaon"
                className="sc-gwPoFG beAXHm"
              >
                Gurgaon
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/hyderabad"
                className="sc-gwPoFG beAXHm"
              >
                Hyderabad
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/delhi"
                className="sc-gwPoFG beAXHm"
              >
                Delhi
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/mumbai"
                className="sc-gwPoFG beAXHm"
              >
                Mumbai
              </a>
            </li>
            <li className="m-4 text-gray-500 font-light text-md">
              <a
                href="https://www.swiggy.com/city/pune"
                className="sc-gwPoFG beAXHm"
              >
                Pune
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
