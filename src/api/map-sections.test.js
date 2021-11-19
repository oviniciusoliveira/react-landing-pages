import { mapSectionContent, mapSections, mapSectionTwoColumns } from './map-sections';
import { twoSectionColumnsMock, mapSectionContentMock } from './mock';

describe('map-sections', () => {
  test('should render default section when no data is sent', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

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
