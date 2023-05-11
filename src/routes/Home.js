import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import { StudentData } from "../components/StudentData";
import { CheckedItemsContext } from "../index";  // Import the Context

function Home() {
    const checkedItems = useContext(CheckedItemsContext);  // Use the Context

    return (
        <div className="home">
            {StudentData.filter(item => {
                // 각 학생이 checkedItems에 의해 선택된 학년, 반, 동아리에 해당하는지 확인
                const isGradeChecked = checkedItems[item.grade + '학년'];
                const isClassChecked = checkedItems[item.class + '반'];
                const isClubChecked = checkedItems[item.club];

                // 모든 조건을 만족하는 학생만 반환
                return isGradeChecked || isClassChecked || isClubChecked;
            }).map((item, index) => {
                return (
                    <ProfileCard key={index} name={item.name} imageSrc={item.imageSrc} />
                )
            })}
        </div>
    )
}

export default Home;
