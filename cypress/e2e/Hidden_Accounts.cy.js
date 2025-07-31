import Login1 from '../PageObjects/Login1';
import { deviceViewport, Timeout } from '../Utils.js';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Hidden Accounts', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Hidden Accounts', () => {

        cy.wait(Timeout.md)
        methods.assertElementContainsTextxpath(locators.Account_Pagetitle, 'All Accounts')
        methods.VisibilityofElementXpath(locators.account_pageloaded)

        // select Hidden account

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsTextxpath(locators.account_pageloaded, 'trackdfect.com')
        methods.clickElement0(locators.Checkbox, 1)
        methods.VisibilityofElementXpath(locators.Hide)
        methods.clickElementByXPath(locators.Hide)
        methods.GetText(locators.MovedSuccessfull_popup, "Selected accounts have been moved to the hidden list")
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Scoring)
        methods.assertElementContainsText(locators.Page_title, 'Account Scoring')
        cy.wait(Timeout.sm)
        methods.VisibilityofElement(locators.Set_engagement_window)
        methods.clickElementByXPath(locators.Hidden_Accounts)
        methods.clickElementByXPath(locators.search_button1)
        methods.typeElement(locators.searchType, 'trackdfect.com')
        methods.Enter(locators.searchType)
        methods.assertElementContainsTextxpath(locators.account_pageloaded, 'trackdfect.com')
        methods.clickElement0(locators.Checkbox, 1)
        methods.clickElementByXPath(locators.Unhide)
        methods.assertElementContainsText(locators.Upgrade_validation, 'Are you sure you want to remove these accounts from the hidden list? Once removed, they will appear in all account and all the segments that they are a part of.')
        methods.clickElementByXPath(locators.Unhide_1)
        methods.Mouseover(locators.account_dropdown);
        methods.clickElementByXPath(locators.Account)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'trackdfect.com')
        methods.EnterXpath(locators.search_area)
        methods.assertElementContainsTextxpath(locators.account_pageloaded, 'trackdfect.com')

    })
})