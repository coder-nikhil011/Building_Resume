import React from "react";

import Classic from "../../templates/Classic";
import Modern from "../../templates/Modern";
import Minimal from "../../templates/Minimal";
import Professional from "../../templates/Professional";
import Creative from "../../templates/Creative";
import { Executive } from "../../templates/Executive";
import Elegant from "../../templates/Elegant";
import { Compact, Clean, Corporate, Stylish, Gradient, Bold } from "../../templates/MultiTemplates1";
import { Timeline, Sidebar, Portfolio, Designer, Clear, Managerial, Simple, Specialist, TwoColumn } from "../../templates/MultiTemplates2";

const templateMap = {
  classic:      Classic,
  modern:       Modern,
  minimal:      Minimal,
  professional: Professional,
  creative:     Creative,
  executive:    Executive,
  elegant:      Elegant,
  compact:      Compact,
  clean:        Clean,
  corporate:    Corporate,
  stylish:      Stylish,
  gradient:     Gradient,
  bold:         Bold,
  timeline:     Timeline,
  sidebar:      Sidebar,
  portfolio:    Portfolio,
  designer:     Designer,
  clear:        Clear,
  managerial:   Managerial,
  simple:       Simple,
  specialist:   Specialist,
  twocolumn:    TwoColumn,
};

export default function ResumePreview({ resume, activeTemplate }) {
  const TemplateComponent = templateMap[activeTemplate?.toLowerCase()] || Classic;
  return <TemplateComponent resume={resume} />;
}