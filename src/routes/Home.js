import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import { StudentData } from "../components/StudentData";
import { CheckedItemsContext } from "../index";

function Home() {
    const [checkedItems, term] = useContext(CheckedItemsContext);

    return (
        <div className="home">
            {StudentData.filter(item => {
                // 각 학생이 checkedItems에 의해 선택된 학년, 반, 동아리에 해당하는지 확인
                const isGradeChecked = checkedItems[item.grade + '학년'];
                const isClassChecked = checkedItems[item.class + '반'];
                const isClubChecked = checkedItems[item.club];

                // term에 의해 검색어와 일치하는 학생인지 확인
                const isTerm = term === item.name;

                // checkedItems의 모든 값이 false인 경우, 모든 학생들을 표시
                const allUnchecked = Object.values(checkedItems).every(value => value === false);

                // 검색어가 존재한다면, 검색어와 일치하는 학생들 중에서 체크 조건 검사
                // 체크 조건을 하나라도 만족하는 학생을 반환하거나, 모든 체크 조건이 해제된 경우 모든 학생을 반환
                return (!term || isTerm)
                    && (allUnchecked || isGradeChecked || isClassChecked || isClubChecked);
            }).map((item, index) => {
                return (
                    <ProfileCard key={index} name={item.name} imageSrc={item.imageSrc} />
                )
            })}
        </div>
    )
}

export default Home;
