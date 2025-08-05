import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Timeline } from "@/components/ui/timeline";

export function TimelineInfo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            <Link
              href="https://mykoch.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <b>KōCH Technologies</b>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
            </Link>
            <br />
            <i>Frontend Web Developer · Internship</i>
            <br />
            <p>
              Developed responsive web pages and collaborated with design and
              back-end teams to enhance user experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/kochlogo.jpg"
              alt="KōCH Technologies logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            <p>
              <b>University of Windsor</b>
            </p>
            <br />
            <i>Teaching Assistant</i>
            <br />
            <p>
              Facilitated learning for hundreds of students, enhancing
              comprehension in software development courses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/uwin.avif"
              alt="University of Windsor logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <div className="my-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            <Link
              href="https://propertyrevive.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <b>Property Revive</b>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
            </Link>
            <br />
            <i>Software Developer · Internship</i>
            <br />
            <p>
              •Facilitated learning for hundreds of students, enhancing
              comprehension in software development courses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/propertyrevive.png"
              alt="KōCH Technologies logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
