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

export default function App() {
  const isMobile = IsMobile();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Tabs
        defaultValue="Home"
        className="relative z-50 flex flex-col items-center justify-between w-5/6 border-2 rounded-md h-5/6"
      >
        {!isMobile ? (
          <div className="absolute z-50 flex items-center justify-between w-full px-24">
            <div className="flex justify-center flex-grow">
              <TabsList>
                <TabsTrigger value="Home">Home</TabsTrigger>
                <TabsTrigger value="Projects">Projects</TabsTrigger>
                <TabsTrigger value="AboutMe">About me</TabsTrigger>
                <TabsTrigger value="ContactMe">Contact me</TabsTrigger>
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
                  <Button variant="outline">
                    <TabsTrigger value="ContactMe">Contact me</TabsTrigger>
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
        <div className="flex-1 w-full border-blue-800 *:w-full *:h-full overflow-y-auto">
          <TabsContent value="Home">
            <Home />
          </TabsContent>
          <TabsContent value="Projects">
            <Projects />
          </TabsContent>
          <TabsContent value="AboutMe">About me</TabsContent>
          <TabsContent value="ContactMe">Contact me</TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
