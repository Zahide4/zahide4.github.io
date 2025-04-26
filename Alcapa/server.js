// === Firebase SDK ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// === Your Firebase config ===
const firebaseConfig = {
  apiKey: "AIzaSyD-2MObScY4SzVvdLhNRyZjbwm46HfDeSI",
  authDomain: "alpaca-for-us.firebaseapp.com",
  projectId: "alpaca-for-us",
  storageBucket: "alpaca-for-us.firebasestorage.app",
  messagingSenderId: "369086694657",
  appId: "1:369086694657:web:6baed57875f68027db8700",
  measurementId: "G-2D3862ZXXM"
};

// === Initialize Firebase ===
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const journalRef = collection(db, "journal");

// === Add Entry ===
document.getElementById("journal-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) return;

  await addDoc(journalRef, {
    title,
    content,
    timestamp: serverTimestamp()
  });

  document.getElementById("journal-form").reset();
  loadEntries();
});

// === Load Entries ===
async function loadEntries() {
  const entriesDiv = document.getElementById("entries");
  entriesDiv.innerHTML = "";

  const q = query(journalRef, orderBy("timestamp", "desc"));
  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap) => {
    const entry = docSnap.data();
    const date = entry.timestamp?.toDate?.().toLocaleString() || "just now";

    const div = document.createElement("div");
    div.classList.add("entry");

    // Truncate content if it's too long
    const previewContent = entry.content.length > 150 
      ? entry.content.substring(0, 150) + "..." 
      : entry.content;

    div.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${previewContent}</p>
      <div class="entry-box">
        <div class="timestamp">${date}</div>
        <button class="readmore-btn" onclick="openFullEntry('${entry.title}', \`${entry.content.replace(/`/g, "\\`")}\`)">📖 Read More</button>
        <button class="delete-btn" onclick="deleteEntry('${docSnap.id}')">🗑 Delete</button>
      </div>
    `;
    entriesDiv.appendChild(div);
  });
}
// === Delete Entry ===
window.deleteEntry = async function (id) {
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) return;

  await deleteDoc(doc(db, "journal", id));
  loadEntries();
};

// Initial load
loadEntries();
