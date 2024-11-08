import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="min-h-screen px-4 py-12 bg-background text-foreground sm:px-6 lg:px-8 custom-scrollbar">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <img
            src="/pfp.webp?height=150&width=150"
            alt="Your Name"
            width={150}
            height={150}
            className="object-cover w-48 h-48 mx-auto overflow-hidden rounded-full"
          />
          <h1 className="mt-4 text-4xl font-bold">Hamza Lomari</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Front-end Developer
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
            <p className="text-muted-foreground">
              Hello! I'm a passionate front-end developer with a love for
              creating efficient, scalable, and user-friendly web applications.
              With 2 years of experience in creating web apps as a hobby, I've
              worked on a variety of projects ranging from small prototypes to
              full-blown full stack web apps for learning purposes, but I mostly
              build front-end applications.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge className="hover:bg-red-600">HTML5</Badge>
              <Badge className="hover:bg-[#214ce5]">CSS3</Badge>
              <Badge className="hover:bg-yellow-300">Python</Badge>
              <Badge className="hover:bg-yellow-500">JavaScript</Badge>
              <Badge className="hover:bg-blue-600">TypeScript</Badge>
              <Badge className="hover:bg-[#23272f] dark:hover:text-muted-foreground">
                React
              </Badge>
              <Badge className="hover:invert">Next.js</Badge>
              <Badge className="hover:bg-[#57a745]">Node.js</Badge>
              <Badge className="hover:invert">Express</Badge>
              <Badge className="hover:bg-[#0f172a] dark:hover:text-muted-foreground">
                TailwindCSS
              </Badge>
              <Badge className="hover:bg-[#9a60fe] hover:text-yellow-500">
                ViteJS
              </Badge>
              <Badge className="hover:bg-[#c7bfb1] dark:hover:text-black hover:text-muted-foreground">
                BunJS
              </Badge>
              <Badge className="hover:bg-[#31648c]">PostgreSQL</Badge>
              <Badge className="hover:bg-[#f0931c]">MySQL</Badge>
              <Badge className="hover:bg-[#107bc4]">SQLite</Badge>
              <Badge className="hover:bg-[#090a15] dark:hover:text-muted-foreground">
                Prisma
              </Badge>
              <Badge className="hover:bg-[#0d1117] dark:hover:text-muted-foreground">
                Git
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-semibold">Learning ⏳</h3>
                <p className="text-muted-foreground">2023 - Present</p>
                <p>It's the fun part about this field! 🫠</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">Education</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-semibold">High school</h3>
                <p className="text-muted-foreground">2022 - 2023</p>
                <p>Baccalaureate in Physical science - French option</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Cité de Métiers et des Compétences - RSK</h3>
                <p className="text-muted-foreground">2023 - 2025</p>
                <p>Digital Infrastructure - CyberSecurity Option</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Let's Connect!</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/LomariPortfolio">
              <Button variant="outline" size="icon">
                <GithubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="http://">
              <Button variant="outline" size="icon">
                <LinkedinIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:lomari.hamza.it@gmail.com">
              <Button variant="outline" size="icon">
                <MailIcon className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
