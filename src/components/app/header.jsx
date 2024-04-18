import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "../global/modeToggle";
import * as Icon from "lucide-react";
import { useState } from "react";

export const navLinks = [
  {
    name: "Home",
    icon: <Icon.HomeIcon />,
    url: "dashboard",
  },
  {
    name: "Actions",
    icon: <Icon.CableIcon />,
    url: "actions",
  },
  {
    name: "Spaces",
    icon: <Icon.DoorOpenIcon />,
    url: "spaces",
  },
  {
    name: "Settings",
    icon: <Icon.SettingsIcon />,
    url: "settings",
  },
];

export const Header = () => {
  const [showPanel, setShowPanel] = useState(false);

  const handleTogglePanel = () => {
    setShowPanel((prev) => !prev);
  };
  return (
    <header className="bg-background text-foreground border-muted relative z-[1000] flex h-full flex-col items-center justify-between border-r-[1px] px-3 py-6 transition-all duration-300 ease-in-out">
      <img src={logo} width={"20px"} className="mix-blend-difference" />
      <nav className="text-muted-foreground flex flex-col gap-10 text-sm">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.url}
            style={({ isActive, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#DFE154" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
            className="flex items-center gap-4 px-4 hover:text-white"
          >
            {link.icon}
            {showPanel ? link.name : null}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-4">
        <ModeToggle />
        <NavLink to="profile">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>TE</AvatarFallback>
          </Avatar>
        </NavLink>
      </div>

      <button
        onClick={handleTogglePanel}
        className="border-muted bg-background hover:bg-muted absolute -right-[20px] top-[60px] rounded-full border-[1px] p-2"
      >
        {!showPanel ? (
          <Icon.ChevronRight className="w-[20px]" />
        ) : (
          <Icon.ChevronLeft className="w-[20px]" />
        )}
      </button>
    </header>
  );
};
