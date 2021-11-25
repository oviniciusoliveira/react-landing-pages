import { mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid, mapImageGrid } from './map-sections';
import { twoSectionColumnsMock, mapSectionContentMock, mapSectionGridTextMock, mapSectionGridImageMock } from './mock';

describe('map-sections', () => {
  test('should render default section when no data is sent', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  describe('mapSectionTwoColumns', () => {
    test('mapSectionTwoColumns should return default values when no section data is sent', () => {
      const data = mapSectionTwoColumns();
      expect(data.withBackground).toBe(false);
      expect(data.component).toBe('');
      expect(data.sectionId).toBe('');
      expect(data.imageSrc).toBe('');
      expect(data.text).toBe('');
      expect(data.title).toBe('');
    });

    test('should map section two columns', () => {
      const data = mapSectionTwoColumns(twoSectionColumnsMock);
      expect(data.withBackground).toBe(true);
      expect(data.component).toBe('section.section-two-columns');
      expect(data.sectionId).toBe('any_section_id');
      expect(data.imageSrc).toBe('any_image_src.svg');
      expect(data.text).toBe('any_text');
      expect(data.title).toBe('any_title');
    });
  });

  describe('mapSectionContent', () => {
    test('should map section content with no data', () => {
      const data = mapSectionContent();
      expect(data.withBackground).toBe(false);
      expect(data.component).toBe('');
      expect(data.sectionId).toBe('');
      expect(data.html).toBe('');
      expect(data.title).toBe('');
    });

    test('should map section content', () => {
      const data = mapSectionContent(mapSectionContentMock);
      expect(data.withBackground).toBe(true);
      expect(data.component).toBe('section.section-content');
      expect(data.sectionId).toBe('any_section_id');
      expect(data.html).toBe('<p>any_content</p>');
      expect(data.title).toBe('any_title');
    });
  });

  describe('mapTextGrid', () => {
    test('should map secion text grid when section is empty', () => {
      const data = mapTextGrid();
      expect(data.component).toBe('section.section-grid-text');
      expect(data.title).toBe('');
      expect(data.description).toBe('');
      expect(data.withBackground).toBe(false);
      expect(data.grid).toEqual([]);
    });

    test('should map secion text grid', () => {
      const data = mapTextGrid(mapSectionGridTextMock);
      expect(data.component).toBe('section.section-grid-text');
      expect(data.title).toBe('any_section_title');
      expect(data.description).toBe('any_section_description');
      expect(data.withBackground).toBe(true);
      expect(data.grid[0].id).toBe('any_text_grid_id');
      expect(data.grid[0].title).toBe('any_text_grid_title');
      expect(data.grid[0].description).toBe('any_text_grid_description');
    });
  });

  describe('mapImageGrid', () => {
    test('should map secion image grid when section is empty', () => {
      const data = mapImageGrid();
      expect(data.component).toBe('section.section-grid-image');
      expect(data.title).toBe('');
      expect(data.description).toBe('');
      expect(data.withBackground).toBe(false);
      expect(data.grid).toEqual([]);
    });

    test('should map secion image grid', () => {
      const data = mapImageGrid(mapSectionGridImageMock);
      expect(data.component).toBe('section.section-grid-image');
      expect(data.title).toBe('any_section_title');
      expect(data.description).toBe('any_section_description');
      expect(data.withBackground).toBe(true);
      expect(data.grid[0].id).toBe('any_image_grid_id');
      expect(data.grid[0].imageSrc).toBe('any_image_url');
      expect(data.grid[0].alternativeText).toBe('any_image_alternativeText');
    });
  });
});
