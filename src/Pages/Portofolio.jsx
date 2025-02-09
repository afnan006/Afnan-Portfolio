// // import React, { useEffect, useState, useCallback } from "react";
// // import PropTypes from "prop-types";
// // import SwipeableViews from "react-swipeable-views";
// // import { useTheme } from "@mui/material/styles";
// // import AppBar from "@mui/material/AppBar";
// // import Tabs from "@mui/material/Tabs";
// // import Tab from "@mui/material/Tab";
// // import Typography from "@mui/material/Typography";
// // import Box from "@mui/material/Box";
// // import CardProject from "../components/CardProject";
// // import Certificate from "../components/Certificate";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { Code, Award } from "lucide-react";

// // // Separate ShowMore/ShowLess button component
// // const ToggleButton = ({ onClick, isShowingMore }) => (
// //   <button
// //     onClick={onClick}
// //     className="
// //       px-3 py-1.5
// //       text-slate-300 
// //       hover:text-white 
// //       text-sm 
// //       font-medium 
// //       transition-all 
// //       duration-300 
// //       ease-in-out
// //       flex 
// //       items-center 
// //       gap-2
// //       bg-white/5 
// //       hover:bg-white/10
// //       rounded-md
// //       border 
// //       border-white/10
// //       hover:border-white/20
// //       backdrop-blur-sm
// //       group
// //       relative
// //       overflow-hidden
// //     "
// //   >
// //     <span className="relative z-10 flex items-center gap-2">
// //       {isShowingMore ? "See Less" : "See More"}
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         width="16"
// //         height="16"
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         className={`
// //           transition-transform 
// //           duration-300 
// //           ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
// //         `}
// //       >
// //         <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
// //       </svg>
// //     </span>
// //     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
// //   </button>
// // );

// // function TabPanel({ children, value, index, ...other }) {
// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`full-width-tabpanel-${index}`}
// //       aria-labelledby={`full-width-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box sx={{ p: { xs: 1, sm: 3 } }}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // TabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.number.isRequired,
// //   value: PropTypes.number.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `full-width-tab-${index}`,
// //     "aria-controls": `full-width-tabpanel-${index}`,
// //   };
// // }

// // export default function FullWidthTabs() {
// //   const theme = useTheme();
// //   const [value, setValue] = useState(0);
// //   const [projects, setProjects] = useState([]);
// //   const [certificates, setCertificates] = useState([]);
// //   const [showAllProjects, setShowAllProjects] = useState(false);
// //   const [showAllCertificates, setShowAllCertificates] = useState(false);
// //   const isMobile = window.innerWidth < 768;
// //   const initialItems = isMobile ? 4 : 6;

// //   useEffect(() => {
// //     // Initialize AOS once
// //     AOS.init({
// //       once: false, // This will make animations occur only once
// //     });
// //   }, []);

// //   const fetchData = useCallback(async () => {
// //     try {
// //       const projectCollection = collection(db, "projects");
// //       const certificateCollection = collection(db, "certificates");

// //       const [projectSnapshot, certificateSnapshot] = await Promise.all([
// //         getDocs(projectCollection),
// //         getDocs(certificateCollection),
// //       ]);

// //       const projectData = projectSnapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...doc.data(),
// //         TechStack: doc.data().TechStack || [],
// //       }));

// //       const certificateData = certificateSnapshot.docs.map((doc) => doc.data());

// //       setProjects(projectData);
// //       setCertificates(certificateData);

// //       // Store in localStorage
// //       localStorage.setItem("projects", JSON.stringify(projectData));
// //       localStorage.setItem("certificates", JSON.stringify(certificateData));
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]);

// //   const handleChange = (event, newValue) => {
// //     setValue(newValue);
// //   };

// //   const toggleShowMore = useCallback((type) => {
// //     if (type === 'projects') {
// //       setShowAllProjects(prev => !prev);
// //     } else {
// //       setShowAllCertificates(prev => !prev);
// //     }
// //   }, []);

// //   const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
// //   const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

// //   return (
// //     <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
// //       {/* Header section - unchanged */}
// //       <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
// //         <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
// //           <span style={{
// //             color: '#6366f1',
// //             backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
// //             WebkitBackgroundClip: 'text',
// //             backgroundClip: 'text',
// //             WebkitTextFillColor: 'transparent'
// //           }}>
// //             Portfolio Showcase
// //           </span>
// //         </h2>
// //         <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
// //           Explore my journey through projects and certifications. 
// //           Each section represents a milestone in my continuous learning path.
// //         </p>
// //       </div>

