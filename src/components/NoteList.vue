<template>
  <div>
    <h2>Notes</h2>
    <ul>
      <li v-for="note in notes" :key="note._id" class="note">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <button @click="editNote(note)">Edit</button>
        <DeleteNote :noteId="note._id" @note-deleted="handleNoteDeleted" />
        <EditNote v-if="note._id === editingNoteId" :note="note" @note-updated="handleNoteUpdated" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import DeleteNote from './DeleteNote.vue';
import EditNote from './EditNote.vue';

export default {
  props: ['refreshNotes'],
  data() {
    return {
      notes: [],
      editingNoteId: null,
    };
  },
  watch: {
    refreshNotes: {
      handler() {
        this.fetchNotes();
      },
      immediate: true
    }
  },
  components: {
    DeleteNote,
    EditNote,
  },
  methods: {
    fetchNotes() {
      console.log('Fetching notes...'); // Debug log
      axios.get('http://localhost:3000/api/notes')
        .then(response => {
          console.log('Notes fetched successfully:', response.data); // Debug log
          this.notes = response.data;
        })
        .catch(error => {
          console.error('Error fetching notes:', error); // Debug log
        });
    },
    handleNoteDeleted() {
      console.log('Note deleted event received'); // Debug log
      this.editingNoteId = null;
      this.fetchNotes(); // Refresh the notes list after deletion
    },
    editNote(note) {
      console.log('Editing note:', note); // Debug log
      this.editingNoteId = note._id;
    },
    handleNoteUpdated() {
      console.log('Note updated'); // Debug log
      this.editingNoteId = null;
      this.fetchNotes(); // Refresh the notes list after update
    },
  },
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
