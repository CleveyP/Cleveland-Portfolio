import "../components.css";

const AboutMe = () =>{
    return (
        <div id="about-me" className="AboutMe section flex flex-row align-items">
            <div className="left-container">
                <h1>About Me</h1>
                <hr />
                <p>
                Hi, I&apos;m Cleveland and I am a full stack web developer with a passion for creating and learning. I am a quick learner and I am always looking for new opportunities to grow and learn. I am excited to bring my skills to a new team and help create amazing applications.
                </p>
            </div>
            <div className="right-container">
                <img src="https://avatars.githubusercontent.com/u/78583994?v=4" alt="Cleveland Plonsey" />
            </div>
        </div>
    )
}

export default AboutMe;