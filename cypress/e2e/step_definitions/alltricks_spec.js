import { Given,When,Then } from '@badeball/cypress-cucumber-preprocessor';
import {facebook, LoginPage} from "../../utils/Facebook";



Given("Aller sur la page Facebook", () => {(async () => {

     facebook.facebookUrl()
     cy.contains("Autoriser tous les cookies").click()
     cy.title().should("be.equal", "Facebook");

})()
});



When('Saisir  adresse e-mail  et  mot de passe', (chercher)=>{
    const email = "jiraxrays@hotmail.com";
    const password = "PayLead";
    const loginPage = new LoginPage();
    loginPage.login(email, password);


})

Then("Cliquer sur le bouton Se connecter",(x) => {(async () => {
    cy.wait(3000)

    cy.contains("Se connecter").click();


})()
});

Then("Vérifier que la page d'accueil a été connectée avec succès",
    () => {

        cy.get(".header-title").should("contain", "Bienvenue sur Facebook");




    })





