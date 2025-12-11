function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "nourmamdouh54@gmail.com",
      link: "mailto:nourmamdouh54@gmail.com",
      icon: "📧",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nour-mamdouh",
      link: "https://www.linkedin.com/in/nour-mamdouh/",
      icon: "🔗",
    },
    {
      label: "GitHub",
      value: "github.com/nourmamdouhdev",
      link: "https://github.com/nourmamdouhdev",
      icon: "💻",
    },
  ];

  return (
    <div>
      <p className="section-subtitle">Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-description" style={{ maxWidth: 500 }}>
        Feel free to reach out for collaboration, opportunities, or questions.
        I reply quickly on email and LinkedIn.
      </p>

      <div className="contact-icons-container">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-card"
          >
            <div className="contact-icon">{c.icon}</div>
            <div className="contact-icon-text">
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
