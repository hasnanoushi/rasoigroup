import { Phone, MessageCircle } from 'lucide-react';
import './Home.css';

export default function Home() {
  const phoneNumber = "9747019978";
  const whatsappMessage = encodeURIComponent("Hi,I would like to contact you");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="home">
      <div className="home-container">
        <h1>Welcome to RASOI GROUP</h1>
        <div className="image-wrapper">
          <img src="/rasoigroup.webp" alt="Rasoi Group" className="main-image" />
        </div>
        
        <div className="contact-actions">
          <a href={`tel:${phoneNumber}`} className="action-button call-btn">
            <Phone size={24} />
            <span>Call Us</span>
          </a>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="action-button whatsapp-btn">
            <MessageCircle size={24} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
