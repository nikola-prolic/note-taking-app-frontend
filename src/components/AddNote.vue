<!-- AddNote.vue -->
<template>
    <div>
      <h2>Add New Note</h2>
      <div class="form-container">
        <form @submit.prevent="addNote" class="form">
          <label for="title">Title:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="title" v-model="title" required><br>
          <label for="content">Content:</label>&nbsp;
          <textarea id="content" v-model="content" required></textarea><br><br>
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      addNote() {
        if (!this.title || !this.content) {
          alert('Please fill in all fields.');
          return;
        }
        // Construct the new note object
      const newNote = {
        title: this.title,
        content: this.content
      };
      // Send a POST request to the backend API to add the new note
      axios.post('http://localhost:3000/api/notes', newNote)
        .then(response => {
          console.log('New note added:', response.data);
          // Optionally, emit an event to notify parent components of the new note
        })
        .catch(error => {
          console.error('Error adding new note:', error);
        });
        // Reset the form fields
        this.title = '';
        this.content = '';
      }
    }
  };
  </script>
  
  <style scoped>
    .form-container {
      display: flex;
      justify-content: center;
    }
    .form {
      text-align: left;
      background-color: antiquewhite;
      padding: 1em;
    }
  </style>
  