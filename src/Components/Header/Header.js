import { Search } from "../Search/Search";
import "./Header.scss";

const MainHeader = () => {
   return (
      <div>
         <div className="header">
            <div className="header_text">
               <div className="header_descr">Monday</div>
               <div className="header_subdescr">13rd, September 2024</div>
            </div>
            {/* <input className="header_search" type="seacrh" placeholder='Seacrh'/> */}
            <Search />
         </div>
      </div>
   );
};

export default MainHeader;
