import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habitName) => {
    // TODO: write code to add a new habit here
    setHabits((prev) => [...prev, habitName]);
  };

  const handleToggleHabit = (id) => {
    // TODO: write code to toggle a habit's status
    setHabits((prevHabits) =>
      prevHabits.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteHabit = (id) => {
    // TODO: write code to delete a habit
    setHabits((prevHabits) => prevHabits.filter((_, index) => index !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm onAddHabit={handleAddHabit} handleToggleHabit={handleToggleHabit} handleDeleteHabit={handleDeleteHabit}/>
      {/*TODO: add a list of habits*/}
      <HabitList habits={habits} onToggleHabit={handleToggleHabit} onDeleteHabit={handleDeleteHabit}/>
    </div>
  );
}

export default App;
