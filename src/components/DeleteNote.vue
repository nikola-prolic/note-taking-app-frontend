<template>
    <div>
      <button @click="deleteNote">Delete Note</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      noteId: {
        type: String,
        required: true
      }
    },
    methods: {
      deleteNote() {
        axios.delete(`http://localhost:3000/api/notes/${this.noteId}`)
          .then(() => {
            console.log('Note deleted:', this.noteId);
            // Optionally, you can emit an event to notify parent components of the deleted note
          })
          .catch(error => {
            console.error('Error deleting note:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  