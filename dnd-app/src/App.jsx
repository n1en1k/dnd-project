import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SkillItem from "./SkillItem";

function App() {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    const response = (await axios.get("https://www.dnd5eapi.co/api/skills/"))
      .data;
    const skills = response.results;
    const skillIndexes = skills.map((skill) => skill.index);

    const results = await Promise.all(
      skillIndexes.map(async (skillIndex) => {
        const { name, desc } = (
          await axios.get(`https://www.dnd5eapi.co/api/skills/${skillIndex}`)
        ).data;

        return {
          name,
          desc,
        };
      })
    );
    setSkills(results);
  };
  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="App">
      <div className="list-container">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default App;
