import '../../CSS/Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h2 className="contact__title">Kontaktirajte nas:</h2>
        <form className="contact__form">
          <input
            type="email"
            className="contact__email"
            placeholder="Unesite vaš E-Mail"
          />
          <textarea
            className="contact__message"
            cols="30"
            rows="10"
            placeholder="Unesite tekst vaše poruke"
          ></textarea>
          <button type="submit" className="btn-primary">
            Pošalji
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
