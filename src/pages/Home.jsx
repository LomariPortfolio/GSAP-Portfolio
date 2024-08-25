import gsap from "gsap";
import { useRef, useEffect } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { Boxes } from "@/components/ui/background-boxes";
import IsMobile from "@/lib/isMobile";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(TextPlugin, CustomEase);

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDirection = () => (Math.random() < 0.5 ? -1 : 1);
const getRandomColor = () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color.length === 7 ? color : `${color}0`; // Ensure valid hex color
};

export default function Home() {
  const emoji = useRef(null);
  const namePanel = useRef(null);
  const myName = useRef(null);
  const grid = useRef(null);
  const isMobile = IsMobile();

  useGSAP(() => {
    if (!isMobile) {
      const nameLetters = myName.current.querySelectorAll("span");

      gsap.from(emoji.current, {
        delay: 3,
        duration: 1.66,
        text: "",
      });

      gsap.from(namePanel.current, {
        duration: 0.66,
        y: 50,
        opacity: 0,
      });

      gsap.from(nameLetters, {
        y: (index) => getRandomInt(50, 100) * getRandomDirection(),
        color: getRandomColor(),
        rotation: 10,
        duration: 2,
        stagger: 0.1,
        opacity: 0,
        ease: "power3.inOut",
      });

      gsap.to(nameLetters, {
        color: "#FFFFFF",
        duration: 15,
        delay: 3,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.126,0.382 0.168,0.524 0.326,0.672 0.518,0.852 0.568,-0.386 1,0.553"
        ),
      });

      gsap.from(grid.current, {
        duration: 0.66,
        delay: 6,
        opacity: 0,
        y: 50,
      });
    }
  }, [isMobile]);

  return (
    <div className="relative flex items-center justify-center w-full h-full px-16 mx-auto overflow-hidden lg:justify-around">
      {!isMobile && (
        <div ref={grid} className="absolute inset-0 p-6">
          <Boxes className="absolute inset-0" />
        </div>
      )}

      <div className="flex-grow px-5 lg:px-0" ref={namePanel}>
        <h1 className="text-3xl lg:text-6xl">
          <span className="text-xl">Hi!👋</span>
          <br />
          <span className="lg:-ml-1">My name is: </span>
          {!isMobile ? (
            <span ref={myName} className="overflow-hidden">
              {"Hamza Lomari".split("").map((char, idx) => (
                <span key={idx} className="inline-block whitespace-pre">
                  {char}
                </span>
              ))}
            </span>
          ) : (
            <span className="inline-block text-4xl font-bold whitespace-pre lg:text-6xl lg:font-normal">
              Hamza Lomari
            </span>
          )}
        </h1>
        <p className="text-lg italic whitespace-pre lg:not-italic lg:text-2xl">
          Creative front-end developer.{" "}
          {isMobile && <span className="not-italic">{"<😎/>"}</span>}
        </p>
      </div>

      <div className="z-50 w-1/3">
        {!isMobile && (
          <h2 className="text-9xl" ref={emoji}>
            {"<😎/>"}
          </h2>
        )}
      </div>
    </div>
  );
}
