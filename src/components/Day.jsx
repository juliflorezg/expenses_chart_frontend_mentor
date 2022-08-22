import React, { useState } from 'react'
import styles from './Day.module.scss'

export default function Day({
  amount,
  day,
  currentWeekDay,
  isCurrentDay,
  maxAmount,
  changeCurrentDay,
}) {
  const [isAmountVisible, setIsAmountVisible] = useState(false)

  const mouseOverHandler = () => {
    setIsAmountVisible(true)
  }
  const mouseLeaveHandler = () => {
    setIsAmountVisible(false)
    // setIsAmountVisible(true)
  }
  const clickHandler = () => {
    changeCurrentDay(day)
    setIsAmountVisible(true)
  }

  console.log({ isCurrentDay })
  console.log({ day })
  console.log({ currentWeekDay })
  console.log({ maxAmount })

  console.log('comparing currentDay with day value:', day === currentWeekDay)

  return (
    <li className={styles.day}>
      <div className={styles['day__bar-container']}>
        {isAmountVisible && (
          <div
            className={styles['day__amount']}
            style={{
              bottom: `calc(${(amount * 100) / maxAmount}% + 5px)`,
            }}
          >
            ${amount}
          </div>
        )}
        <div
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          onClick={clickHandler}
          className={`${styles['day__bar']} ${
            isCurrentDay && styles['day__bar--current']
          }`}
          style={{ height: `${(amount * 100) / maxAmount}%` }}
        ></div>
      </div>
      <span
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
        className={styles['day__day']}
      >
        {day}
      </span>
    </li>
  )
}
