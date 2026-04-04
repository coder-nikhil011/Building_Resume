import React, { createContext, useContext, useState, useCallback } from "react";

const ResumeContext = createContext(null);

const defaultResume = {
  personal: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    jobTitle: "",
    photo: "",
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  links: [],
  courses: [],
  languages: [],
  hobbies: "",
  activities: [],
  internships: [],
  references: [],
};

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState(defaultResume);
  const [activeTemplate, setActiveTemplate] = useState("classic");
  const [savedResumes, setSavedResumes] = useState([]);

  const updateSection = useCallback((section, value) => {
    setResume((prev) => ({ ...prev, [section]: value }));
  }, []);

  const updatePersonal = useCallback((field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  }, []);

  const resetResume = useCallback(() => {
    setResume(defaultResume);
  }, []);

  const saveResume = useCallback(
    (name = "My Resume") => {
      const saved = {
        id: Date.now(),
        name,
        data: resume,
        template: activeTemplate,
        updatedAt: new Date().toISOString(),
      };
      setSavedResumes((prev) => [...prev, saved]);
      return saved;
    },
    [resume, activeTemplate]
  );

  const loadResume = useCallback((savedResume) => {
    setResume(savedResume.data);
    setActiveTemplate(savedResume.template);
  }, []);

  const calculateProgress = useCallback(() => {
    let score = 0;
    const total = 9;
    const p = resume.personal;
    if (p.firstName && p.lastName && p.email && p.phone) score++;
    if (resume.summary) score++;
    if (resume.experience.length > 0) score++;
    if (resume.education.length > 0) score++;
    if (resume.skills.length > 0) score++;
    if (resume.links.length > 0) score++;
    if (resume.internships.length > 0) score++;
    if (resume.hobbies) score++;
    if (resume.languages.length > 0) score++;
    return Math.round((score / total) * 100);
  }, [resume]);

  return (
    <ResumeContext.Provider
      value={{
        resume,
        setResume,
        updateSection,
        updatePersonal,
        resetResume,
        saveResume,
        loadResume,
        savedResumes,
        activeTemplate,
        setActiveTemplate,
        calculateProgress,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used inside ResumeProvider");
  return ctx;
};