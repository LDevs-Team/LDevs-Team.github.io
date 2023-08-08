import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
export function Card({icon, description, title}: {icon:IconDefinition, description:string, title:string}) {
  return (
    <div className="bg-neutral-800 m-4 rounded-lg max-w-md h-60 p-5">
      <h2>
        <FontAwesomeIcon icon={icon} size="2xl" color="#a3a3a3" />
        <span className="m-2 font-bold text-xl">{title}</span>
      </h2>
      {description}
    </div>
  );
}
