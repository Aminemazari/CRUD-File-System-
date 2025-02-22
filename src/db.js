import fs from 'fs/promises';
const DB_PATH = new URL("./db.json", import.meta.url).pathname;

export const getDB= async () => {
  const db = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(db); 
}
export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db ; 
}
export const insertDB = async (note) => {  
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;  
}
export const newNote = async (note, tags) => {
  const NewNote = {
    id: Date.now(),
    content:note,
    tags
  }
  return await insertDB(NewNote);
}

export const getAllNotes = async () => {
  const {notes} = await getDB();
  return notes;
}
export const findNotes = async (filter) => {
  const {notes} = await getDB();
  return notes.filter(note => note.content.LowerCase().includes(toLowerCase()));
}
export const removeNote = async (id) => {
  const {notes}= await getDB();
  const match = notes.find(note => note.id === id);
  if (match){
    const newNotes = notes.filter(note => note.id !== id )
    await saveDB({notes : newNotes})
    return id;
  }
  
}

export const removeAllNotes = async () => {
  await saveDB({notes: []});
}