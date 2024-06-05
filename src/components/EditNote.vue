<template>
    <div>
      <h2>Edit Note</h2>
      <form @submit.prevent="updateNote">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="note.title" required>
        <label for="content">Content:</label>
        <textarea id="content" v-model="note.content" required></textarea>
        <button type="submit">Update Note</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        note: {
          title: '',
          content: ''
        }
      };
    },
    created() {
      this.fetchNote();
    },
    methods: {
      fetchNote() {
        const noteId = this.$route.params.id; // Assuming you're using Vue Router and passing the note id as a route parameter
        axios.get(`http://localhost:3000/api/notes/${noteId}`)
          .then(response => {
            this.note = response.data;
          })
          .catch(error => {
            console.error('Error fetching note:', error);
          });
      },
      updateNote() {
        // Implement update logic here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  