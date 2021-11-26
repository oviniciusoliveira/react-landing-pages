export const mapMenu = (menu = {}) => {
  const { open_in_new_tab: newTab = false, logo_text: text = '', logo_link: link = '', menu_link: links = [] } = menu;

  const imageSrc = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    imageSrc,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const { open_in_new_tab: newTab = false, link_text: children = '', url: link = '' } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
