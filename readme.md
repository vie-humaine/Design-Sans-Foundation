Installation
===================

Installation de Foundation sans Bower, ni Ruby (gem), et compatible avec libSass.

Pour utiliser LibSass avec Foundation installer avec npm:

    npm install -g node-sass

Ensuite copier l'ensemble du dépôt dans votre dossier projet.

Pour compiler vos fichiers SCSS en CSS (sans minification):

    node-sass scss/app.scss css/app.css

Pour compiler les fichiers avec minification

    node-sass scss/app.scss css/app.css --output-style compressed
