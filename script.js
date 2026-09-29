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
    bgImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSucK3s159XDJlLe2lm0r9Stg31ow5AlhR6nWboXREQ&s=10"
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
    bgImageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80"
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
    cardImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxP3ccYxj7dJcMTmoXfpxyAAbU3ga1Rm7vZothKQ7YLQ&s=10",
    /* PLACEHOLDER URL: Replace with your custom Culture Day form background image URL */
    bgImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ircc7nGzmH4U28If4qLisXdPZVrs_o8vAyrF8PnMCQ&s=10"
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
    bgImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55UmuKOoFbpEndmMOR-KPufClyIwXFuYNQgbNSAQskA&s=10"
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