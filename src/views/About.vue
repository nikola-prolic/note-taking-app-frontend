<template>
    <div class="about">
      <h1>About Us</h1>
      <p>This is the about page of our note-taking application.</p>
      <br>
      <p>Did you seriously think that I would write anything else here?</p>
      <!-- Add any other content specific to the about page -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
        return {
        count: 0
        };
    },
    methods: {
        incrementCount() {
        this.count++;
        }
    }
    }
  </script>
  
  <style scoped>
  /* Add scoped styles for the About component */
  </style>
  