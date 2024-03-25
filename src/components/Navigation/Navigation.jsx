import { useState } from "react";
import { useRouter } from "next/router";

let navItems = [
  { name: "man", path: "/catalog" },
  { name: "woman", path: "/catalog" },
  { name: "about", path: "#" },
  { name: "logoSite", path: "/" },
  { name: "like", path: "/like" },
  { name: "product", path: "" }, // Изначально пустой путь
];

// компонент для навигации

const Navigation = ({ index, name, text, vendorCode, children }) => {
  // состояние (стейт) для активного пункта меню
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  // Обновление пути для "product"
  if (name === "product") {
    const updatedNavItems = navItems.map((item) => {
      if (item.name === "product") {
        return { ...item, path: `/product/${vendorCode}` };
      }
      return item;
    });

    // Обновляем массив navItems
    navItems = updatedNavItems;
  }

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
        {children}
      </a>
    </>
  );
};

export default Navigation;

/* import { useRouter } from "next/router";

const Navigation = ({ name, text, children }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.push({
      pathname: `/product/${name}`, // Переход на страницу с соответствующим productId
      query: { productId: name }, // Передача параметра productId
    });
  };

  return (
    <div onClick={onClickHandler}>
      {text}
      {children}
    </div>
  );
};

export default Navigation; */
