import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals(props) {
    return (
        <React.Fragment>
            <MealsSummary />
            <AvailableMeals />

        </React.Fragment>
    )
}
