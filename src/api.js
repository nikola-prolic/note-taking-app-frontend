// api.js
import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace this with your backend URL

// Function to create a new note
export const createNote = async (noteData) => {
  return axios.post(`${baseURL}/notes`, noteData);
};

// Function to fetch all notes
export const fetchNotes = async () => {
  return axios.get(`${baseURL}/notes`);
};

// Function to update an existing note
export const updateNote = async (id, noteData) => {
  return axios.put(`${baseURL}/notes/${id}`, noteData);
};

// Function to delete a note
export const deleteNote = async (id) => {
  return axios.delete(`${baseURL}/notes/${id}`);
};
