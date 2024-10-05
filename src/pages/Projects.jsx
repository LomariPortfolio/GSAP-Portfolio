import { Construction } from "lucide-react"

export default function Projects() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          imageSrc="/Shutapp_2.gif"
          title="SHUTapp!"
          description="A Full-Stack web chat application built using NextJS, Prisma, Supabase and Bun."
          liveLink="https://shut-app.vercel.app/"
          sourceLink="https://github.com/LomariPortfolio/SHUTApp"
        />
        <ProjectCard
          imageSrc="/placeholder.svg?height=400&width=600"
          title="Future Project"
          description="This exciting new project is currently under construction. Stay tuned for updates!"
          isUnderConstruction
        />
        <ProjectCard
          imageSrc="/placeholder.svg?height=400&width=600"
          title="Future Project"
          description="This exciting new project is currently under construction. Stay tuned for updates!"
          isUnderConstruction
        />
      </div>
    </div>
  )
}


function ProjectCard({
  imageSrc,
  title,
  description,
  liveLink,
  sourceLink,
  isUnderConstruction = false
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border-2 h-full">
      <div className="relative flex-shrink-0" style={{ paddingBottom: "66.67%" }}>
        <img
          src={imageSrc}
          alt={isUnderConstruction ? "Under Construction" : title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {isUnderConstruction && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Construction className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4 bg-background">
        <h3 className="mb-2 text-lg font-semibold">
          {isUnderConstruction ? (
            <span className="cursor-not-allowed">{title}</span>
          ) : (
            <a href="#" className="hover:underline" prefetch={false}>
              {title}
            </a>
          )}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground flex-grow">{description}</p>
        <div className="flex gap-4">
          {isUnderConstruction ? (
            <span className="text-sm font-medium text-muted-foreground">
              Coming Soon
            </span>
          ) : (
            <>
              {liveLink && (
                <a
                  href={liveLink}
                  className="text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Live App
                </a>
              )}
              {sourceLink && (
                <a
                  href={sourceLink}
                  className="text-sm font-medium text-primary hover:underline"
                  prefetch={false}
                >
                  Source code
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}