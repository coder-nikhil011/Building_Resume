import React from "react";

import Classic from "../../templates/Classic";
import Modern from "../../templates/Modern";
import Minimal from "../../templates/Minimal";
import Professional from "../../templates/Professional";
import Creative from "../../templates/Creative";
import Executive from "../../templates/Executive";
import Elegant from "../../templates/Elegant";
import Bold from "../../templates/Bold";
import Clean from "../../templates/Clean";
import Clear from "../../templates/Clear";
import Compact from "../../templates/Compact";
import Corporate from "../../templates/Corporate";
import Designer from "../../templates/Designer";
import Gradient from "../../templates/Gradient";
import Managerial from "../../templates/Managerial";
import Portfolio from "../../templates/Portfolio";
import Sidebar from "../../templates/Sidebar";
import Simple from "../../templates/Simple";
import Specialist from "../../templates/Specialist";
import Stylish from "../../templates/Stylish";
import Timeline from "../../templates/Timeline";
import TwoColumn from "../../templates/TwoColumn";
import Fresher from "../../templates/Fresher";
import Dark from "../../templates/Dark";
import Light from "../../templates/Light";
import Startup from "../../templates/Startup";
import Tech from "../../templates/Tech";
import Academic from "../../templates/Academic";
import PrimeATS from "../../templates/PrimeATS";
import ATSBasic from "../../templates/ATSBasic";
import ATSPro from "../../templates/ATSPro";
import ATSModern from "../../templates/ATSModern";

const templateMap = {
  classic:      Classic,
  modern:       Modern,
  minimal:      Minimal,
  professional: Professional,
  creative:     Creative,
  executive:    Executive,
  elegant:      Elegant,
  bold:         Bold,
  clean:        Clean,
  clear:        Clear,
  compact:      Compact,
  corporate:    Corporate,
  designer:     Designer,
  gradient:     Gradient,
  managerial:   Managerial,
  portfolio:    Portfolio,
  sidebar:      Sidebar,
  simple:       Simple,
  specialist:   Specialist,
  stylish:      Stylish,
  timeline:     Timeline,
  twocolumn:    TwoColumn,
  fresher:      Fresher,
  dark:         Dark,
  light:        Light,
  startup:      Startup,
  tech:         Tech,
  academic:     Academic,
  primeats:     PrimeATS,
  atsbasic:     ATSBasic,
  atspro:       ATSPro,
  atsmodern:    ATSModern,
};

export default function ResumePreview({ resume, activeTemplate }) {
  const TemplateComponent = templateMap[activeTemplate?.toLowerCase()] || Classic;
  return <TemplateComponent resume={resume} />;
}