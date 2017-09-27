import { TreetablePage } from './app.po';

describe('treetable App', () => {
  let page: TreetablePage;

  beforeEach(() => {
    page = new TreetablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