// //       <Box sx={{ width: "100%" }}>
// //         {/* AppBar and Tabs section - unchanged */}
// //         <AppBar
// //           position="static"
// //           elevation={0}
// //           sx={{
// //             bgcolor: "transparent",
// //             border: "1px solid rgba(255, 255, 255, 0.1)",
// //             borderRadius: "20px",
// //             position: "relative",
// //             overflow: "hidden",
// //             "&::before": {
// //               content: '""',
// //               position: "absolute",
// //               top: 0,
// //               left: 0,
// //               right: 0,
// //               bottom: 0,
// //               background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
// //               backdropFilter: "blur(10px)",
// //               zIndex: 0,
// //             },
// //           }}
// //           className="md:px-4"
// //         >
// //           {/* Tabs remain unchanged */}
// //           <Tabs
// //             value={value}
// //             onChange={handleChange}
// //             textColor="secondary"
// //             indicatorColor="secondary"
// //             variant="fullWidth"
// //             sx={{
// //               // Existing styles remain unchanged
// //               minHeight: "70px",
// //               "& .MuiTab-root": {
// //                 fontSize: { xs: "0.9rem", md: "1rem" },
// //                 fontWeight: "600",
// //                 color: "#94a3b8",
// //                 textTransform: "none",
// //                 transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
// //                 padding: "20px 0",
// //                 zIndex: 1,
// //                 margin: "8px",
// //                 borderRadius: "12px",
// //                 "&:hover": {
// //                   color: "#ffffff",
// //                   backgroundColor: "rgba(139, 92, 246, 0.1)",
// //                   transform: "translateY(-2px)",
// //                   "& .lucide": {
// //                     transform: "scale(1.1) rotate(5deg)",
// //                   },
// //                 },
// //                 "&.Mui-selected": {
// //                   color: "#fff",
// //                   background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
// //                   boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
// //                   "& .lucide": {
// //                     color: "#a78bfa",
// //                   },
// //                 },
// //               },
// //               "& .MuiTabs-indicator": {
// //                 height: 0,
// //               },
// //               "& .MuiTabs-flexContainer": {
// //                 gap: "8px",
// //               },
// //             }}
// //           >
// //             <Tab
// //               icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
// //               label="Projects"
// //               {...a11yProps(0)}
// //             />
// //             <Tab
// //               icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
// //               label="Certifications"
// //               {...a11yProps(1)}
// //             />
// //           </Tabs>
// //         </AppBar>

// //         <SwipeableViews
// //           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
// //           index={value}
// //           onChangeIndex={setValue}
// //         >
// //           <TabPanel value={value} index={0} dir={theme.direction}>
// //             <div className="container mx-auto flex justify-center items-center overflow-hidden">
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
// //                 {displayedProjects.map((project, index) => (
// //                   <div
// //                     key={project.id || index}
// //                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
// //                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
// //                   >
// //                     <CardProject
// //                       Img={project.Img}
// //                       Title={project.Title}
// //                       Description={project.Description}
// //                       Link={project.Link}
// //                       id={project.id}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             {projects.length > initialItems && (
// //               <div className="mt-6 w-full flex justify-start">
// //                 <ToggleButton
// //                   onClick={() => toggleShowMore('projects')}
// //                   isShowingMore={showAllProjects}
// //                 />
// //               </div>
// //             )}
// //           </TabPanel>

// //           <TabPanel value={value} index={1} dir={theme.direction}>
// //             <div className="container mx-auto flex justify-center items-center overflow-hidden">
// //               <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
// //                 {displayedCertificates.map((certificate, index) => (
// //                   <div
// //                     key={index}
// //                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
// //                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
// //                   >
// //                     <Certificate ImgSertif={certificate.Img} />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             {certificates.length > initialItems && (
// //               <div className="mt-6 w-full flex justify-start">
// //                 <ToggleButton
// //                   onClick={() => toggleShowMore('certificates')}
// //                   isShowingMore={showAllCertificates}
// //                 />
// //               </div>
// //             )}
// //           </TabPanel>
// //         </SwipeableViews>
// //       </Box>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import CardProject from "../components/CardProject";
// import Certificate from "../components/Certificate";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Code, Award } from "lucide-react";
// import BNImage from "../assets/BN.jpeg";
// import MeetNowImage from "../assets/Meet now.jpeg";
// import PortImage from "../assets/port.jpeg";
// import SpamImage from "../assets/spam (1).jpeg";
// import Web3Image from "../assets/Web 3.jpeg";

