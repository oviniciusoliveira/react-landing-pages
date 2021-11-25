export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section['__component'] === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section['__component'] === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section['__component'] === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      // if (image_grid.length > 0) {
      //   return mapImageGrid(section);
      // }
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: imageSrc = '' } = {},
    metadata: { background: withBackground = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    text,
    imageSrc,
    sectionId,
    withBackground,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background: withBackground = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    html,
    withBackground,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background: withBackground = false, section_id: sectionId = '' } = {},
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    withBackground,
    sectionId,
    grid,
  };
};
