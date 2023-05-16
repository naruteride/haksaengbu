import React from "react";
import { useParams } from 'react-router-dom';
import { StudentData } from "../components/StudentData";
import "./Student.css";

function Student() {
    let { id } = useParams();
    id = splitId(id);

    // id(학년+반+이름)와 일치하는 학생 정보 획득
    const student = StudentData.find(student => (
        student.grade === id[0]
        && student.class === id[1]
        && student.name === id[2]
    ));

    return (
        <div className="student">
            <div className="academic-information">
                <img src={student.imageSrc} alt={student.name} />
                <table>
                    <tr>
                        <th>학사정보</th>
                        <td>
                            <span className="horizontal-multiple-items">
                                <span>성명: {student.name}</span> <span>성별: {student.sex}</span>
                            </span>
                            <br />
                            전화번호: {student.phone}
                        </td>
                    </tr>
                    <tr>
                        <th>학적사항</th>
                        <td>
                            {student.middleSchoolGraduation} 중학교 졸업<br />
                            {student.highSchoolAdmission} 고등학교 입학
                        </td>
                    </tr>
                    <tr>
                        <th>특기사항</th>
                        <td>{student.remarks}</td>
                    </tr>
                </table>
            </div>
            <table>
                <caption><h2>역사</h2></caption>
                <tr>
                    <th>학년</th>
                    <th>학과</th>
                    <th>반</th>
                    <th>번호</th>
                    <th>담당담임</th>
                </tr>
                <tr>
                    <th>1</th>
                    <td>{student.history[0].major}</td>
                    <td>{student.history[0].class}</td>
                    <td>{student.history[0].number}</td>
                    <td>{student.history[0].homeroomTeacher}</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>{student.history[1].major}</td>
                    <td>{student.history[1].class}</td>
                    <td>{student.history[1].number}</td>
                    <td>{student.history[1].homeroomTeacher}</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>{student.history[2].major}</td>
                    <td>{student.history[2].class}</td>
                    <td>{student.history[2].number}</td>
                    <td>{student.history[2].homeroomTeacher}</td>
                </tr>
            </table>
            <table>
                <caption><h2>기타</h2></caption>
                <tr>
                    <th>동아리</th>
                    <td>{student.club}</td>
                </tr>
            </table>
        </div>
    )
}

function splitId(id) {
    // "학년", "반" 바로 뒤에서 문자열을 분리
    let result = id.split(/(?<=학년|반)/);
    return result;
}

export default Student;
