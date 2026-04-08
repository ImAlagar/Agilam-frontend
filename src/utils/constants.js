// src/utils/constants.js
export const COMPANY_INFO = {
  name: "Agilam Services",
  tagline: "All-in-One Services for Your Daily Needs",
  phone: "7871715084",
  email: "contact@agilam.com",
  address: "West Tambaram, Chennai, Tamil Nadu",
  gst: "33ABCDE1234F1Z",
  established: "2020",
  socialMedia: {
    facebook: "https://facebook.com/agilamservices",
    instagram: "https://instagram.com/agilamservices",
    twitter: "https://twitter.com/agilamservices",
    linkedin: "https://linkedin.com/company/agilamservices"
  }
}

export const BUSINESS_HOURS = {
  weekdays: "9:00 AM - 8:00 PM",
  saturday: "9:00 AM - 8:00 PM",
  sunday: "10:00 AM - 4:00 PM",
  holidays: "Closed on national holidays"
}

export const COLORS = {
  primary: "#0F4C81",
  secondary: "#2FBF71",
  accent: "#F4A261",
  background: "#F8FAFC",
  dark: "#1E293B",
  light: "#F1F5F9",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6"
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
}

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  },
  staggerChildren: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}

export const SERVICE_CATEGORIES = [
  { id: "online", name: "Online Services", path: "/services/online", color: "primary" },
  { id: "studio", name: "Creative Studio", path: "/services/studio", color: "accent" },
  { id: "insurance", name: "Insurance", path: "/services/insurance", color: "secondary" },
  { id: "events", name: "Event Planners", path: "/services/events", color: "primary" }
]