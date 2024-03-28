import { useState } from "react";
import { useRouter } from "next/router";

let navItems = [
  { name: "man", path: "/catalog" },
  { name: "woman", path: "/catalog" },
  { name: "about", path: "#" },
  { name: "logoSite", path: "/" },
  { name: "like", path: "/like" },

  { name: "VK", path: "https://vk.com/?ysclid=lu9hvtg78c414253136" },
  { name: "TG", path: "https://web.telegram.org/a/" },
  { name: "АВИТО", path: "https://www.avito.ru/?ysclid=lu9hx0xot0992803577" },

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
