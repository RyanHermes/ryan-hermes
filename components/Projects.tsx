const projects = [
  {
    title: 'Escape Java',
    description: 'A Java3D project designed to simulate an escape room.',
    imageUrl: 'escapejava.png',
    team: [
      { name: 'Tanzim Hossain', github: 'https://github.com/tanzimfh' },
      { name: 'Borhan Saflo', github: 'https://github.com/BorhanSaflo' },
      { name: 'Yousef Kart', github: 'https://github.com/YousefKart' },
      { name: 'Laila Albalkhi', github: 'https://github.com/lailaalbalkhi' },
    ],
  },
  {
    title: 'Tourify',
    description: 'A social travel Android mobile application.',
    imageUrl: 'tourify.png',
    team: [
      { name: 'Borhan Saflo', github: 'https://github.com/BorhanSaflo' },
      { name: 'Yousef Kart', github: 'https://github.com/YousefKart' },
      { name: 'Cam Vandy', github: 'https://github.com/camvandy' },
    ],
  },
]

export function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-10">
      <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl dark:from-neutral-600 dark:to-white">
        Projects
      </h2>
      <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 md:text-lg dark:text-neutral-400">
        Spanning tech and content, reflect adaptability and growth.
      </p>
      <div className="mt-10 grid grid-cols-1 justify-center gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-64 w-full rounded-lg object-cover shadow-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-neutral-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-center text-sm text-neutral-700 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                Team Members:
              </h4>
              <ul className="mt-2 space-y-1">
                {project.team.map((member, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-neutral-700 dark:text-neutral-400"
                  >
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {member.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
