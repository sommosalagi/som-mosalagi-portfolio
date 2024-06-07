import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import  hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>PROJECTS</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} title='Viberr' description='Streaming App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={freshBurger} title='Fresh Burger' description='Restaurant Management App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={hipsster} title='Hipsster' description='Glasses App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={fitLift} title='FitLift' description='Fitness App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} title='Viberr' description='Streaming App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={freshBurger} title='Fresh Burger' description='Restaurant Management App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={hipsster} title='Hipsster' description='Glasses App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
            <ProjectCard src={fitLift} title='FitLift' description='Fitness App' href='https://github.com/sommosalagi/som-mosalagi-portfolio'/>
        </div>
    </section>
  )
}

export default Projects