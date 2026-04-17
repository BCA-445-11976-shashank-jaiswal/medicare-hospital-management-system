import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, User, Bot, PhoneCall, Calendar, Stethoscope } from "lucide-react";
import "./Chatbot.css";
import chatbotIcon from "../../assets/chatbot-icon.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! I am your Medicare Hospital Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    const msgText = text || input;
    if (!msgText.trim()) return;

    // Add user message
    const newMessage = { id: Date.now(), type: "user", text: msgText };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      processResponse(msgText);
    }, 600);
  };

  const processResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let response = "";

    // Safety Rules
    if (input.includes("heart attack") || input.includes("emergency") || input.includes("bleeding") || input.includes("breathe")) {
      response = "⚠️ Please consult a doctor or visit the hospital immediately for any serious issues or emergencies.";
    } 
    // Medical Advice Block
    else if (input.includes("medicine") || input.includes("cure") || input.includes("treatment") || input.includes("diagnosis")) {
      response = "I cannot provide medical diagnosis or treatment advice. Please consult one of our qualified doctors for a proper evaluation.";
    }
    // Booking
    else if (input.includes("book") || input.includes("appointment")) {
      response = "To book an appointment, you can visit our 'Doctors' page, select a doctor, and choose an available time slot. Would you like me to guide you to the doctors list?";
    }
    // Departments
    else if (input.includes("department") || input.includes("cardiology") || input.includes("neurology")) {
      response = "We have specialized departments including Cardiology, Neurology, Orthopedics, and more. You can find detailed information in the 'Services' section.";
    }
    // Doctors
    else if (input.includes("doctor") || input.includes("list")) {
      response = "We have a team of highly experienced doctors. You can view their profiles and specialties on the 'Doctors' page. Is there a specific department you are looking for?";
    }
    // Default
    else {
      response = "I'm here to help you with booking appointments, checking doctor availability, or providing info about our departments. How can I assist you further?";
    }

    setMessages((prev) => [
      ...prev,
      { id: Date.now() + 1, type: "bot", text: response },
    ]);
  };

  const quickActions = [
    { label: "Book Appointment", icon: <Calendar size={14} />, query: "How to book an appointment?" },
    { label: "Find a Doctor", icon: <Stethoscope size={14} />, query: "Show me the list of doctors" },
    { label: "Our Services", icon: <PhoneCall size={14} />, query: "Tell me about hospital departments" },
  ];

  return (
    <div className="chatbot-container">
      {/* Floating Bubble */}
      <div className="chatbot-bubble" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <img src={chatbotIcon} alt="AI Assistant" className="chatbot-icon-img" />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="flex items-center gap-2">
              <img src={chatbotIcon} alt="Assistant" className="chatbot-header-icon" />
              <h3>Medicare Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-80">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-actions">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="action-btn flex items-center gap-1"
                onClick={() => handleSend(action.query)}
              >
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>

          <form
            className="chatbot-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="chatbot-send">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
