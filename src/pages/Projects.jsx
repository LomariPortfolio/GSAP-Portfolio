export default function Projects() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <a href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 1"
              className="object-cover w-full h-48"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </a>
          <div className="p-4 bg-background">
            <h3 className="mb-2 text-lg font-semibold">
              <a href="#" className="hover:underline" prefetch={false}>
                Project 1
              </a>
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              A brief description of Project 1.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                Live Site
              </a>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <a href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 2"
              className="object-cover w-full h-48"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </a>
          <div className="p-4 bg-background">
            <h3 className="mb-2 text-lg font-semibold">
              <a href="#" className="hover:underline" prefetch={false}>
                Project 2
              </a>
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              A brief description of Project 2.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                Live Site
              </a>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <a href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Project 3"
              className="object-cover w-full h-48"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </a>
          <div className="p-4 bg-background">
            <h3 className="mb-2 text-lg font-semibold">
              <a href="#" className="hover:underline" prefetch={false}>
                Project 3
              </a>
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              A brief description of Project 3.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                Live Site
              </a>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}