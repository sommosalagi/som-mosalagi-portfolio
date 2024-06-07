import styles from './SkillsStyles.module.css'
import checkmarkDark from '../../assets/checkmark-dark.svg'
import checkmarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import '../../App.css'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const { theme } = useTheme();
  const checkmarkIcon = theme === 'light' ? checkmarkLight : checkmarkDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='HTML'/>
            <SkillList src={checkmarkIcon} skill='CSS'/>
            <SkillList src={checkmarkIcon} skill='Javascript'/>
            <SkillList src={checkmarkIcon} skill='Typescript'/>
            <SkillList src={checkmarkIcon} skill='Node'/>
        </div>
        <hr></hr>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='React'/>
            <SkillList src={checkmarkIcon} skill='Angular'/>
            <SkillList src={checkmarkIcon} skill='Vue'/>
            <SkillList src={checkmarkIcon} skill='Tailwind CSS'/>
        </div>
        <hr></hr>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill='Redux'/>
            <SkillList src={checkmarkIcon} skill='Webpack'/>
            <SkillList src={checkmarkIcon} skill='Git'/>
            <SkillList src={checkmarkIcon} skill='Jest'/>
            <SkillList src={checkmarkIcon} skill='Bootstrap'/>
        </div>
        <hr></hr>
    </section>
  )
}

export default Skills