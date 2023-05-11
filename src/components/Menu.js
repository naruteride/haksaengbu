import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SearchBar from "./SearchBar";
import FilterLabel from "./FilterLabel";
import "../App.css";

function Menu({ checkedItems, setCheckedItems }) {

    const resetCheckedItems = () => {
        setCheckedItems({});
        document.querySelectorAll("label").forEach(element => {
            element.classList.remove("active");
        });
    };

    return <>
        <IconContext.Provider value={{ color: "undefined" }}>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li className="nav-menu-toggle logo-container">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaGithubAlt />
                            <span>학생부</span>
                        </Link>
                    </li>
                    <li className="nav-menu-toggle filter">
                        <span>필터</span>
                        <button
                            type="submit"
                            className="ghost-button"
                            onClick={resetCheckedItems}
                        >
                            초기화
                        </button>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <FilterLabel
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                checkedItems={checkedItems}
                                setCheckedItems={setCheckedItems}
                            />
                        )
                    })}
                </ul>
            </nav>
            <header>
                <SearchBar />
            </header>
        </IconContext.Provider>
    </>

}

export default Menu;