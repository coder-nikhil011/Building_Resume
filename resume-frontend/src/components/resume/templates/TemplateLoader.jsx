import React from "react";

import Classic from "./Classic";
import Modern from "./Modern";
import Professional from "./Professional";
import Executive from "./Executive";
import Elegant from "./Elegant";
import Creative from "./Creative";
import Corporate from "./Corporate";
import Startup from "./Startup";
import Tech from "./Tech";

import Designer from "./Designer";
import Portfolio from "./Portfolio";
import Bold from "./Bold";
import Gradient from "./Gradient";

import Timeline from "./Timeline";
import Sidebar from "./Sidebar";
import Compact from "./Compact";
import Minimal from "./Minimal";

import Clean from "./Clean";
import Simple from "./Simple";
import Clear from "./Clear";

import Specialist from "./Specialist";
import Managerial from "./Managerial";
import Primeats from "./PrimeATS";
import Twocolumn from "./TwoColumn";

import ATSBasic from "./ATSBasic";
import ATSModern from "./ATSModern";
import ATSPro from "./ATSPro";

const templates = {
  classic: Classic,
  modern: Modern,
  professional: Professional,
  executive: Executive,
  elegant: Elegant,
  creative: Creative,
  corporate: Corporate,
  startup: Startup,
  tech: Tech,

  designer: Designer,
  portfolio: Portfolio,
  bold: Bold,
  gradient: Gradient,

  timeline: Timeline,
  sidebar: Sidebar,
  compact: Compact,
  minimal: Minimal,

  clean: Clean,
  simple: Simple,
  clear: Clear,

  specialist: Specialist,
  managerial: Managerial,
  primeats: Primeats,
  twocolumn: Twocolumn,

  atsbasic: ATSBasic,
  atsmodern: ATSModern,
  atspro: ATSPro
};

export default function TemplateLoader({ template, resume }) {

  const SelectedTemplate = templates[template] || Classic;

  return <SelectedTemplate resume={resume} />;

}