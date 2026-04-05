const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Surbhi. All rights reserved.</p>

      <div className="socials">
        <span>🌐</span>
        <span>💼</span>
        <span>📧</span>
      </div>
    </footer>
  );
};

export default Footer;