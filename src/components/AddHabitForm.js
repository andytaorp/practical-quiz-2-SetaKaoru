import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    const newHabit = {
      id: currentTime,
      habit: habitName,
      completed: false,
    };
    onAddHabit(newHabit)
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4>Add Habit</h4>
      <input type="text" onChange={setHabitName} />
      <input type="submit" value="Add Habit" />
    </form>
  );
}
