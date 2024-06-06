<template>
  <div>
    <h2>Edit Note</h2>
    <form @submit.prevent="updateNote">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="localNote.title" required>
      <label for="content">Content:</label>
      <textarea id="content" v-model="localNote.content" required></textarea>
      <button type="submit">Update Note</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localNote: { ...this.note }, // Create a local copy of the note
    };
  },
  methods: {
    updateNote() {
      console.log('Updating note:', this.localNote); // Debug log
      axios.put(`http://localhost:3000/api/notes/${this.localNote._id}`, {
        title: this.localNote.title,
        content: this.localNote.content,
      })
      .then(() => {
        console.log('Note updated successfully'); // Debug log
        this.$emit('note-updated'); // Emit event when note is updated
      })
      .catch(error => {
        console.error('Error updating note:', error);
      });
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>

  