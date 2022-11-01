import Greeting from '../components/greeting'
import * as React from 'react'
// Renderen van de <Greeting> component

const SayHello = () => {
    return (
      <div>
        <Greeting name="Megan" />
        <Greeting name="Obinna" />
        <Greeting name="Generosa" />
      </div>
    )
  }