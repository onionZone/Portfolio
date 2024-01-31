import "./Contact.css";

export const Contact = () => {
  return (
    <div id="contact" className="container">
      <h1>Contact Me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/68438053b8295a46a8a335464bc5fde0"
        method="POST"
      >
        <label>Name:</label>
        <input type="text" name="name" placeholder="Write your name.." />
        <label>E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="Write your email.."
          required
        />
        <label>Your message:</label>
        <textarea placeholder="Write your message.." rows={10} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
