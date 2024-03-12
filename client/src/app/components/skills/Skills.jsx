import React from 'react';
import skills from './skillsArray';

const Skills = () => {

    return (
        <div className="Skills">
            <div className="flex flex-row">
            {
                skills.map((skill, index) => {
                    return <Skill key={index} skill={skill} />
                })
            }
            </div>
        </div>
    )
}

const Skill = ({skill}) => {
    return (
        <div className="Skill">
            <h1>{skill.name}</h1>
            <img src={skill.image} alt={skill.imageAlt} />
            {
                skill.skills.map((skill, index) => {
                    return <p key={index}>{skill}</p>
                })
            }
        </div>
    )
}


export default Skills;