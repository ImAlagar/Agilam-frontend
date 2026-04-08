// src/data/servicesData.js
export const servicesData = {
  onlineServices: {
    title: "Online Services",
    description: "Government certificates, PAN, PF & more",
    categories: [
      {
        id: "e-sevai",
        title: "E-Sevai Certificates",
        icon: "FiFileText",
        items: [
          { id: "income", name: "Income Certificate", price: "₹199", duration: "5-7 days" },
          { id: "community", name: "Community Certificate", price: "₹199", duration: "5-7 days" },
          { id: "nativity", name: "Nativity Certificate", price: "₹199", duration: "5-7 days" },
          { id: "marriage", name: "Marriage Certificate", price: "₹299", duration: "7-10 days" },
          { id: "legal-heir", name: "Legal Heir Certificate", price: "₹399", duration: "10-12 days" },
          { id: "obc", name: "OBC Certificate", price: "₹249", duration: "7-10 days" }
        ]
      },
      {
        id: "pan",
        title: "PAN Services",
        icon: "FiCreditCard",
        items: [
          { id: "new-pan", name: "New PAN Card", price: "₹299", duration: "10-15 days" },
          { id: "pan-correction", name: "Name Correction", price: "₹199", duration: "7-10 days" },
          { id: "dob-correction", name: "DOB Correction", price: "₹199", duration: "7-10 days" },
          { id: "e-pan", name: "E-PAN Download", price: "₹99", duration: "1 day" },
          { id: "pan-reprint", name: "PAN Reprint", price: "₹199", duration: "7-10 days" }
        ]
      },
      {
        id: "pf",
        title: "PF Services",
        icon: "FiUsers",
        items: [
          { id: "uan-activation", name: "UAN Activation", price: "₹299", duration: "3-5 days" },
          { id: "balance-check", name: "Balance Check", price: "₹99", duration: "1 day" },
          { id: "pf-transfer", name: "PF Transfer", price: "₹399", duration: "15-20 days" },
          { id: "claim-settlement", name: "Claim Settlement", price: "₹499", duration: "20-30 days" }
        ]
      }
    ]
  },
  
  insuranceServices: {
    title: "Insurance Solutions",
    description: "Health, Life & Vehicle Insurance",
    providers: [
      { id: "star", name: "Star Health", logo: "/images/partners/star.png" },
      { id: "hdfc", name: "HDFC ERGO", logo: "/images/partners/hdfc.png" },
      { id: "icici", name: "ICICI Lombard", logo: "/images/partners/icici.png" },
      { id: "bajaj", name: "Bajaj Allianz", logo: "/images/partners/bajaj.png" }
    ],
    plans: {
      health: [
        { name: "Individual Plan", coverage: "₹5 Lakhs", premium: "₹500/month" },
        { name: "Family Plan", coverage: "₹10 Lakhs", premium: "₹900/month" },
        { name: "Senior Citizen", coverage: "₹5 Lakhs", premium: "₹800/month" }
      ],
      life: [
        { name: "Term Plan", coverage: "₹1 Crore", premium: "₹700/month" },
        { name: "Child Plan", coverage: "₹50 Lakhs", premium: "₹1000/month" },
        { name: "Retirement Plan", coverage: "₹1 Crore", premium: "₹1500/month" }
      ],
      vehicle: [
        { name: "Comprehensive Car", coverage: "Full Coverage", premium: "₹8000/year" },
        { name: "Third Party Bike", coverage: "Third Party", premium: "₹2000/year" }
      ]
    }
  },
  
  studioServices: {
    title: "Creative Studio",
    description: "Photo frames, restoration & design",
    services: [
      { id: "custom-frames", name: "Customized Photo Frames", price: "₹399+", category: "Frames" },
      { id: "collage-frames", name: "Photo Collage Frames", price: "₹599+", category: "Frames" },
      { id: "wooden-frames", name: "Wooden Frames", price: "₹499+", category: "Frames" },
      { id: "mdf-frames", name: "MDF Frames", price: "₹349+", category: "Frames" },
      { id: "acrylic-frames", name: "3D & Acrylic Frames", price: "₹799+", category: "Frames" },
      { id: "mug-printing", name: "Mug Photo Printing", price: "₹199", category: "Printing" },
      { id: "photo-restoration", name: "Old Photo Restoration", price: "₹499+", category: "Editing" },
      { id: "color-conversion", name: "B&W to Color", price: "₹299+", category: "Editing" },
      { id: "logo-design", name: "Logo Design", price: "₹999+", category: "Design" },
      { id: "passport-photo", name: "Passport Size Photo", price: "₹99", category: "Photo" },
      { id: "photo-album", name: "Photo Album Design", price: "₹899+", category: "Album" }
    ]
  }
}