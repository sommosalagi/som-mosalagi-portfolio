import style from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={style.container}>
        <p>&copy; 2024 Som Mosalagi. <br />
        All rights reserved</p>
    </section>
  )
}

export default Footer