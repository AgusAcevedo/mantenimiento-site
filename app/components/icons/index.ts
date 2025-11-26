
import { WrenchIcon } from './WrenchIcon'
import { ShieldIcon } from './ShieldIcon'
import { GearIcon } from './GearIcon'
import { BoltIcon } from './BoltIcon'
import { PumpIcon } from './PumpIcon'
import { PlugIcon } from './PlugIcon'
import { CalendarIcon } from './CalendarIcon'
import { MenuIcon } from './MenuIcon'
import { CloseIcon } from './CloseIcon'

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
} as const

export type IconKey = keyof typeof iconMap

// Keep only the named export `iconMap` to avoid default import ambiguity.
