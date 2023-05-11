import React, { useState, Fragment } from "react";
import { FaCheckSquare, FaSquare, FaAngleDown } from 'react-icons/fa';

const FilterLabel = ({ index, icon, title, checkedItems, setCheckedItems }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOnClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const controlLabelActivation = (updatedState, title) => {
        document.querySelector("label." + title).classList.add("active");

        // 학년 체크 박스 관련 조건
        if (title == "학년" && !GradeFilterData.some(grade => updatedState[grade])) {
            // 1학년, 2학년, 3학년 모든 체크박스가 비활성화 되면 아래의 함수 실행
            document.querySelector("label." + title).classList.remove("active");
        }
        // 반 체크 박스 관련 조건
        else if (title == "반" && !ClassFilterData.some(Class => updatedState[Class])) {
            // 1반, 2반, 3반 모든 체크박스가 비활성화 되면 아래의 함수 실행
            document.querySelector("label." + title).classList.remove("active");
        }
        // 동아리 체크 박스 관련 조건
        else if (title == "동아리" && !ClubFilterData.some(Club => updatedState[Club])) {
            // 각 동아리의 모든 체크박스가 비활성화 되면 아래의 함수 실행
            document.querySelector("label." + title).classList.remove("active");
        }
    }

    return (
        <Fragment>
            <li key={index} className="nav-text" onClick={handleOnClick}>
                <label className={title}>
                    {icon}
                    <span>{title}</span>
                    {dropdownOpen ? <FaAngleDown className="dropdown-icon active" /> : <FaAngleDown className="dropdown-icon" />}
                </label>
            </li>
            {dropdownOpen &&
                <DropdownMenu
                    title={title}
                    checkedItems={checkedItems}
                    setCheckedItems={setCheckedItems}
                    controlLabelActivation={controlLabelActivation}
                />
            }
        </Fragment>
    )
};

const DropdownMenu = ({ title, checkedItems, setCheckedItems, controlLabelActivation }) => {

    const handleCheckboxChange = (item) => {
        setCheckedItems(prevState => {
            const updatedState = { ...prevState, [item]: !prevState[item] };

            controlLabelActivation(updatedState, title);

            return updatedState;
        });
    };

    const renderFilterData = () => {
        if (title === "학년") {
            return GradeFilterData.map((item) => (
                <li key={item} className="nav-text" onClick={() => handleCheckboxChange(item)}>
                    <label>
                        {item}
                        {checkedItems[item] ? <FaCheckSquare /> : <FaSquare />}
                    </label>
                </li>
            ));
        } else if (title === "반") {
            return ClassFilterData.map((item) => (
                <li key={item} className="nav-text" onClick={() => handleCheckboxChange(item)}>
                    <label>
                        {item}
                        {checkedItems[item] ? <FaCheckSquare /> : <FaSquare />}
                    </label>
                </li>
            ));
        } else if (title === "동아리") {
            return ClubFilterData.map((item) => (
                <li key={item} className="nav-text" onClick={() => handleCheckboxChange(item)}>
                    <label>
                        {item}
                        {checkedItems[item] ? <FaCheckSquare /> : <FaSquare />}
                    </label>
                </li>
            ));
        }
    }

    return (
        <ul className="dropdown">
            {renderFilterData()}
        </ul>
    );
};

const GradeFilterData = [
    "1학년", "2학년", "3학년"
]
const ClassFilterData = [
    "1반", "2반", "3반"
]
const ClubFilterData = [
    "독서동아리", "영화감상동아리", "초현상특무동아리"
]

export default FilterLabel;