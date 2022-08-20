import React from "react";
import Logo from './Logo'
import styles from './Balance.module.scss'

export default function Balance (props){

  // const totalBalance = props.data.map(item => item.amount).reduce((acc, item) => acc + item, 0) //921.48

  return (
    <div className={styles.balance}>
      
      <h2 className={styles['balance__title']}>My Balance</h2>
      <span className={styles['balance__total']}>$921.48</span>

      <Logo className={[styles['balance__logo']]}/>


      
    </div>
  )

}