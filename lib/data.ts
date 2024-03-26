import {
  CalendarDays,
  FolderOpen,
  Goal,
  Home,
  Kanban,
  MessageCircle,
  Package2,
  TimerIcon,
} from "lucide-react";
import { createElement } from "react";

export const navLinks = [
  {
    href: "#",
    icon: createElement(Home, { className: "h-4 w-4" }),
    label: "Home",
  },
  {
    href: "#",
    icon: createElement(CalendarDays, { className: "h-4 w-4" }),
    label: "Calendar",
  },
  {
    href: "#",
    icon: createElement(Kanban, { className: "h-4 w-4" }),
    label: "Kanban",
  },
  {
    href: "#",
    icon: createElement(FolderOpen, { className: "h-4 w-4" }),
    label: "Files",
  },
] as const;

{
  /* 

  NON MVP FEATURE

  {
    href: "#",
    icon: createElement(MessageCircle, { className: "h-4 w-4" }),
    label: "Messages",
  },

*/
}

export const features = [
  {
    icon: createElement(CalendarDays, { className: "h-8 w-8" }),
    feature: "Calendar",
    description: "Plan your study sessions and set reminders."
  },
  {
    icon: createElement(Kanban, { className: "h-8 w-8" }),
    feature: "Kanban",
    description: "Keep tasks organised and balance your studies with life more effectively."
  },
  {
    icon: createElement(FolderOpen, { className: "h-8 w-8" }),
    feature: "Files",
    description: "Upload and organize your learning materials."
  },
  {
    icon: createElement(MessageCircle, { className: "h-8 w-8" }),
    feature: "Messages",
    description: "Connect with other developers and share resources."
  },
  {
    icon: createElement(TimerIcon, { className: "h-8 w-8" }),
    feature: "Pomodoro Timer",
    description: "Stay focused and study efficiently, decrease burnout and improve mood."
  },
  {
    icon: createElement(Goal, { className: "h-8 w-8" }),
    feature: "Goals",
    description: "Set goals and track your progress, enjoy the dopamine hits of small wins."
  },
  {
    icon: createElement(Package2, { className: "h-8 w-8" }),
    feature: "New Features",
    description: "If there are any features you would like to see added or think would be a useful addition, contact me on any form of socials, any ideas and feedback about the platform are welcomed."
  }
] as const;