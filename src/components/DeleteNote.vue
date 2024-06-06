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
          this.$emit('note-deleted'); // Emit event to notify parent component
          console.log('note-deleted event emitted'); // Debug log
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
