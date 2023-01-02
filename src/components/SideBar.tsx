import React from "react";
import { categories } from "../utils/constant";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

const SideBar = (props: SideBarProps) => {
  return (
    <div className="custom-scrollbar flex flex-row border-r border-r-gray-400 min-h-[64px] bg-black py-2 md:min-w-[176px] md:px-2 md:flex-col md:h-auto overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:min-h-0">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.name}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            data={category}
          />
        );
      })}
    </div>
  );
};

export default SideBar;

interface CategoryItemProps extends SideBarProps {
  key: string;
  data: { name: string; icon: React.ReactElement };
}

const CategoryItem = (props: CategoryItemProps) => {
  const { name, icon } = props.data;
  return (
    <button
      onClick={() => {
        props.setSelectedCategory(name);
      }}
      style={{
        backgroundColor:
          props.selectedCategory === name ? "#fc1503" : undefined,
        color: props.selectedCategory === name ? "white" : undefined,
      }}
      className="flex justify-start items-center py-1 px-2 md:py-2 md:px-4 md:mb-4 mr-2 rounded-3xl hover:bg-red-primary hover:text-white text-red-primary whitespace-nowrap"
    >
      {icon}
      <div className="ml-2 text-white overflow-hidden">{name}</div>
    </button>
  );
};
