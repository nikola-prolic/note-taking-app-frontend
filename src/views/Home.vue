<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our note-taking application.</p>
      <AddNote @note-added="handleNoteAdded" />
      <NoteList :refreshNotes="refreshNotes" />
      <!-- Add any other content specific to the home page -->
    </div>
  </template>
  
  <script>
  import AddNote from '@/components/AddNote.vue';
  import NoteList from '@/components/NoteList.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AddNote,
      NoteList
    },
    data() {
      return {
        refreshNotes: false
      };
    },
    methods: {
      handleNoteAdded() {
        console.log('Note added event received in Home.vue'); // Debug log
        this.refreshNotes = !this.refreshNotes; // Toggle the refresh state to trigger NoteList update
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles for the Home component */
  </style>
  
  