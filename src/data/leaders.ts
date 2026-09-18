import type { TranslationKey } from '../i18n/translations'
import marxPhoto from '../assets/leaders/karl-marx.jpeg'
import periyarPhoto from '../assets/leaders/periyar.jpeg'
import ambedkarPhoto from '../assets/leaders/ambedkar.jpeg'
import annaPhoto from '../assets/leaders/annadurai.jpeg'
import kalaignarPhoto from '../assets/leaders/kalaignar.jpg'
import stalinPhoto from '../assets/leaders/stalin.jpeg'
import subaveePhoto from '../assets/leaders/subavee.jpeg'
import bhagatSinghPhoto from '../assets/leaders/bhagat-singh.jpeg'

export interface Leader {
  id: string
  photo: string
  nameKey: TranslationKey
  roleKey: TranslationKey
  bioKey: TranslationKey
}

export const LEADERS: Leader[] = [
  { id: 'marx', photo: marxPhoto, nameKey: 'leaders.marx.name', roleKey: 'leaders.marx.role', bioKey: 'leaders.marx.bio' },
  { id: 'periyar', photo: periyarPhoto, nameKey: 'leaders.periyar.name', roleKey: 'leaders.periyar.role', bioKey: 'leaders.periyar.bio' },
  { id: 'ambedkar', photo: ambedkarPhoto, nameKey: 'leaders.ambedkar.name', roleKey: 'leaders.ambedkar.role', bioKey: 'leaders.ambedkar.bio' },
  { id: 'bhagat-singh', photo: bhagatSinghPhoto, nameKey: 'leaders.bhagatSingh.name', roleKey: 'leaders.bhagatSingh.role', bioKey: 'leaders.bhagatSingh.bio' },
  { id: 'anna', photo: annaPhoto, nameKey: 'leaders.anna.name', roleKey: 'leaders.anna.role', bioKey: 'leaders.anna.bio' },
  { id: 'kalaignar', photo: kalaignarPhoto, nameKey: 'leaders.kalaignar.name', roleKey: 'leaders.kalaignar.role', bioKey: 'leaders.kalaignar.bio' },
  { id: 'stalin', photo: stalinPhoto, nameKey: 'leaders.stalin.name', roleKey: 'leaders.stalin.role', bioKey: 'leaders.stalin.bio' },
  { id: 'subavee', photo: subaveePhoto, nameKey: 'leaders.subavee.name', roleKey: 'leaders.subavee.role', bioKey: 'leaders.subavee.bio' },
]
