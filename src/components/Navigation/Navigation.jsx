import { useState } from "react";
import { useRouter } from "next/router";

const navItems = [
  { name: "men", path: "/catalog" },
  { name: "woman", path: "/catalog" },
  { name: "about", path: "#" },
  { name: "logoSite", path: "/" },
  { name: "like", path: "/like" },
];

// компонент для навигации

const Navigation = ({ index, name, text }) => {
  // состояние (стейт) для активного пункта меню
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  // клик по активному пункту меню
  const onClickHandler = (path) => {
    if (path !== activeLink) {
      router.push(path);
      setActiveLink(path);
    }
  };

  // Находим объект с данными пункта меню по его имени
  const selectedItem = navItems.find((item) => item.name === name);

  return (
    <>
      <a key={index} onClick={() => onClickHandler(selectedItem.path)}>
        {text}
      </a>
    </>
  );
};

export default Navigation;
