type TabProps = {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  onclick: () => void;
};

const Tab = ({ label, icon, isActive, onclick }: TabProps) => {
  return (
    <button
      className={`${
        isActive ? "text-white border-t-2 border-t-white" : "text-gray-600"
      } flex items-center gap-x-1.5 mt-[-1.5px] px-4 py-2 focus:outline-none transition-opacity duration-300 ease-out ${
        isActive ? "opacity-100" : "opacity-75"
      }`}
      onClick={onclick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Tab;
