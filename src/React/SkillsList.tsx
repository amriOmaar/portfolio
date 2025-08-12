import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "DevOps & Deployment": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2a10 10 0 00-3.516 19.383c.555.102.758-.24.758-.535 0-.264-.01-1.139-.015-2.067-3.084.67-3.732-1.49-3.732-1.49-.505-1.283-1.235-1.624-1.235-1.624-1.01-.691.077-.677.077-.677 1.118.079 1.706 1.148 1.706 1.148.992 1.699 2.601 1.208 3.236.924.102-.719.389-1.208.709-1.486-2.461-.279-5.048-1.23-5.048-5.475 0-1.209.433-2.199 1.145-2.974-.115-.281-.496-1.412.11-2.945 0 0 .927-.297 3.035 1.135A10.58 10.58 0 0112 6.844c.939.004 1.885.128 2.768.375 2.105-1.432 3.03-1.135 3.03-1.135.608 1.533.227 2.664.112 2.945.714.775 1.143 1.765 1.143 2.974 0 4.256-2.591 5.192-5.06 5.465.401.345.76 1.027.76 2.071 0 1.495-.014 2.701-.014 3.07 0 .298.199.64.766.532A10.004 10.004 0 0012 2z" />
    </svg>
  ),
  "Tools & Technologies": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.34 0 .67-.02 1-.05v-2.02c-.33.05-.66.07-1 .07-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8c0 .34-.02.67-.07 1h2.02c.03-.33.05-.66.05-1 0-5.52-4.48-10-10-10Zm1 6h-2v5h5v-2h-3V8Z"/>
    </svg>
  ),
};


const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

const skills = {
  "Web Development": [
    "Full-Stack Apps with Node.js, Express, MongoDB",
    "Frontend with Angular, React, and Next.js",
    "Authentication with JWT",
    "Responsive websites with Tailwind CSS",
  ],
  "DevOps & Deployment": [
    "Dockerized applications (Node.js, MongoDB, etc.)",
    "CI/CD with GitHub Actions",
    "Basic infrastructure with Terraform",
  ],
  "Tools & Technologies": [
    "Linux (LPIC certified)",
    "Git & GitHub, GitLab",
    "Postman, MongoDB Compass",
    "Docker, Terraform, Github Actions",
    "Kubernetes (in training)",
  ],
};


  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
