import MouseCircle from "./MouseCircle";
import "./Education.css"
import arrow from "../assets/arrow.svg";
import { useEffect, useRef, useState } from "react";

function EducationBox({ schoolName, roleInSchool, schoolLocation, schoolMarks, schoolDesc, alignment }) {
    const [isVisible, setIsVisible] = useState(false);

    const myRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                setIsVisible(true);
            }

        }, { threshold: 0.6 })

        observer.observe(myRef.current);

        return () => observer.disconnect();
    }, [])

    const jumpDirection = alignment === "L" ? "jumpFromLeft" : "jumpFromRight";

    return (
        <article className={`educationBox ${alignment == 'L' ? "educationBoxLeftAlign" : "educationBoxRightAlign"} ${isVisible ? jumpDirection : ""}`} ref={myRef}>
            <p className="eduSchoolName">{schoolName}</p>
            <p className="eduSchoolRole">{roleInSchool}</p>
            <p className="eduSchoolLocation">{schoolLocation}</p>
            <p className="eduSchoolMarks">{schoolMarks}</p>
            <p className="eduSchoolDesc">{schoolDesc}</p>
        </article>
    )
}

function EducationDate({ educationDate, alignment }) {
    const [isVisible, setIsVisible] = useState(false);

    const myRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                setIsVisible(true);
            }

        }, { threshold: 0.6 })

        observer.observe(myRef.current);

        return () => observer.disconnect();
    }, [])

    const jumpDirection = alignment === "L" ? "jumpFromLeft" : "jumpFromRight";
    return (
        <p className={`educationDate ${alignment == 'L' ? "educationDateLeftAlign" : "educationDateRightAlign"} ${isVisible ? jumpDirection : ""}`} ref={myRef}>{educationDate}</p>
    )
}

function WhiteCircle() {
    return (
        <div className="WhiteCircle">
            <img src={arrow} className="leftArrowWhiteCircle" />
            <div className="WhiteCircleRing"></div>
            <img src={arrow} className="rightArrowWhiteCircle" />
        </div>
    )
}

function Education() {
    return (
        <section id="EducationSection">
            <MouseCircle textcontent={
                <>
                    Educational <span className="redText">Epoch</span>
                    <br />
                    <span className="smallerText">Journey through Learning: My Educational Timeline</span>
                </>
            }></MouseCircle>
            <div id="educationMiddleLine"></div>
            <div className="educationTiles">
                <EducationDate educationDate={"2025 - Present"} alignment={"R"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"Java Programming I"}
                    roleInSchool={"University of Helsinki"}
                    // schoolLocation={"Chennai, India"}
                    schoolMarks={"Score: 100%"}
                    schoolDesc={"Mastered Java Programming syntax and concepts needed for Software Developement."}
                    alignment={"L"}
                ></EducationBox>
            </div>
            <div className="educationTiles">
                <EducationDate educationDate={"2025 - Present"} alignment={"L"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"CS50 Introduction to Databases using SQL."}
                    roleInSchool={"Harvard University Online Course"}
                    // schoolLocation={"Chennai, India"}
                    schoolMarks={"Score: 100%"}
                    schoolDesc={"Mastered SQL concepts and Syntax for Database mastery."}
                    alignment={"R"}
                ></EducationBox>
            </div>
            <div className="educationTiles">
                <EducationDate educationDate={"Graduated 2025"} alignment={"R"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"College of Engineering, Guindy"}
                    roleInSchool={"MCA"}
                    schoolLocation={"Chennai, India"}
                    schoolMarks={"CGPA : 7.2"}
                    schoolDesc={"Graduated MCA from CEG, Guindy under Anna University!"}
                    alignment={"L"}
                ></EducationBox>
            </div>
            <div className="educationTiles">
                <EducationDate educationDate={"Graduated 2023"} alignment={"L"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"Vels Institute of Science and Technology, Pallavaram"}
                    roleInSchool={"BCA"}
                    schoolLocation={"Chennai, India"}
                    schoolMarks={"CGPA : 7.3"}
                    schoolDesc={"Graduated BCA from Vels University, Pallavaram with first class scores."}
                    alignment={"R"}
                ></EducationBox>
            </div>
            <div className="educationTiles">
                <EducationDate educationDate={"Graduated 2018"} alignment={"R"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"Montfort Matric. Hr. Sec. School, Tindivanam"}
                    roleInSchool={"HSC"}
                    schoolLocation={"Tindivanam, India"}
                    schoolMarks={"Grades : 68%"}
                    schoolDesc={"Graduated HSC under Tamil Nadu state board."}
                    alignment={"L"}
                ></EducationBox>
            </div>
            <div className="educationTiles">
                <EducationDate educationDate={"Graduated 2016"} alignment={"L"}></EducationDate>
                <WhiteCircle></WhiteCircle>
                <EducationBox
                    schoolName={"Montfort Matric. Hr. Sec. School, Tindivanam"}
                    roleInSchool={"SSLC"}
                    schoolLocation={"Tindivanam, India"}
                    schoolMarks={"Grades : 89%"}
                    schoolDesc={"Graduated SSLC under Tamil Nadu state board first class."}
                    alignment={"R"}
                ></EducationBox>
            </div>
        </section>
    )
}

export default Education