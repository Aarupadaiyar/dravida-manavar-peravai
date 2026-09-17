import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { UserPlus, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import { Reveal } from '../components/core/Reveal'
import { FORUMS } from '../data/forums'
import { useLang } from '../i18n/LanguageContext'
import { JOIN_FORM_ENTRY_IDS, IS_JOIN_FORM_CONFIGURED, getJoinFormActionUrl } from '../config/joinForm'

const BLOOD_GROUPS = ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-']
const OTHER_VALUE = '__other__'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Join() {
  const { t } = useLang()
  const [searchParams] = useSearchParams()
  const presetForum = searchParams.get('forum') ?? ''
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    gender: '',
    genderOther: '',
    phone: '',
    email: '',
    profession: '',
    education: '',
    bloodGroup: '',
    bloodGroupOther: '',
    address: '',
    district: '',
    state: '',
    forumInterest: presetForum,
    message: '',
  })

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!IS_JOIN_FORM_CONFIGURED) return

    setStatus('submitting')
    try {
      const genderValue = form.gender === OTHER_VALUE ? form.genderOther : form.gender
      const bloodGroupValue = form.bloodGroup === OTHER_VALUE ? form.bloodGroupOther : form.bloodGroup
      const messageValue =
        form.forumInterest && form.forumInterest !== t('join.forumNotSure')
          ? `[${t('join.forumInterest')}: ${form.forumInterest}]\n\n${form.message}`
          : form.message

      const body = new URLSearchParams()
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.fullName}`, form.fullName)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.age}`, form.age)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.gender}`, genderValue)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.phone}`, form.phone)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.email}`, form.email)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.profession}`, form.profession)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.education}`, form.education)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.bloodGroup}`, bloodGroupValue)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.address}`, form.address)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.district}`, form.district)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.state}`, form.state)
      body.append(`entry.${JOIN_FORM_ENTRY_IDS.message}`, messageValue)

      await fetch(getJoinFormActionUrl(), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      // Google Forms responds opaquely under no-cors, so a resolved fetch is our success signal.
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="section">
        <div className="wrap">
          <Reveal className="join-success">
            <CheckCircle2 size={48} className="join-success-icon" />
            <h1 className="section-title">{t('join.successTitle')}</h1>
            <p>{t('join.successBody')}</p>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <UserPlus size={22} />
          </span>
          <div className="eyebrow">{t('join.eyebrow')}</div>
          <h1 className="section-title">{t('join.title')}</h1>
          <p className="page-header-subtitle">{t('join.subtitle')}</p>
        </Reveal>

        {!IS_JOIN_FORM_CONFIGURED && <div className="join-config-warning">{t('join.configPending')}</div>}

        <Reveal className="join-form-wrap" delayMs={80}>
          <form className="join-form" onSubmit={handleSubmit}>
            <div className="join-field">
              <label>
                {t('join.fullName')} <span className="join-required">{t('join.required')}</span>
              </label>
              <input type="text" required value={form.fullName} onChange={update('fullName')} />
            </div>

            <div className="join-field-row">
              <div className="join-field">
                <label>
                  {t('join.age')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input type="number" min={13} max={120} required value={form.age} onChange={update('age')} />
              </div>
              <div className="join-field">
                <label>
                  {t('join.gender')} <span className="join-required">{t('join.required')}</span>
                </label>
                <select required value={form.gender} onChange={update('gender')}>
                  <option value=""></option>
                  <option value={t('join.genderMale')}>{t('join.genderMale')}</option>
                  <option value={t('join.genderFemale')}>{t('join.genderFemale')}</option>
                  <option value={t('join.genderTransgender')}>{t('join.genderTransgender')}</option>
                  <option value={OTHER_VALUE}>{t('join.genderOther')}</option>
                </select>
                {form.gender === OTHER_VALUE && (
                  <input
                    type="text"
                    required
                    placeholder={t('join.otherSpecify')}
                    value={form.genderOther}
                    onChange={update('genderOther')}
                  />
                )}
              </div>
            </div>

            <div className="join-field-row">
              <div className="join-field">
                <label>{t('join.phone')}</label>
                <input type="tel" value={form.phone} onChange={update('phone')} />
              </div>
              <div className="join-field">
                <label>
                  {t('join.email')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input type="email" required value={form.email} onChange={update('email')} />
              </div>
            </div>

            <div className="join-field-row">
              <div className="join-field">
                <label>
                  {t('join.profession')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input type="text" required value={form.profession} onChange={update('profession')} />
              </div>
              <div className="join-field">
                <label>
                  {t('join.education')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('join.educationHint')}
                  value={form.education}
                  onChange={update('education')}
                />
              </div>
            </div>

            <div className="join-field">
              <label>
                {t('join.bloodGroup')} <span className="join-required">{t('join.required')}</span>
              </label>
              <select required value={form.bloodGroup} onChange={update('bloodGroup')}>
                <option value=""></option>
                {BLOOD_GROUPS.map((bg) => (
                  <option key={bg} value={bg}>
                    {bg}
                  </option>
                ))}
                <option value={OTHER_VALUE}>{t('join.genderOther')}</option>
              </select>
              {form.bloodGroup === OTHER_VALUE && (
                <input
                  type="text"
                  required
                  placeholder={t('join.otherSpecify')}
                  value={form.bloodGroupOther}
                  onChange={update('bloodGroupOther')}
                />
              )}
            </div>

            <div className="join-field">
              <label>
                {t('join.address')} <span className="join-required">{t('join.required')}</span>
              </label>
              <textarea rows={3} required value={form.address} onChange={update('address')} />
            </div>

            <div className="join-field-row">
              <div className="join-field">
                <label>
                  {t('join.district')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input type="text" required value={form.district} onChange={update('district')} />
              </div>
              <div className="join-field">
                <label>
                  {t('join.state')} <span className="join-required">{t('join.required')}</span>
                </label>
                <input type="text" required value={form.state} onChange={update('state')} />
              </div>
            </div>

            <div className="join-field">
              <label>{t('join.forumInterest')}</label>
              <select value={form.forumInterest} onChange={update('forumInterest')}>
                <option value={t('join.forumNotSure')}>{t('join.forumNotSure')}</option>
                {FORUMS.map((forum) => (
                  <option key={forum.id} value={forum.title}>
                    {forum.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="join-field">
              <label>
                {t('join.message')} <span className="join-required">{t('join.required')}</span>
              </label>
              <textarea rows={3} required value={form.message} onChange={update('message')} />
            </div>

            <p className="join-consent-note">{t('join.consentNote')}</p>

            {status === 'error' && <p className="join-error">{t('join.errorBody')}</p>}

            <Button type="submit" disabled={status === 'submitting' || !IS_JOIN_FORM_CONFIGURED}>
              {status === 'submitting' ? t('join.submitting') : t('join.submit')}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
