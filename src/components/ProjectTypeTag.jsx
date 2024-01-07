const ProjectTypeTag = ({ isPersonalProject, className }) => {
  return (
    <div
      className={`h-[20px] w-[112px] text-xs flex justify-center items-center rounded-[8px] -rotate-45 ${
        isPersonalProject ? "bg-rose-600" : "bg-emerald-500"
      } ${className}`}
    >
      {isPersonalProject ? "Personal Project" : "Client Project"}
    </div>
  );
};

export default ProjectTypeTag;
