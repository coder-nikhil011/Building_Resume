import ats from "../../../assets/templates/ats.png";
import bold from "../../../assets/templates/bold.png";
import classic from "../../../assets/templates/classic.png";
import clean from "../../../assets/templates/clean.png";
import clear from "../../../assets/templates/clear.png";
import compact from "../../../assets/templates/compact.png";
import corporate from "../../../assets/templates/corporate.png";
import creative from "../../../assets/templates/creative.png";
import designer from "../../../assets/templates/designer.png";
import elegant from "../../../assets/templates/elegant.png";
import executive from "../../../assets/templates/executive.png";
import gradient from "../../../assets/templates/gradient.png";
import minimal from "../../../assets/templates/minimal.png";
import modern from "../../../assets/templates/modern.png";
import portfolio from "../../../assets/templates/portfolio.png";
import professional from "../../../assets/templates/professional.png";
import pureats from "../../../assets/templates/pureats.png";
import sidebar from "../../../assets/templates/sidebar.png";
import stylish from "../../../assets/templates/stylish.png";
import timeline from "../../../assets/templates/timeline.png";
import React from "react";

const templates = [
  { name: "ats", image: ats },
  { name: "bold", image: bold },
  { name: "classic", image: classic },
  { name: "clean", image: clean },
  { name: "clear", image: clear },
  { name: "compact", image: compact },
  { name: "corporate", image: corporate },
  { name: "creative", image: creative },
  { name: "designer", image: designer },
  { name: "elegant", image: elegant },
  { name: "executive", image: executive },
  { name: "gradient", image: gradient },
  { name: "minimal", image: minimal },
  { name: "modern", image: modern },
  { name: "portfolio", image: portfolio },
  { name: "professional", image: professional },
  { name: "pureats", image: pureats },
  { name: "sidebar", image: sidebar },
  { name: "stylish", image: stylish },
  { name: "timeline", image: timeline },
];

export default function TemplateGallery({ setTemplate }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {templates.map((t) => (
        <div
          key={t.name}
          onClick={() => setTemplate(t.name)}
          className="cursor-pointer border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <img src={t.image} alt={t.name} className="w-full" />
          <p className="text-center py-2 capitalize">{t.name}</p>
        </div>
      ))}
    </div>
  );
}