/**
 * Google Form connection for the "Join DMP" membership form.
 *
 * Connected to the DMP Membership Registration form.
 * To change fields later: create a fresh "Get pre-filled link" from the live
 * form (3-dot menu -> Get pre-filled link) and update the IDs below to match.
 */
export const JOIN_FORM_ACTION_ID: string = '1FAIpQLSfpj-FZdEsWZzuwZ8ri_UfNe4BpKPBQsNWeEerMFxnyST66pw'

export const JOIN_FORM_ENTRY_IDS: Record<
  'fullName' | 'age' | 'gender' | 'phone' | 'email' | 'profession' | 'education' | 'bloodGroup' | 'address' | 'district' | 'state' | 'message',
  string
> = {
  fullName: '435147045',
  age: '1594415647',
  gender: '1118143057',
  phone: '1610672264',
  email: '1091636795',
  profession: '1611934680',
  education: '512886158',
  bloodGroup: '1105811773',
  address: '223711279',
  district: '364405511',
  state: '808274340',
  message: '2009070282',
}

export const IS_JOIN_FORM_CONFIGURED =
  JOIN_FORM_ACTION_ID !== 'REPLACE_WITH_YOUR_FORM_ID' &&
  Object.values(JOIN_FORM_ENTRY_IDS).every((id) => id !== 'REPLACE_WITH_ENTRY_ID')

export function getJoinFormActionUrl() {
  return `https://docs.google.com/forms/d/e/${JOIN_FORM_ACTION_ID}/formResponse`
}
