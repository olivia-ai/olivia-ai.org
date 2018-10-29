<template>
  <div class="main">
    <div class="container">
      <div class="top">
        <span><span class="name">API</span></span>
        <div class="right">
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>API</h2>
      <p>La REST Api d'Olivia est disponible en libre service à cette adresse <strong>https://olivia-api.herokuapp.com/</strong></p>
      <h2>POST /api/response</h2>
      <p>
        Pour obtenir une réponse d'olivia vous devez envoyer une requête POST sur /api/response avec ces paramètres dans le <strong>body</strong> :
      </p>
      <p>- <strong>sentence</strong>, en valeur la phrase à envoyer à Olivia</p>
      <p>- <strong>authorId</strong>, en valeur l'identifiant de l'auteur de la phrase</p>
    </div>
  </div>
</template>