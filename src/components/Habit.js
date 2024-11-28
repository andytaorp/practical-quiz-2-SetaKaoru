import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habit, completed, onToggleHabit, onDeleteHabit,}) {
    return (
        <h3>
            <input type="checkbox" checked={completed} onChange={() => onToggleHabit()}/>
            <h3 style={completed === false ? { textDecoration: "line-through" } : {}}>
              {habit.habitName}
            </h3>
            <button type="button" onClick={() => onDeleteHabit()}>Delete</button>
        </h3>
    )
}
