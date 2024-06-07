import style from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={style.container}>
      <h1 className='sectionTitle'>CONTACT</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" placeholder="Name" id="name" name="name" required></input>
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" placeholder="Email" id="email" name="email" required></input>
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea type="text" placeholder="Message" id="message" name="message" required></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit"/>
      </form>
    </section>
  );
}

export default Contact;