// // Local array of projects
// const projectsData = [
//   {
//     id: 1,
//     Img: BNImage, // Path to your image in the assets folder
//     Title: "B.N The Automobile Services",
//     Description: "A Responsive landing page with Contact Details",
//     Link: "https://production-test-afnan.netlify.app/", // Replace with your project link
//   },
//   {
//     id: 2,
//     Img: MeetNowImage,
//     Title: "Meet Now",
//     Description: "This is a description for Project 2.",
//     Link: "https://meet-now-in-production-testing.netlify.app/login",
//   },
//   {
//     id: 3,
//     Img: Web3Image,
//     Title: "Web3 Solutions",
//     Description: "This is a description for Project 3.",
//     Link: "https://web3-solutions.netlify.app/",
//   },
//   {
//     id: 4,
//     Img: PortImage,
//     Title: "Portfolio Website ",
//     Description: "This is a description for Project 4.",
//     Link: "https://afnan006-portfolio.netlify.app/",
//   },
//   {
//     id: 5,
//     Img: SpamImage,
//     Title: "Spam API Checker",
//     Description: "This is a description for Project 5.",
//     Link: "https://github.com/afnan006/Spam-API",
//   },
// ];

// // Separate ShowMore/ShowLess button component
// const ToggleButton = ({ onClick, isShowingMore }) => (
//   <button
//     onClick={onClick}
//     className="
//       px-3 py-1.5
//       text-slate-300 
//       hover:text-white 
//       text-sm 
//       font-medium 
//       transition-all 
//       duration-300 
//       ease-in-out
//       flex 
//       items-center 
//       gap-2
//       bg-white/5 
//       hover:bg-white/10
//       rounded-md
//       border 
//       border-white/10
//       hover:border-white/20
//       backdrop-blur-sm
//       group
//       relative
//       overflow-hidden
//     "
//   >
//     <span className="relative z-10 flex items-center gap-2">
//       {isShowingMore ? "See Less" : "See More"}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={`
//           transition-transform 
//           duration-300 
//           ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
//         `}
//       >
//         <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
//       </svg>
//     </span>
//     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
//   </button>
// );

// function TabPanel({ children, value, index, ...other }) {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: { xs: 1, sm: 3 } }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const isMobile = window.innerWidth < 768;
//   const initialItems = isMobile ? 4 : 6;

//   useEffect(() => {
//     // Initialize AOS once
//     AOS.init({
//       once: false, // This will make animations occur only once
//     });
//   }, []);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const toggleShowMore = useCallback((type) => {
//     if (type === 'projects') {
//       setShowAllProjects(prev => !prev);
//     }
//   }, []);

//   const displayedProjects = showAllProjects ? projectsData : projectsData.slice(0, initialItems);

//   return (
//     <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
//       {/* Header section - unchanged */}
//       <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
//         <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
//           <span style={{
//             color: '#6366f1',
//             backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
//             WebkitBackgroundClip: 'text',
//             backgroundClip: 'text',
//             WebkitTextFillColor: 'transparent'
//           }}>
//             Portfolio Showcase
//           </span>
//         </h2>
//         <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
//           Explore my journey through projects and certifications. 
//           Each section represents a milestone in my continuous learning path.
//         </p>
//       </div>

//       <Box sx={{ width: "100%" }}>
//         {/* AppBar and Tabs section - unchanged */}
//         <AppBar
//           position="static"
//           elevation={0}
//           sx={{
//             bgcolor: "transparent",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             borderRadius: "20px",
//             position: "relative",
//             overflow: "hidden",
//             "&::before": {
//               content: '""',
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
//               backdropFilter: "blur(10px)",
//               zIndex: 0,
//             },
//           }}
//           className="md:px-4"
//         >
//           {/* Tabs remain unchanged */}
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="secondary"
//             indicatorColor="secondary"
//             variant="fullWidth"
//             sx={{
//               // Existing styles remain unchanged
//               minHeight: "70px",
//               "& .MuiTab-root": {
//                 fontSize: { xs: "0.9rem", md: "1rem" },
//                 fontWeight: "600",
//                 color: "#94a3b8",
//                 textTransform: "none",
//                 transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                 padding: "20px 0",
//                 zIndex: 1,
//                 margin: "8px",
//                 borderRadius: "12px",
//                 "&:hover": {
//                   color: "#ffffff",
//                   backgroundColor: "rgba(139, 92, 246, 0.1)",
//                   transform: "translateY(-2px)",
//                   "& .lucide": {
//                     transform: "scale(1.1) rotate(5deg)",
//                   },
//                 },
//                 "&.Mui-selected": {
//                   color: "#fff",
//                   background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
//                   boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
//                   "& .lucide": {
//                     color: "#a78bfa",
//                   },
//                 },
//               },
//               "& .MuiTabs-indicator": {
//                 height: 0,
//               },
//               "& .MuiTabs-flexContainer": {
//                 gap: "8px",
//               },
//             }}
//           >
//             <Tab
//               icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
//               label="Projects"
//               {...a11yProps(0)}
//             />
//             <Tab
//               icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
//               label="Certifications"
//               {...a11yProps(1)}
//             />
//           </Tabs>
//         </AppBar>

