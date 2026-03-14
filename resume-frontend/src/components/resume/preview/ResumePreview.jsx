import React from "react";

import ClassicTemplate from "../templates/Classic";
import ModernTemplate from "../templates/Modern";
import MinimalTemplate from "../templates/Minimal";
import ProfessionalTemplate from "../templates/Professional";
import CreativeTemplate from "../templates/Creative";
import ExecutiveTemplate from "../templates/Executive";
import ElegantTemplate from "../templates/Elegant";
import CompactTemplate from "../templates/Compact";
import CleanTemplate from "../templates/Clean";
import CorporateTemplate from "../templates/Corporate";
import StylishTemplate from "../templates/Stylish";
import GradientTemplate from "../templates/Gradient";
import BoldTemplate from "../templates/Bold";

import TimelineTemplate from "../templates/Timeline";
import SidebarTemplate from "../templates/Sidebar";
import PortfolioTemplate from "../templates/Portfolio";
import DesignerTemplate from "../templates/Designer";

import ClearTemplate from "../templates/Clear";
import ManagerialTemplate from "../templates/Managerial";
import SimpleTemplate from "../templates/Simple";
import SpecialistTemplate from "../templates/Specialist";
import TwoColumnTemplate from "../templates/TwoColumn";

export default function ResumePreview({ resume, activeTemplate }) {

  const templateMap = {

    classic: ClassicTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,

    executive: ExecutiveTemplate,
    elegant: ElegantTemplate,
    compact: CompactTemplate,
    clean: CleanTemplate,
    corporate: CorporateTemplate,

    stylish: StylishTemplate,
    gradient: GradientTemplate,
    bold: BoldTemplate,

    timeline: TimelineTemplate,
    sidebar: SidebarTemplate,

    portfolio: PortfolioTemplate,
    designer: DesignerTemplate,

    clear: ClearTemplate,
    managerial: ManagerialTemplate,

    simple: SimpleTemplate,
    specialist: SpecialistTemplate,
    twocolumn: TwoColumnTemplate,
  };

  const TemplateComponent =
    templateMap[activeTemplate?.toLowerCase()] || ClassicTemplate;

  return (
    <div className="bg-gray-100 p-4 rounded-xl">

      <TemplateComponent resume={resume} />

    </div>
  );
}