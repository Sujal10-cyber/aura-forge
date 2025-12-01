export interface Project {
  id: string;
  title: string;
  description: string;
  repositoryUrl: string;
  icon: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Anomaly Detection using WireShark",
    description: "Network traffic analysis system that identifies anomalous patterns and suspicious activities using WireShark packet inspection and machine learning techniques.",
    repositoryUrl: "https://github.com/apeksha-3/Anomaly-Detection-wireShark",
    icon: "🔍",
    imageUrl: "https://images.pexels.com/photos/24783389/pexels-photo-24783389.jpeg",
    gradientFrom: "#3b82f6",
    gradientTo: "#1e40af",
  },
  {
    id: "2",
    title: "NS3 SIMULATION",
    description: "Network simulator NS-3 implementation for modeling network behavior, routing protocols, and performance evaluation in various network topologies.",
    repositoryUrl: "https://github.com/SoumyaGawande/NS3-TOOL-CN-",
    icon: "🌐",
    imageUrl: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg",
    gradientFrom: "#a855f7",
    gradientTo: "#6b21a8",
  },
  {
    id: "3",
    title: "Advanced Analysis of DNS Traffic Monitoring using Wireshark",
    description: "Comprehensive DNS traffic monitoring system that captures and analyzes DNS queries and responses to identify threats and optimize network performance.",
    repositoryUrl: "https://github.com/dev-lov-oper/CN_TA2_DNS.git",
    icon: "📡",
    imageUrl: "https://images.pexels.com/photos/19317897/pexels-photo-19317897.jpeg",
    gradientFrom: "#ec4899",
    gradientTo: "#9d174d",
  },
  {
    id: "4",
    title: "Simulation and Configuration of FTP Server",
    description: "Complete FTP server implementation with configuration management, file transfer operations, and protocol testing using network simulation tools.",
    repositoryUrl: "https://github.com/swamini-10/Simulation-Of-Tools-Computer-Networks.git",
    icon: "📂",
    imageUrl: "https://images.pexels.com/photos/19825057/pexels-photo-19825057.jpeg",
    gradientFrom: "#10b981",
    gradientTo: "#065f46",
  },
  {
    id: "5",
    title: "IP Access Control Extension",
    description: "Advanced access control system using IP-based filtering with ACL management, geolocation blocking, and real-time threat response capabilities.",
    repositoryUrl: "https://github.com/DuttaAyush/ai_blocker",
    icon: "🔐",
    imageUrl: "https://images.pexels.com/photos/27934787/pexels-photo-27934787.jpeg",
    gradientFrom: "#f97316",
    gradientTo: "#a16207",
  },
];
