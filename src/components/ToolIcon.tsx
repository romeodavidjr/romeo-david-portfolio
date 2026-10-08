import {
  Boxes,
  ChartSpline,
  HardDrive,
  MapPinned,
  ScanBarcode,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/** Glyphs for the six ATMS tools, keyed by the names in portfolio.ts. */
const toolIcons: Record<string, LucideIcon> = {
  "Traffic Data Analysis Tool": ChartSpline,
  "Traffic Violation Manager (TVM)": ScanSearch,
  "Hardware Serial Manager (HSM)": ScanBarcode,
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
