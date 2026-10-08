import type { ComponentType } from "react";
import {
  Boxes,
  ChartSpline,
  HardDrive,
  MapPinned,
  QrCode,
  Wrench,
} from "lucide-react";
import TrafficLightIcon from "./TrafficLightIcon";

type GlyphComp = ComponentType<{
  size?: number;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
}>;

/** Glyphs for the six ATMS tools, keyed by the names in portfolio.ts. */
const toolIcons: Record<string, GlyphComp> = {
  "Traffic Data Analysis Tool": ChartSpline,
  "Traffic Violation Manager (TVM)": TrafficLightIcon,
  "Hardware Serial Manager (HSM)": QrCode,
  "SMART Drive Health Monitor": HardDrive,
  "Spare Usage": Boxes,
  "Fleet Map": MapPinned,
};

export default function ToolIcon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const Icon = toolIcons[name] ?? Wrench;
  return <Icon size={size} strokeWidth={1.6} aria-hidden />;
}
