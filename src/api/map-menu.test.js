import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  test('should return a predefined object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.imageSrc).toBe('');
    expect(menu.link).toBe('');
  });

  test('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu_link: [
        {
          open_in_new_tab: false,
          link_text: 'Pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'Contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'logo.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.imageSrc).toBe('logo.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('Pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  test('should return an empty array if there is no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  test('should map links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'Pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('Pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
