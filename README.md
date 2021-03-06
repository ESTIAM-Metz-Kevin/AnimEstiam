# Projet AnimEstiam

Vous êtes en train de créer une application web nommée "AnimEstiam" vous permettant d'enregistrer vos animes préférés.

Vous n'avez pas de serveur pour rendre l'enregistrement de vos données persistantes, mais vous avez travaillé sur une interface pour vous permettre déjà de les afficher.
Après avoir fait la partie HTML et CSS, vous avez besoin maintenant de dynamiser la page avec javascript.

# Notation & rendu

Vous rendrez ce projet sur Github Classroom **ET vous ferez un zip de ce projet que vous enverrez sur Teams en tant que rendu de devoir**.

Le projet sera noté sur **20 points (coef. 2)** basé sur les critères suivants, chacun sur **5 points** :
* Réalisation du projet (Avancement, réalisation des fonctionnalités, ...)
* Organisation (Découpage du projet, attribution des tâches, utilisation de git, ...)
* Qualité (Lisibilité du code, maintenabilité du code, clarté des fonctions et des classes, utilisation de fonction de rappel, de promesses, ...)
* Personnel (Votre contribution personnelle dans le groupe)

# Où trouver les données des animes

Par chance, on a trouvé une API nommée `Jikan` nous permettant de récupérer les informations d'anime du site `MyAnimeList`.

https://jikan.docs.apiary.io

Nous allons utilser Axios pour faciliter nos requêtes AJAX vers cette API

https://github.com/axios/axios

# Fonctionnalités de AnimEstiam à rendre dynamique

## A. Barre de recherche

Une barre de recherche est à notre disposition en haut à droite de la page :
* En tapant dans cette barre, à partir de 3 lettres tapées, cela lancera une recherche d'anime par son nom
* Une liste apparaît avec les résultats de recherches. En cliquant sur un des résultats, cela ajoutera une carte dans la liste des animes

### Remarques

* Nous devons utiliser la référence `Search` dans l'API
    * https://jikan.docs.apiary.io/#reference/0/search
* Il existe un évènement pour savoir quand la valeur d'un champ texte a changée
  * https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/change_event
* Pour permettre un meilleur découpage et éviter d'utiliser le système qui ajoute une carte en dépendance direct dans le code, on pourrait créer un évènement `onAnimeChoosed` sur lequel un autre élement pourrait écouter pour savoir si un anime a été choisi
  * https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Events/Creating_and_triggering_events

## B. Liste de cartes

Nous avons une liste de cartes.
 Chaque carte représente un anime qui a été choisi depuis la barre de recherche.

On y trouve :
* Une image
* Son titre
* Le score noté sur 10
* Le nombre d'épisode

Un bouton d'information est présent et ouvre une fenêtre modale.

## C. Détail d'un anime

Dans la fenêtre ouverte lorsque l'on a cliqué sur le bouton `Info` d'une carte, nous pouvons trouver les informations suivantes :

* Dans l'entête de la fenêtre :
  * Le titre
  * Le lien pour regarder une bande-annonce
* Dans le tableau
  * Sa source
  * La durée des épisodes
  * Le genre
  * Le synopsis

### Remarques

* Nous devons récupérer les informations détaillées avec la référence `Anime` dans l'API
  * https://jikan.docs.apiary.io/#reference/0/anime

# Remarques complémentaires

Utilisez `querySelector` pour récupérer les éléments dont vous avez besoin
* https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

Ne copiez pas de code html dans un code JS. Dans le cas d'une carte par exemple, utilisez l'élément HTML `template` pour stocker un contenu HTML qui sera utilisé en javascript en tant qu'instance
* https://developer.mozilla.org/fr/docs/Web/HTML/Element/template

---

Vous trouverez dans `scripts/api` plusieurs fichiers pour créer une petite librairie d'API, vous pouvez partir dessus si vous le souhaitez.

Les classes vous permettent d'avoir une approche de ce que vous connaissez en orienté objet dans d'autres languages. Cela vous permettra de mieux découper chaque partie de code et d'y appliquer une logique algorithmique.

Je ne vous oblige pas à utiliser les classes, vous pouvez faire sans si vous vous sentez absolument pas à l'aise. Mais ça risque de vous faire défaut dans le futur si vous n'essayez pas au moins de découper au maximum votre code de manière claire.

Vous pouvez très facilement créer des classes pour gérer votre DOM.

Par exemple :
* Vous pouvez créer une classe `Anime` qui contient les informations d'un anime
* Vous pouvez créer une classe `CardAnime`
  * Qui contient dans une propriété une instance de `Anime`
  * Qui gère la création de l'élément HTML à partir du template d'une carte
* Vous pouvez créer une classe `CardAnimeList`
  * Qui contient une liste de `CardAnime`
  * Qui s'occupe d'ajouter l'élément HTML `CardAnime` dans l'élément HTML qui est le conteneur des cartes

---

Vous êtes en groupe de trois ou quatre :
* Communiquez régulièrement et soutenez-vous si besoin
* Travaillez chacun sur votre branche
* Séparez bien vos tâches entre vous au maximum pour évitez de vous marcher sur les pieds
* Définissez vous bien vos points de jonction de code, lorsque vous fusionnerez vos branches, il y ai le moins de conflits possibles et seulement quelques ajustements à faire pour que votre système fonctionne.

Par exemple :
* Une personne peut travailler sur le mécanisme d'ajout d'une carte en simulant les informations d'un anime reçues en paramètre avec des données statiques (une variable JSON)
* L'autre personne peut quand à elle travailler sur la recherche
* Quand les tâches sont finies de manière isolée => fusion sur la branche `master` et faites les ajustements sur vos points de jonction, ici la jonction peut-être : le système de recherche utilise une fonction de rappel pour donner les information de l'anime, un autre système (celui des cartes par exemple) aura crée cette fonction de rappel et l'aura affectée au système de recherche

---

Vous pouvez vous appuyer sur ma proposition du projet de Morpion que nous avons fait, si ça peut vous aider :

https://github.com/ESTIAM-Metz-Kevin/morpion-resultat-prof

---

ET SURTOUT :
* Prenez l'habitude de savoir vous documenter et faire des recherches pour trouver la solution à vos problématiques
* Osez demander de l'aide quand cela ne va vraiment pas, les intervenants sont là pour vous aider
* Ne trainez pas sur un point particulier pendant trop longtemps, il y a pleins de choses sur lequel on peut avancer