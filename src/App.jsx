import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import IsMobile from "./lib/isMobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./components/ui/button";
import AboutMe from "./pages/AboutMe";

export default function App() {
  const isMobile = IsMobile();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Tabs
        defaultValue="Home"
        className="relative z-50 flex flex-col items-center justify-between w-5/6 overflow-x-hidden overflow-y-auto border-2 rounded-md h-5/6"
      >
        {!isMobile ? (
          <div className="fixed top-50 left-0 right-0 flex items-center justify-between w-full px-48 z-[9999]">
            <div className="flex justify-center flex-grow">
              <TabsList>
                <TabsTrigger value="Home">Home</TabsTrigger>
                <TabsTrigger value="Projects">Projects</TabsTrigger>
                <TabsTrigger value="AboutMe">About me</TabsTrigger>
              </TabsList>
            </div>
            <ModeToggle />
          </div>
        ) : (
          <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerDescription>Where do you want to go?</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="flex items-center justify-center">
                <TabsList className="flex flex-col h-full w-fit bg-inherit *:w-full p-0">
                  <Button variant="outline">
                    <TabsTrigger value="Home">Home</TabsTrigger>
                  </Button>
                  <Button variant="outline">
                    <TabsTrigger value="Projects">Projects</TabsTrigger>
                  </Button>
                  <Button variant="outline">
                    <TabsTrigger value="AboutMe">About me</TabsTrigger>
                  </Button>
                  <ModeToggle />
                </TabsList>
                <DrawerClose>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
        <div className="flex-1 w-full border-blue-800 *:w-full *:h-full">
          <TabsContent value="Home">
            <Home />
          </TabsContent>
          <TabsContent value="Projects">
            <Projects />
          </TabsContent>
          <TabsContent value="AboutMe">
            <AboutMe />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
