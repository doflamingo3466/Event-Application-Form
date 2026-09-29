// ==========================================
// 1. EVENT DATA ARRAY WITH IMAGE URLS
// ==========================================
// Central array storing college event metadata, descriptions, activities, and placeholder URLs.
const events = [
  {
    id: 1,
    name: "Sports Gala",
    category: "Sports",
    date: "2026-10-15",
    formattedDate: "October 15, 2026",
    location: "College Sports Ground",
    icon: "bi-trophy-fill",
    description: "An exciting day of athletic competitions, team games, and individual challenges designed to bring students together through healthy competition.",
    activities: ["Cricket", "Football", "Badminton", "Table Tennis", "Basketball", "Athletics"],
    /* PLACEHOLDER URL: Replace with your custom Sports Gala card image URL */
    cardImageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
    /* PLACEHOLDER URL: Replace with your custom Sports Gala form background image URL */
    bgImageUrl: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    name: "Music Night",
    category: "Music & Entertainment",
    date: "2026-10-22",
    formattedDate: "October 22, 2026",
    location: "Main Campus Auditorium",
    icon: "bi-music-note-beamed",
    description: "An evening dedicated to live performances, musical talent, singing, and entertainment featuring students from different departments.",
    activities: ["Singing", "Instrumental Performance", "Band Performance", "Solo Performance", "Open Mic"],
    /* PLACEHOLDER URL: Replace with your custom Music Night card image URL */
    cardImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JWha9yOFr4EkE79IyeYmi9KO3zD9XX9GZK-kYdXHUw&s=10",
    /* PLACEHOLDER URL: Replace with your custom Music Night form background image URL */
    bgImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JWha9yOFr4EkE79IyeYmi9KO3zD9XX9GZK-kYdXHUw&s=10"
  },
  {
    id: 3,
    name: "Culture Day",
    category: "Cultural",
    date: "2026-11-05",
    formattedDate: "November 05, 2026",
    location: "Central Courtyard",
    icon: "bi-globe-americas",
    description: "A celebration of cultural diversity where students can showcase traditional clothing, food, performances, art, and cultural heritage.",
    activities: ["Cultural Performance", "Traditional Dress", "Cultural Stall", "Food Display", "Art Exhibition"],
    /* PLACEHOLDER URL: Replace with your custom Culture Day card image URL */
    cardImageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    /* PLACEHOLDER URL: Replace with your custom Culture Day form background image URL */
    bgImageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 4,
    name: "Society Fair",
    category: "Student Societies",
    date: "2026-11-18",
    formattedDate: "November 18, 2026",
    location: "Student Activity Center",
    icon: "bi-people-fill",
    description: "Explore college societies, meet society members, discover student communities, and participate in activities organized by different societies.",
    activities: ["IT Society", "Literary Society", "Sports Society", "Media Society", "Debating Society", "Entrepreneurship Society"],
    /* PLACEHOLDER URL: Replace with your custom Society Fair card image URL */
    cardImageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
    /* PLACEHOLDER URL: Replace with your custom Society Fair form background image URL */
    bgImageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80"
  }
];

// Key identifier for storing data in localStorage
const STORAGE_KEY = "eventRegistrations";

// Instance variable for Bootstrap Modal
let eventBsModal = null;

// ==========================================
// 2. DOM CONTENT LOADED EVENT
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap Modal Instance
  const modalElem = document.getElementById("eventModal");
  if (modalElem) {
    eventBsModal = new bootstrap.Modal(modalElem);
  }

  // Populate dynamic UI elements
  renderEventCards();
  populateEventDropdown();
  updateActivityOptionsAndBackground();
  displayRegistrations();

  // Attach Event Listeners
  document.getElementById("eventSelect").addEventListener("change", handleEventSelectChange);
  document.getElementById("registrationForm").addEventListener("submit", handleFormSubmit);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
  document.getElementById("clearAllBtn").addEventListener("click", clearAllRegistrations);
});

