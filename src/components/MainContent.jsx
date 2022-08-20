import React from 'react'
import Day from './Day'
import styles from './MainContent.module.scss'

export default function MainContent(props) {
  console.log(props.days)
  return (
    <div className={styles['main-content']}>
      <h1 className={styles['main-content__title']}> Spending - Last 7 days</h1>

      <ul className={styles['main-content__day-list']}>
        {props.days.map(day => (
          <Day
            amount={day.amount}
            day={day.day}
            isCurrentDay={day === props.currentWeekDay}
          />
        ))}
        <li>{props.currentWeekDay}</li>
      </ul>

      <div className={styles['main-content__summary']}>
        <div>
          <span className={styles['main-content__summary-title']}>
            Total this month
          </span>
          <span className={styles['main-content__summary-total']}>$478.33</span>
        </div>
        <div>
          <span className={styles['main-content__summary-percentage']}>
            +2.4%
          </span>
          <span className={styles['main-content__summary-label']}>
            from last month
          </span>
        </div>
      </div>
    </div>

    // <></>
  )
}
