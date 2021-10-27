export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section['__component'] === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section['__component'] === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section['__component'] === 'section.section-grid') {
      return mapSectionGrid(section);
    }
    return section;
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

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
