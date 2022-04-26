## API Versioning

### v1

La première version interroge uniquement les pays. 

### v2

Dans la deuxième version, vous pouvez interroger les utilisateurs et leurs avis, en plus de tout ce qui se trouve dans la v1.

#### Authentification
Vous pouvez utiliser */api/auth/register* pour enregistrer un compte utilisateur

Et */api/auth/login* pour vous connecter à votre compte existant

Toutes les routes *v2* vérifieront l'en-tête *access-token*, pas de préfixes.

