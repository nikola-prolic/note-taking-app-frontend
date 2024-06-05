<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our note-taking application.</p>
      <AddNote />
      <NoteList />
      <!-- Add any other content specific to the home page -->
    </div>
  </template>
  
  <script>
    import AddNote from '@/components/AddNote.vue';
    import NoteList from '@/components/NoteList.vue';
    import { createNote } from '@/api';

    export default {
        name: 'HomePage',
        components: {
            AddNote,
            NoteList
        },
        methods: {
        async addNoteToBackend(newNoteData) {
            try {
                // Call the createNote function to create a new note on the backend
                const response = await createNote(newNoteData);
                if (!response.ok) {
                    throw new Error('Failed to add note');
                }
                // Optionally update the list of notes displayed in the NoteList component
                } catch (error) {
                    console.error('Error adding note:', error);
                }
            }
        }
    }
  </script>
  
  <style scoped>
  /* Add scoped styles for the Home component */
  </style>
  