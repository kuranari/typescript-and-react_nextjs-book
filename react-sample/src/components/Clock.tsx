import React, { useState, useEffect } from "react";

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  UK = 'en-GB',
  JP = 'ja-JP'
}

const getLocaleFromString = (text: string) => {
  switch(text) {
    case Locale.US:
      return Locale.US
    case Locale.UK:
      return Locale.UK
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  useEffect(() => {
    console.log('[useEffect] Set timer')
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    console.log(`[useEffect] Load Locale: ${savedLocale}`)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  const localeChangeHandler = (localeString: string) => {
    const locale = getLocaleFromString(localeString)
    setLocale(locale)
    localStorage.setItem(KEY_LOCALE, locale)
  }

  // useEffect(() => {
  //   localStorage.setItem(KEY_LOCALE, locale)
  //   console.log(`[useEffect] Save Locale: ${locale}`)
  // }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={e => localeChangeHandler(e.target.value)}>

          { Object.values(Locale).map(locale => {
            return (<option value={locale} key={locale}>{locale}</option>)
          })}
        </select>
      </p>
    </div>
  )
}

export default Clock