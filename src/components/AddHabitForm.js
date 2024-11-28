import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("New Habit");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    const newHabit = {
      id: currentTime,
      habitName: habitName,
      completed: false,
    };
    onAddHabit(newHabit)
  };

  function handleName(em) {
    setHabitName(em.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4>Add Habit</h4>
      <input type="text" value={habitName} onChange={handleName} />
      <input type="submit" value="Add Habit" />
    </form>
  );
}
