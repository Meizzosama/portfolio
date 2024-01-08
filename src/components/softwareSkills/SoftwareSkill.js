import React from "react";
import "./SoftwareSkill.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaAws,
  FaPython,
  FaGoogle,
  FaWordpress,
  FaBootstrap
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiMysql,
  SiFirebase,
  SiGooglecloud
} from "react-icons/si";

const skillsSection = [
  {
    icon: <FaHtml5 />,
    name: "HTML"
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS"
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript"
  },
  {
    icon: <FaReact />,
    name: "React js"
  },
  {
    icon: <FaNodeJs />,
    name: "Node js"
  },
  {
    icon: <FaNpm />,
    name: "Npm"
  },
  {
    icon: <SiFlutter />,
    name: "Flutter"
  },
  {
    icon: <SiDart />,
    name: "Dart"
  },
  {
    icon: <SiMysql />,
    name: "MySql"
  },
  {
    icon: <FaAws />,
    name: "AWS"
  },
  {
    icon: <SiFirebase />,
    name: "Firebase"
  },
  {
    icon: <FaPython />,
    name: "Python"
  },
  {
    icon: <FaGoogle />,
    name: "Google"
  },
  {
    icon: <SiGooglecloud />,
    name: "Google Cloud"
  },
  {
    icon: <FaWordpress />,
    name: "WordPress"
  },
  {
    icon: <FaBootstrap />,
    name: "Booststrap"
  }
];

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul
          className="dev-icons"
          style={{display: "flex", gap: "13px", flexWrap: "wrap"}}
        >
          {skillsSection.map((item, index) => {
            return (
              <li key={index}>
                {item.icon}
                <p style={{fontSize: "13px"}}>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
