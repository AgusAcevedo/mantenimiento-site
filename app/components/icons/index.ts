
import { WrenchIcon } from './WrenchIcon'
import { ShieldIcon } from './ShieldIcon'
import { GearIcon } from './GearIcon'
import { BoltIcon } from './BoltIcon'
import { PumpIcon } from './PumpIcon'
import { PlugIcon } from './PlugIcon'
import { CalendarIcon } from './CalendarIcon'
import { MenuIcon } from './MenuIcon'
import { CloseIcon } from './CloseIcon'
import { FaucetIcon } from './Faucet'
import { BathroomIcon } from './Bathroom'
import { PipelineIcon } from './Pipeline'
import { AirConditionerIcon } from './AirConditioner'
import AirConditioner2Icon from './AirConditioner2'
import VirusIcon from './Virus'
import AirFilterIcon from './AirFilter'
import GaugeIcon from './Gauge'
import FireExtinguisherIcon from './FireExtinguisher'
import SmokeDetectorIcon from './SmokeDetector'
import SprinklerIcon from './Sprinkler'
import FireshieldIcon from './Fireshield'
import PaintIcon from './Paint'
import WorkerIcon from './Worker'
import TimeIcon from './Time'
import ElevatorIcon from './Elevator'
import WarningIcon from './Warning'

export const iconMap = {
  wrench: WrenchIcon,
  shield: ShieldIcon,
  gear: GearIcon,
  bolt: BoltIcon,
  pump: PumpIcon,
  plug: PlugIcon,
  calendar: CalendarIcon,
  menu: MenuIcon,
  close: CloseIcon,
  pipeline: PipelineIcon,
  faucet: FaucetIcon,
  bathroom: BathroomIcon,
  airconditioner: AirConditionerIcon,
  airconditioner2: AirConditioner2Icon,
  virus: VirusIcon,
  airfilter: AirFilterIcon,
  gauge: GaugeIcon,
  fireextinguisher: FireExtinguisherIcon,
  smokedetector: SmokeDetectorIcon,
  sprinkler: SprinklerIcon,
  fireshield: FireshieldIcon,
  paint: PaintIcon,
  worker: WorkerIcon,
  warning: WarningIcon,
  time: TimeIcon,
  elevator: ElevatorIcon,
} as const

export type IconKey = keyof typeof iconMap

// Keep only the named export `iconMap` to avoid default import ambiguity.
