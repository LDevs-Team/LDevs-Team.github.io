import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition,  } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export function Card({icon, description, title, githubUrl}: {icon:IconDefinition, description:string, title:string, githubUrl:string}) {
  return (
    <div className="bg-neutral-800 m-4 rounded-lg max-w-md h-40 p-5">
      <h2 className="flex items-center">
        <FontAwesomeIcon icon={icon} size="2xl" color="#a3a3a3" />
        <span className="m-2 font-bold text-xl">{title}</span>
        <Link className="ml-auto pr-0" href={githubUrl}><FontAwesomeIcon className="mr-auto" icon={faGithub}></FontAwesomeIcon></Link>
      </h2>
      {description}

      
    </div>
  );
}
