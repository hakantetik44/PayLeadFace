export class Google {

    elements= {

        googleSearch: () =>cy.get('.gLFyf')
    }

    googleUrl (){

        cy.visit('www.google.com')



    }
}

export const google = new Google();
export class Facebook {
    facebookUrl (){

        cy.visit('https://facebook.com/fr/')
    }

}

export const facebook = new Facebook ();

export class LoginPage {

    login(email, password) {
        cy.get("#email").type(email);
        cy.get("#pass").type(password);


    }
}





