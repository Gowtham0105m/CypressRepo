import login from '../LoginCypress'
import methods from '../../PageObjectModel/methods'
import locator from '../../PageObjectModel/Locators'

describe('Workflows', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        login();
    })

    it('Workflows', () => {
        cy.wait(3000)
        methods.Verifytext1(locator.allaccounts, 'All Accounts')
        methods.clickbyXpath(locator.Automations)
        methods.VisibilityofElement2(locator.pathtablist)
        methods.Verifytext1indexbyxpath(locator.Workflows, 'Workflows', 1)
        methods.clickbyXpath(locator.New_Workflow)
        methods.VisibilityofElement2(locator.deletepopupsegment)
        methods.clickbyXpath(locator.Add_new_contacts)
        cy.wait(3000)
        methods.VisibilityofElement2(locator.HubSpot_Tab)


    })


})