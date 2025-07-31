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
        cy.wait(3000)
        methods.clickbyXpath(locator.New_Workflow)
        methods.VisibilityofElement2(locator.deletepopupsegment)
        methods.clickbyXpath(locator.Add_new_contacts)
        methods.clickbyXpath(locator.Use_this_workflow)
        methods.VisibilityofElement2(locator.pathtablist)
        methods.clickelement(locator.Edit_Icon)
        methods.ClearAndTypeWithXpath(locator.workflowname, 'testing')
        methods.clickelement(locator.Performs_an_event)
        


    })


})