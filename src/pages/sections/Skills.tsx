import { useRef, useEffect, useState } from 'react';

// Plugins
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Data
import skillsData from '../../data/skills.json';

// ------------------

function Skills() {
  const circleProgressBarRef = useRef<HTMLDivElement>(null);
  const [circleProgress, setCircleProgress] = useState<number[]>(
    new Array(skillsData.circleProgress.length).fill(0)
  );
  const normalProgressBarRef = useRef<HTMLDivElement>(null);
  const [normalProgress, setNormalProgress] = useState<number[]>(
    new Array(skillsData.horizontalProgress.length).fill(0)
  );

  useEffect(() => {
    const progressBarYPosition =
      circleProgressBarRef.current!.getBoundingClientRect().top +
      window.scrollY;
    const handleScroll = () => {
      if (window.scrollY >= progressBarYPosition) {
        setCircleProgress(
          skillsData.circleProgress.map((progress) => progress.percentage)
        );
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [circleProgress]);

  // useEffect(() => {
  //   const progressBarYPosition =
  //     normalProgressBarRef.current!.getBoundingClientRect().top +
  //     window.scrollY;
  //   const handleScroll = () => {
  //     if (window.scrollY >= progressBarYPosition) {
  //       setNormalProgress(
  //         skillsData.horizontalProgress.map((progress) => progress.percentage)
  //       );
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [normalProgress]);

  return (
    <section id="skills" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row m-bottom-60">
            <h2 className="entry-title section-title">{skillsData.title}</h2>

            <div className="skill-circle-holder">
              {skillsData.circleProgress.map((prog, i) => (
                <div key={'circle-prog-' + i} className="skill-circle">
                  <div ref={circleProgressBarRef}>
                    <CircularProgressbar
                      value={circleProgress[i]}
                      text={`${prog.percentage}%`}
                      counterClockwise
                      strokeWidth={15}
                      styles={buildStyles({
                        textColor: '#F37B83',
                        textSize: 18,
                        pathColor: '#F37B83',
                        trailColor: '#554247',
                        strokeLinecap: 'butt',
                        pathTransitionDuration: 2,
                      })}
                    />
                  </div>
                  <p className="skill-circle-text">{prog.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='technologies'>
                        <i className="tech__icon devicon-javascript-plain colored"></i>
                        <i className="tech__icon devicon-react-original-wordmark colored"></i>
                        <i className="tech__icon devicon-redux-plain colored"></i>
                        <i className="tech__icon devicon-python-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-postgresql-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-sequelize-plain-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-express-original-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-nodejs-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-html5-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-css3-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-flask-original-wordmark" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-sqlalchemy-plain" style={{ color: "#B0B3B8" }}></i>
                        <i className="tech__icon devicon-git-plain-wordmark colored"></i>
                        <i className="tech__icon devicon-amazonwebservices-plain-wordmark colored"></i>

                        <i className="tech__icon devicon-numpy-plain colored"></i>
                        <i className="tech__icon fas fa-file-excel"></i>
                        <i className="tech__icon devicon-pandas-plain colored"></i>
                        <img className='tech__icon' id='tableau_icon' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ef5b715-f42b-4fa6-b85f-cefe8fdb3217/dfesc3w-5ede39c2-a820-416d-8d2b-55dab8784a85.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlZjViNzE1LWY0MmItNGZhNi1iODVmLWNlZmU4ZmRiMzIxN1wvZGZlc2Mzdy01ZWRlMzljMi1hODIwLTQxNmQtOGQyYi01NWRhYjg3ODRhODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.K6su883UeNFw5I_jzoZY3wMB11xoFoYWqqTCV1eyPAw"/>
                        <i className="tech__icon devicon-docker-plain-wordmark colored"></i>
          </div>

          {/* <div className="row" ref={normalProgressBarRef}>
            <div className="one-half">
              <div className="skills-holder">
                {skillsData.horizontalProgress
                  .slice(0, Math.ceil(skillsData.horizontalProgress.length / 2))
                  .map((skill, i) => (
                    <div key={'skill-' + i} className="skill-holder">
                      <div className="skill-text">
                        <div className="skill">
                          <div
                            className="skill-fill"
                            style={{ width: `${normalProgress[i]}%` }}></div>
                        </div>
                        <span>{skill.title}</span>
                      </div>
                      <div className="skill-percent">{skill.percentage}%</div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="one-half last">
              <div className="skills-holder sec-skills-holder">
                {skillsData.horizontalProgress
                  .slice(Math.ceil(skillsData.horizontalProgress.length / 2))
                  .map((skill, i) => (
                    <div key={'skill2-' + i} className="skill-holder">
                      <div className="skill-text">
                        <div className="skill">
                          <div
                            className="skill-fill"
                            style={{
                              width: `${
                                normalProgress[
                                  i +
                                    Math.ceil(
                                      skillsData.horizontalProgress.length / 2
                                    )
                                ]
                              }%`,
                            }}></div>
                        </div>
                        <span>{skill.title}</span>
                      </div>
                      <div className="skill-percent">{skill.percentage}%</div>
                    </div>
                  ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
