Feature: Connexion à Facebook
  Scenario: Connexion réussie à Facebook
    Given Aller sur la page Facebook
    When Saisir  adresse e-mail  et  mot de passe
    Then Cliquer sur le bouton Se connecter
    And Vérifier que la page d'accueil a été connectée avec succès


  Scenario: Connexion échouée sur Facebook (Données incorrectes)
    Given Aller sur la page Facebook
    When Entre une adresse e-mail incorrecte
    Then Vérifier le message d'erreur.
    And Saisir un mot de passe incorrect
    And Cliquer sur le bouton Se connecter
    And Vérifier le message d'erreur.
    And Vérifier l'échec de la connexion