// ==========================================
// 3. RENDER EVENT CARDS IN DOM
// ==========================================
function renderEventCards() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  events.forEach(function (event) {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-6";

    col.innerHTML = `
      <div class="custom-event-card h-100 d-flex flex-column">
        <div class="card-img-holder">
          <!-- PLACEHOLDER URL: Event Card Image -->
          <img src="${event.cardImageUrl}" alt="${event.name}">
          <span class="card-category-tag">${event.category}</span>
        </div>
        <div class="p-4 d-flex flex-column flex-grow-1">
          <h5 class="fw-bold mb-2 text-dark">${event.name}</h5>
          <p class="text-muted small flex-grow-1 mb-3">
            ${event.description.substring(0, 85)}...
          </p>
          <div class="text-muted small mb-3">
            <div><i class="bi bi-calendar-event me-2 text-primary"></i>${event.formattedDate}</div>
            <div><i class="bi bi-geo-alt me-2 text-primary"></i>${event.location}</div>
          </div>
          <div class="d-flex gap-2 mt-auto">
            <button class="btn btn-outline-primary btn-sm rounded-pill w-50 fw-semibold" onclick="showEventDetails(${event.id})">
              Details
            </button>
            <button class="btn btn-primary btn-sm rounded-pill w-50 fw-semibold" onclick="selectEvent('${event.name}')">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// ==========================================
// 4. POPULATE EVENT DROPDOWN
// ==========================================
function populateEventDropdown() {
  const select = document.getElementById("eventSelect");
  select.innerHTML = "";

  events.forEach(function (event) {
    const option = document.createElement("option");
    option.value = event.name;
    option.textContent = event.name;
    select.appendChild(option);
  });

  if (events.length > 0) {
    document.getElementById("eventDate").value = events[0].date;
  }
}

// ==========================================
// 5. UPDATE ACTIVITIES AND BACKGROUND DYNAMICALLY
// ==========================================
// Changes the form section's background URL dynamically according to the selected event
function updateActivityOptionsAndBackground() {
  const selectedEventName = document.getElementById("eventSelect").value;
  const container = document.getElementById("activitiesContainer");
  const regSection = document.getElementById("registration");
  const badge = document.getElementById("selectedEventBadge");

  container.innerHTML = "";

  const selectedEvent = events.find(e => e.name === selectedEventName);

  if (selectedEvent) {
    // Dynamically update form background image URL
    regSection.style.backgroundImage = `url('${selectedEvent.bgImageUrl}')`;
    badge.textContent = `Selected: ${selectedEvent.name}`;

    // Render corresponding activity checkboxes
    selectedEvent.activities.forEach(function (activity, idx) {
      const col = document.createElement("div");
      col.className = "col-md-6 col-12";

      col.innerHTML = `
        <div class="form-check">
          <input class="form-check-input activity-checkbox" type="checkbox" value="${activity}" id="act_${idx}">
          <label class="form-check-label small fw-semibold text-secondary" for="act_${idx}">
            ${activity}
          </label>
        </div>
      `;

      container.appendChild(col);
    });
  }
}

function handleEventSelectChange() {
  const selectedEventName = document.getElementById("eventSelect").value;
  const selectedEvent = events.find(e => e.name === selectedEventName);

  if (selectedEvent) {
    document.getElementById("eventDate").value = selectedEvent.date;
  }

  updateActivityOptionsAndBackground();
}

// ==========================================
// 6. SHOW EVENT DETAILS MODAL
// ==========================================
function showEventDetails(eventId) {
  const event = events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById("modalTitle").textContent = event.name;
  document.getElementById("modalCategory").textContent = event.category;
  document.getElementById("modalDate").textContent = event.formattedDate;
  document.getElementById("modalLocation").textContent = event.location;
  document.getElementById("modalDescription").textContent = event.description;
  
  // Set Modal Banner Image
  document.getElementById("modalBannerImg").src = event.cardImageUrl;

  const activitiesContainer = document.getElementById("modalActivities");
  activitiesContainer.innerHTML = "";
  event.activities.forEach(function (act) {
    const span = document.createElement("span");
    span.className = "badge bg-light text-dark border py-2 px-3 fw-normal";
    span.innerHTML = `<i class="bi bi-check-circle-fill text-success me-1"></i> ${act}`;
    activitiesContainer.appendChild(span);
  });

  const applyBtn = document.getElementById("modalApplyBtn");
  applyBtn.onclick = function () {
    eventBsModal.hide();
    selectEvent(event.name);
  };

  eventBsModal.show();
}

// ==========================================
// 7. SELECT EVENT AND SCROLL
// ==========================================
function selectEvent(eventName) {
  const select = document.getElementById("eventSelect");
  select.value = eventName;

  handleEventSelectChange();

  const regSection = document.getElementById("registration");
  regSection.scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// 8. FORM VALIDATION LOGIC
// ==========================================
function validateForm() {
  const name = document.getElementById("studentName").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const department = document.getElementById("department").value;
  const semester = document.getElementById("semester").value;
  const event = document.getElementById("eventSelect").value;

  if (!name) return "Please enter your full name.";
  if (!studentId) return "Please enter your student ID.";
  if (!email || !email.includes("@")) return "Please enter a valid email address.";
  if (!phone) return "Please enter your phone number.";
  if (!department) return "Please select your department.";
  if (!semester) return "Please select your semester.";
  if (!event) return "Please select an event.";

  return null;
}

// ==========================================
// 9. LOCALSTORAGE HELPERS
// ==========================================
function getRegistrations() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveRegistrations(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ==========================================
// 10. HANDLE FORM SUBMIT (CREATE / UPDATE)
// ==========================================
function handleFormSubmit(e) {
  e.preventDefault();

  const errorMsg = validateForm();
  if (errorMsg) {
    showAlert(errorMsg, "danger");
    return;
  }

  const selectedActivities = [];
  const checkboxes = document.querySelectorAll(".activity-checkbox:checked");
  checkboxes.forEach(function (cb) {
    selectedActivities.push(cb.value);
  });

  const regIdInput = document.getElementById("registrationId").value;
  const registrations = getRegistrations();

  const formData = {
    id: regIdInput ? parseInt(regIdInput) : Date.now(),
    name: document.getElementById("studentName").value.trim(),
    studentId: document.getElementById("studentId").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    department: document.getElementById("department").value,
    semester: document.getElementById("semester").value,
    event: document.getElementById("eventSelect").value,
    date: document.getElementById("eventDate").value,
    activities: selectedActivities
  };

  if (regIdInput) {
    // Update existing registration record
    const idx = registrations.findIndex(r => r.id === parseInt(regIdInput));
    if (idx !== -1) {
      registrations[idx] = formData;
      showAlert("Registration record updated successfully!", "success");
    }
  } else {
    // Create new registration record
    registrations.push(formData);
    showAlert("Registration submitted successfully!", "success");
  }

  saveRegistrations(registrations);
  resetForm();
  displayRegistrations();
}

// ==========================================
// 11. DISPLAY REGISTRATIONS IN TABLE (READ)
// ==========================================
function displayRegistrations() {
  const registrations = getRegistrations();
  const tableBody = document.getElementById("registrationsTableBody");
  tableBody.innerHTML = "";

  if (registrations.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted py-4">No registrations found in database.</td>
      </tr>
    `;
    updateCounters(registrations);
    return;
  }

  registrations.forEach(function (reg) {
    const tr = document.createElement("tr");

    let activitiesBadges = `<span class="text-muted small">None</span>`;
    if (reg.activities && reg.activities.length > 0) {
      activitiesBadges = reg.activities.map(act =>
        `<span class="badge bg-secondary-subtle text-secondary border me-1 mb-1">${act}</span>`
      ).join("");
    }

    tr.innerHTML = `
      <td class="fw-bold text-dark">${reg.name}</td>
      <td><code>${reg.studentId}</code></td>
      <td>${reg.department}</td>
      <td>${reg.semester}</td>
      <td><span class="badge bg-primary">${reg.event}</span></td>
      <td>${activitiesBadges}</td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-primary rounded-pill me-1" onclick="editRegistration(${reg.id})">
          <i class="bi bi-pencil-square"></i> Edit
        </button>
        <button class="btn btn-sm btn-outline-danger rounded-pill" onclick="deleteRegistration(${reg.id})">
          <i class="bi bi-trash"></i> Delete
        </button>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  updateCounters(registrations);
}

// ==========================================
// 12. EDIT REGISTRATION RECORD
// ==========================================
function editRegistration(id) {
  const registrations = getRegistrations();
  const reg = registrations.find(r => r.id === id);

  if (!reg) return;

  document.getElementById("registrationId").value = reg.id;
  document.getElementById("studentName").value = reg.name;
  document.getElementById("studentId").value = reg.studentId;
  document.getElementById("email").value = reg.email;
  document.getElementById("phone").value = reg.phone;
  document.getElementById("department").value = reg.department;
  document.getElementById("semester").value = reg.semester;
  document.getElementById("eventSelect").value = reg.event;

  handleEventSelectChange();

  if (reg.activities) {
    const checkboxes = document.querySelectorAll(".activity-checkbox");
    checkboxes.forEach(function (cb) {
      if (reg.activities.includes(cb.value)) {
        cb.checked = true;
      }
    });
  }

  document.getElementById("formHeading").textContent = "Edit Registration Record";
  document.getElementById("submitBtn").innerHTML = `<i class="bi bi-arrow-clockwise me-1"></i> Update Registration`;

  document.getElementById("registration").scrollIntoView({ behavior: "smooth" });
}

// ==========================================
// 13. DELETE REGISTRATION RECORD
// ==========================================
function deleteRegistration(id) {
  if (confirm("Are you sure you want to delete this registration?")) {
    let registrations = getRegistrations();
    registrations = registrations.filter(r => r.id !== id);

    saveRegistrations(registrations);
    displayRegistrations();
    showAlert("Registration record deleted.", "warning");
  }
}

// ==========================================
// 14. CLEAR ALL RECORDS
// ==========================================
function clearAllRegistrations() {
  const registrations = getRegistrations();
  if (registrations.length === 0) {
    alert("No records available to clear.");
    return;
  }

  if (confirm("Are you sure you want to delete all registrations?")) {
    localStorage.removeItem(STORAGE_KEY);
    displayRegistrations();
    resetForm();
    showAlert("All registration records cleared.", "info");
  }
}

// ==========================================
// 15. RESET FORM & UTILITY FUNCTIONS
// ==========================================
function resetForm() {
  document.getElementById("registrationForm").reset();
  document.getElementById("registrationId").value = "";
  document.getElementById("formHeading").textContent = "Event Registration Form";
  document.getElementById("submitBtn").innerHTML = `<i class="bi bi-check-circle-fill me-1"></i> Register Now`;

  handleEventSelectChange();
}

function updateCounters(registrations) {
  document.getElementById("totalCount").textContent = registrations.length;
  document.getElementById("sportsCount").textContent = registrations.filter(r => r.event === "Sports Gala").length;
  document.getElementById("musicCount").textContent = registrations.filter(r => r.event === "Music Night").length;
  document.getElementById("cultureCount").textContent = registrations.filter(r => r.event === "Culture Day").length;
  document.getElementById("societyCount").textContent = registrations.filter(r => r.event === "Society Fair").length;
}

function showAlert(message, type) {
  const container = document.getElementById("alertContainer");
  container.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show rounded-3 shadow-sm" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  setTimeout(function () {
    container.innerHTML = "";
  }, 4000);
}