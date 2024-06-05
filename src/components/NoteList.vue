<template>
    <div>
      <h2>Notes</h2>
        <ul>
          <li v-for="note in notes" :key="note._id" class="note">
            <h3>{{ note.title }}</h3>
            <p>{{ note.content }}</p>
            <DeleteNote :noteId="note._id" @deleted="handleNoteDeleted" />
          </li>
        </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import DeleteNote from './DeleteNote.vue';
  
  export default {
    data() {
      return {
        notes: []
      };
    },
    created() {
      this.fetchNotes();
    },
    components: {
        DeleteNote
    },
    methods: {
      fetchNotes() {
        axios.get('http://localhost:3000/api/notes')
          .then(response => {
            this.notes = response.data;
          })
          .catch(error => {
            console.error('Error fetching notes:', error);
          });
      },
      handleNoteDeleted() {
        // Handle note deletion event if needed
        this.fetchNotes(); // Refresh the notes list after deletion
        }
    }
  };
  </script>
  
  <style scoped>
    ul,
    ol {
      list-style: none;
    }
    ul {
      padding-left: 32em;
      padding-right: 32em;
    }
    .note {
      background-color: rgb(255, 208, 0);
      padding: 1em;
      margin: 1em;
    }
  </style>
  
  