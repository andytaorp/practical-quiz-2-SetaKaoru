import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit, handleToggleHabit, id}) {
    return (
        <h3>
            <input type="checkbox" onChange={() => handleToggleHabit(id)}/>
            {id}
            {habit}
        </h3>
    )
}