//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           onChangeIndex={setValue}
//         >
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             <div className="container mx-auto flex justify-center items-center overflow-hidden">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
//                 {displayedProjects.map((project, index) => (
//                   <div
//                     key={project.id || index}
//                     data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
//                     data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
//                   >
//                     <CardProject
//                       Img={project.Img}
//                       Title={project.Title}
//                       Description={project.Description}
//                       Link={project.Link}
//                       id={project.id}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {projectsData.length > initialItems && (
//               <div className="mt-6 w-full flex justify-start">
//                 <ToggleButton
//                   onClick={() => toggleShowMore('projects')}
//                   isShowingMore={showAllProjects}
//                 />
//               </div>
//             )}
//           </TabPanel>

//           <TabPanel value={value} index={1} dir={theme.direction}>
//             {/* Certifications section remains unchanged */}
//           </TabPanel>
//         </SwipeableViews>
//       </Box>
//     </div>
//   );
// }
import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award } from "lucide-react";
import BNImage from "../assets/BN.jpeg";
import MeetNowImage from "../assets/Meet now.jpeg";
import PortImage from "../assets/port.jpeg";
import SpamImage from "../assets/spam (1).jpeg";
import Web3Image from "../assets/Web 3.jpeg";
import Certificate1 from "../assets/Data Analytics Cert.jpeg";
import Certificate2 from "../assets/Project management Cert.jpeg";

// Local array of projects
const projectsData = [
  {
    id: 1,
    Img: BNImage,
    Title: "B.N The Automobile Services",
    Description: "A fully responsive landing page designed for B.N The Automobile Services, showcasing their expertise in automobile repairs and maintenance. The page includes contact details, service highlights, and a user-friendly interface to attract potential customers.",
    Link: "https://production-test-afnan.netlify.app/",
  },
  {
    id: 2,
    Img: MeetNowImage,
    Title: "Meet Now",
    Description: "A modern and interactive meeting scheduling platform that allows users to book, join, and manage virtual meetings seamlessly. Features include user authentication, real-time updates, and an intuitive UI for a smooth user experience.",
    Link: "https://meet-now-in-production-testing.netlify.app/login",
  },
  {
    id: 3,
    Img: Web3Image,
    Title: "Web3 Solutions",
    Description: "A cutting-edge website dedicated to Web3 technologies, including blockchain, decentralized applications (dApps), and smart contracts. The site provides insights, resources, and tools for developers and businesses exploring the Web3 ecosystem.",
    Link: "https://web3-solutions.netlify.app/",
  },
  {
    id: 4,
    Img: PortImage,
    Title: "Portfolio Website",
    Description: "A personal portfolio website showcasing my skills, projects, and achievements. Built with a clean and modern design, it highlights my expertise in web development and provides an easy way for potential clients or employers to contact me..",
    Link: "https://afnan006-portfolio.netlify.app/",
  },
  {
    id: 5,
    Img: SpamImage,
    Title: "Spam Checker API",
    Description: "A robust API designed to detect and filter spam phone numbers from user inputs. This tool is ideal for applications requiring Spam protection, ensuring a clean and spam-free environment. The API is lightweight, fast, and easy to integrate..",
    Link: "https://github.com/afnan006/Spam-API",
  },
];

// Local array of certificates
const certificatesData = [
  {
    id: 1,
    Img: Certificate1,
    Title: "Google's Professional Data Analytics",
    Description: "Earned for completing Google's Professional Data Analytics Certification, a comprehensive program covering data cleaning, analysis, visualization, and tools like SQL, Python, and Tableau. This certification validates my ability to transform raw data into actionable insights and make data-driven decisions..",
    Link: "https://www.coursera.org/account/accomplishments/professional-cert/DXBZXA2G8XJB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    id: 2,
    Img: Certificate2,
    Title: "Foundations of Project Management by Google",
    Description: "Awarded for completing Google's Foundations of Project Management course, which covers the fundamentals of project management, including planning, execution, and stakeholder communication. This certification demonstrates my understanding of project management principles and my ability to lead projects effectively.",
    Link: "https://www.coursera.org/account/accomplishments/verify/U73X8LFBXRBV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else if (type === 'certificates') {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projectsData : projectsData.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificatesData : certificatesData.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects and certifications. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certifications"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projectsData.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate
                      ImgSertif={certificate.Img}
                      Title={certificate.Title}
                      Description={certificate.Description}
                      Link={certificate.Link}
                    />
                  </div>
                ))}
              </div>
            </div>
            {certificatesData.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}