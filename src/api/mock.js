export const twoSectionColumnsMock = {
  __component: 'section.section-two-columns',
  title: 'any_title',
  description: 'any_text',
  metadata: {
    background: true,
    section_id: 'any_section_id',
  },
  __v: 1,
  image: {
    url: 'any_image_src.svg',
  },
};

export const mapSectionContentMock = {
  __component: 'section.section-content',
  title: 'any_title',
  content: '<p>any_content</p>',
  metadata: {
    background: true,
    section_id: 'any_section_id',
  },
};

export const mapSectionGridTextMock = {
  __component: 'section.section-grid',
  title: 'any_section_title',
  description: 'any_section_description',
  text_grid: [
    {
      title: 'any_text_grid_title',
      description: 'any_text_grid_description',
      id: 'any_text_grid_id',
    },
  ],
  image_grid: [],
  metadata: {
    background: true,
    section_id: 'any_section_id',
  },
};
