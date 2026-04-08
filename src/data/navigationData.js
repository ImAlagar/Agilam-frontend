// src/data/navigationData.js
export const navigationData = {
  mainNav: [
    { name: "Home", path: "/", icon: "FiHome" },
    { name: "About", path: "/about", icon: "FiInfo" },
    { name: "Services", hasDropdown: true, icon: "FiGrid" },
    { name: "Gallery", path: "/gallery", icon: "FiImage" },
    { name: "Testimonials", path: "/testimonials", icon: "FiMessageSquare" },
    { name: "FAQ", path: "/faq", icon: "FiHelpCircle" },
    { name: "Contact", path: "/contact", icon: "FiMail" }
  ],
  
  servicesNav: [
    { name: "Online Services", path: "/services/online", description: "Government certificates & documents" },
    { name: "Creative Studio", path: "/services/studio", description: "Photo frames & design" },
    { name: "Insurance Solutions", path: "/services/insurance", description: "Health, Life & Vehicle" },
    { name: "Event Planners", path: "/services/events", description: "Coming Soon" }
  ],
  
  footerNav: {
    quickLinks: [
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" }
    ],
    services: [
      { name: "Online Services", path: "/services/online" },
      { name: "Creative Studio", path: "/services/studio" },
      { name: "Insurance", path: "/services/insurance" },
      { name: "Event Planners", path: "/services/events" }
    ]
  }
}