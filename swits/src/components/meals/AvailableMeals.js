import React, { useEffect, useState } from 'react'

import classes from '../meals/AvailableMeals.module.css'
import Card from '../UL/Card'
import MealItem from './mealitem/MealItem'

export default function AvailableMeals(props) {
  const [meeals, setmeals] = useState([])
  const [isloading, setisloading] = useState(true)
  const [errors, seterrors] = useState(false)
  useEffect(() => {
    const fetchMeals = async () => {
      const respons = await fetch(
        'https://react-http-b5e16-default-rtdb.firebaseio.com/meals.json',
      )
      const responseData = await respons.json()
      if (!respons.ok) {
        throw new Error('can not get data')
      }
      const lodemeals = []
      for (const key in responseData) {
        lodemeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setisloading(false)

      setmeals(lodemeals)
    }

    fetchMeals().catch((error) => {
      setisloading(false)
      seterrors(error.message)
    })
  }, [])
  if (isloading) {
    return (
      <section className={classes.islodingg}>
        <h2>loading...</h2>
      </section>
    )
  }
  if (errors) {
    return (
      <section className={classes.islodingg}>
        <h2>{errors}</h2>
      </section>
    )
  }
  const meals = meeals.map((event) => (
    <MealItem
      name={event.name}
      id={event.id}
      description={event.description}
      price={event.price}
      key={event.id}
    />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  )
}
