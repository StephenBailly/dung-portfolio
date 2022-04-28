import mR from '../../assets/MarketResearch.jpg';
import aDi from '../../assets/analysingData.png'
import sC from '../../assets/stayCompliant.jpg'
import pE from '../../assets/protectEarth.jpg'

const data = [
  {
    id: 1,
    image: `${mR}`,
    title: "Market Research",
    desc: "We help you to stay up-to-date with the most current market trend by providing a deep market research.",
    tags: ["#Market Research", ""]
  },
  {
    id: 2,
    image: `${aDi}`,
    title: "Analysing Data & Information",
    desc: "We work with you to understand your business structure, capabilities and processes to enable your strategy and to identify solutions for smart automation and improvement.",
    tags: ["#Analysing Data & Information", ""]
  },
  {
    id: 3,
    image: `${sC}`,
    title: "Stay Compliant",
    desc: "We provide structures, processes and technology recommendations for your GRC (Governance, Risk and Compliance) integration.",
    tags: ["#Regulatory Compliance and Financial Crimes Prevention #Risk Management "]
  },
  {
    id: 4,
    image: `${pE}`,
    title: "Protect The Earth",
    desc: "Our partners provide tools to help calculate and offset your carbon footprint. We offer the easiest way for your business to become environmentally sustainable. ",
    tags: ["#Environmentally Sustainable", ""]
  }
]
export default data
