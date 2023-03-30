import { useState } from "react";

function SkillItem({ skill }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="list-item"
        style={{ backgroundColor: !isOpen ? "#d9d9d9" : "#c9c9c9" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {skill.name}
      </div>
      {isOpen && <div className="description">{skill.desc}</div>}
    </>
  );
}

export default SkillItem;
