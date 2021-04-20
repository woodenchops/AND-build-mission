import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Main() {
  return (
    <main>
        <section className="left-side container">
          <h1>left side</h1>
          <LeftSide/>
        </section>
        <section className="right-side container">
          <h1>right side</h1>
          <RightSide/>
        </section>
    </main>
  )
}

export default Main
