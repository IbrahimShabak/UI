// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('Myapp App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display application title: Myapp', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('Myapp');
    });
});
