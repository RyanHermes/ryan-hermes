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
              className="flex items-center transition-colors hover:text-blue-400"
            >
              <b>KōCH Technologies</b>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
            </Link>
            <br />
            <i>Frontend Web Developer · Internship · May 2024 - August 2024</i>
            <br />
            <p className="mt-2">
              Developed responsive web pages using <strong>React</strong> and
              modern frontend technologies. Collaborated closely with design and
              backend teams to enhance user experience and implement new
              features. Contributed to improving application performance and
              user interface design using
              <strong> TypeScript</strong>, <strong>Tailwind CSS</strong>, and{" "}
              <strong>Node.js</strong>.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-blue-600/30 bg-blue-600/20 px-2 py-1 text-xs text-blue-300">
                React
              </span>
              <span className="rounded-md border border-blue-600/30 bg-blue-600/20 px-2 py-1 text-xs text-blue-300">
                TypeScript
              </span>
              <span className="rounded-md border border-blue-600/30 bg-blue-600/20 px-2 py-1 text-xs text-blue-300">
                Tailwind CSS
              </span>
              <span className="rounded-md border border-blue-600/30 bg-blue-600/20 px-2 py-1 text-xs text-blue-300">
                Node.js
              </span>
              <span className="rounded-md border border-blue-600/30 bg-blue-600/20 px-2 py-1 text-xs text-blue-300">
                Web Development
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/kochlogo.jpg"
              alt="KōCH Technologies logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 md:h-44 lg:h-60"
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
            <i>Teaching Assistant · September 2023 - April 2024</i>
            <br />
            <p className="mt-2">
              Supported <strong>hundreds of students</strong> in Computer
              Science courses including
              <strong> COMP-1000</strong> (Key Concepts in Computer Science) and{" "}
              <strong>COMP-1400</strong>
              (Intro to Programming). Facilitated learning in software
              development and programming concepts through one-on-one
              assistance, lab sessions, and code review sessions. Enhanced
              student comprehension and academic success in{" "}
              <strong>C programming</strong> and fundamental CS concepts.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-green-600/30 bg-green-600/20 px-2 py-1 text-xs text-green-300">
                C Programming
              </span>
              <span className="rounded-md border border-green-600/30 bg-green-600/20 px-2 py-1 text-xs text-green-300">
                Teaching
              </span>
              <span className="rounded-md border border-green-600/30 bg-green-600/20 px-2 py-1 text-xs text-green-300">
                Mentoring
              </span>
              <span className="rounded-md border border-green-600/30 bg-green-600/20 px-2 py-1 text-xs text-green-300">
                Code Review
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/uwin.avif"
              alt="University of Windsor logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 md:h-44 lg:h-60"
            />
          </div>
          <div className="my-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            <Link
              href="https://property-revive.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-colors hover:text-blue-400"
            >
              <b>Property Revive</b>
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
            </Link>
            <br />
            <i>Software Developer · Internship · May 2023 - August 2023</i>
            <br />
            <p className="mt-2">
              Developed and maintained web applications for property management
              systems using <strong>JavaScript</strong>,{" "}
              <strong>HTML/CSS</strong>, and modern frameworks. Implemented
              features that significantly improved user workflow efficiency and
              data processing capabilities. Worked with{" "}
              <strong>database management</strong> and
              <strong>API integration</strong> to deliver robust, scalable
              solutions for real estate professionals.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-purple-600/30 bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                JavaScript
              </span>
              <span className="rounded-md border border-purple-600/30 bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                HTML/CSS
              </span>
              <span className="rounded-md border border-purple-600/30 bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                Database Management
              </span>
              <span className="rounded-md border border-purple-600/30 bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                API Integration
              </span>
              <span className="rounded-md border border-purple-600/30 bg-purple-600/20 px-2 py-1 text-xs text-purple-300">
                Web Development
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/propertyrevive.png"
              alt="Property Revive logo"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 md:h-44 lg:h-60"
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
