import { Material2AppPage } from './app.po';

describe('material2-app App', () => {
  let page: Material2AppPage;

  beforeEach(() => {
    page = new Material2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
