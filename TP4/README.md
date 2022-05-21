## Dokerisation
### Les demarches necessaires 
1/ nous créons dockerfile et définissons toutes les commandes pour télécharger les images nécessaires pour notre API nodejs
2/ on copie le répertoire de travail dans le répertoire de travail de l'image docker
3/ nous installons des dépendances pour notre application
4/ on lance notre API nodejs et on expose le port 3000
### Docker-compose et le lancement d'image 
5/ on crée un fichier docker-compose pour créer notre image d'API nodejs et on utilise cette commande :

  docker-compose build => pour construire notre image personnalisée
  docker-compose up => pour exécuter notre image personnalisée
