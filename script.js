/* -------------------------------------------------
   College Event Management – Minimal JavaScript
   ------------------------------------------------- */

/* ---------- 0. Helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- 1. Load static event data from HTML ----------
   (No external fetch – data lives in the page itself) */
const events = JSON.parse($('#event-data').textContent);

/* ---------- 2. Render event cards ---------- */
function renderCards() {
    const container = $('#cardsContainer');
    container.innerHTML = events.map(ev => `
        <div class="card shadow-sm rounded-3">
            <img src="${ev.image}" class="card-img-top" alt="${ev.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-1">${ev.title}</h5>
                <span class="badge mb-2">${ev.category}</span>
                <p class="card-text flex-grow-1">${ev.description}</p>
                <p class="mb-1"><strong>Date:</strong> ${ev.date}</p>
                <p class="mb-3"><strong>Location:</strong> ${ev.location}</p>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-primary btn-sm"
                            onclick="showDetails(${ev.id})">Details</button>
                    <button class="btn btn-primary btn-sm"
                            onclick="applyNow(${ev.id})">Apply Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

/* ---------- 3. Populate the Event <select> ---------- */
function fillEventSelect(selected = '') {
    const sel = $('#eventSelect');
    sel.innerHTML = `<option value="">Choose…</option>` +
        events.map(ev => `<option value="${ev.id}" ${ev.id == selected ? 'selected' : ''}>${ev.title}</option>`).join('');
}

/* ---------- 4. Details modal (single reusable) ---------- */
function showDetails(id) {
    const ev = events.find(e => e.id === id);
    if (!ev) return;
    $('#detailsLabel').textContent = ev.title;
    $('#detailsBody').innerHTML = `
        <p><strong>Category:</strong> ${ev.category}</p>
        <p><strong>Date:</strong> ${ev.date}</p>
        <p><strong>Location:</strong> ${ev.location}</p>
        <p>${ev.description}</p>
        <h6>Activities</h6>
        <ul>${ev.activities.map(a => `<li>${a}</li>`).join('')}</ul>
    `;
    new bootstrap.Modal($('#detailsModal')).show();
}

/* ---------- 5. Apply Now – pre‑fill form ---------- */
function applyNow(id) {
    const ev = events.find(e => e.id === id);
    if (!ev) return;
    fillEventSelect(id);
    $('#eventDate').value = ev.date;
    updateActivityBox();
    $('#registration').scrollIntoView({ behavior: 'smooth' });
}

/* ---------- 6. Update activity checkboxes when event changes ---------- */
function updateActivityBox() {
    const sel = $('#eventSelect');
    const box = $('#activityBox');
    box.innerHTML = '';

    const evId = Number(sel.value);
    if (!evId) {
        $('#eventDate').value = '';
        return;
    }
    const ev = events.find(e => e.id === evId);
    $('#eventDate').value = ev.date;

    ev.activities.forEach((act, i) => {
        const id = `act-${evId}-${i}`;
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4';
        col.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox"
                       id="${id}" name="activities" value="${act}">
                <label class="form-check-label" for="${id}">${act}</label>
            </div>
        `;
        box.appendChild(col);
    });
}

/* ---------- 7. Form handling – CREATE & UPDATE ---------- */
function handleSubmit(e) {
    e.preventDefault();
    const form = $('#regForm');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const editId = $('#editId').value;
    const reg = {
        id: editId ? Number(editId) : Date.now(),
        name: $('#fullName').value.trim(),
        studentId: $('#studentId').value.trim(),
        email: $('#email').value.trim(),
        phone: $('#phone').value.trim(),
        department: $('#department').value,
        semester: $('#semester').value,
        eventId: Number($('#eventSelect').value),
        eventDate: $('#eventDate').value,
        activities: $$('input[name="activities"]:checked').map(cb => cb.value)
    };

    const list = JSON.parse(localStorage.getItem('eventRegistrations')) || [];

    if (editId) {
        const idx = list.findIndex(r => r.id === reg.id);
        if (idx !== -1) list[idx] = reg;
        $('#submitBtn').textContent = 'Register Now';
        $('#editId').value = '';
    } else {
        list.push(reg);
    }

    localStorage.setItem('eventRegistrations', JSON.stringify(list));
    renderTable();
    form.reset();
    form.classList.remove('was-validated');
    fillEventSelect();            // back to empty state
    $('#activityBox').innerHTML = '';
}

/* ---------- 8. Render registration table (READ) ---------- */
function renderTable() {
    const tbody = $('#regBody');
    const regs = JSON.parse(localStorage.getItem('eventRegistrations')) || [];

    if (regs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4">No registrations found.</td></tr>`;
        renderDashboard([]);
        return;
    }

    tbody.innerHTML = regs.map((r, i) => {
        const ev = events.find(e => e.id === r.eventId);
        const acts = r.activities.length ? r.activities.join(', ') : '-';
        return `
            <tr>
                <td>${i + 1}</td>
                <td>${r.name}</td>
                <td>${r.studentId}</td>
                <td>${r.department}</td>
                <td>${ev ? ev.title : 'N/A'}</td>
                <td>${r.semester}</td>
                <td>${acts}</td>
                <td class="text-nowrap">
                    <button class="btn btn-sm btn-outline-primary me-1"
                            onclick="editReg(${r.id})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger"
                            onclick="deleteReg(${r.id})">Delete</button>
                </td>
            </tr>
        `;
    }).join('');

    renderDashboard(regs);
}

/* ---------- 9. Edit – populate form ---------- */
function editReg(id) {
    const regs = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    const r = regs.find(x => x.id === id);
    if (!r) return;

    $('#fullName').value = r.name;
    $('#studentId').value = r.studentId;
    $('#email').value = r.email;
    $('#phone').value = r.phone;
    $('#department').value = r.department;
    $('#semester').value = r.semester;

    fillEventSelect(r.eventId);
    $('#eventDate').value = r.eventDate;
    updateActivityBox();

    // mark previously chosen activities
    r.activities.forEach(act => {
        const cb = $$('input[name="activities"]').find(i => i.value === act);
        if (cb) cb.checked = true;
    });

    $('#editId').value = r.id;
    $('#submitBtn').textContent = 'Update Registration';
    $('#registration').scrollIntoView({ behavior: 'smooth' });
}

/* ---------- 10. Delete ---------- */
function deleteReg(id) {
    if (!confirm('Delete this registration?')) return;
    let regs = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    regs = regs.filter(r => r.id !== id);
    localStorage.setItem('eventRegistrations', JSON.stringify(regs));
    renderTable();
}

/* ---------- 11. Clear All ---------- */
function clearAll() {
    if (!confirm('Delete **all** registrations?')) return;
    localStorage.removeItem('eventRegistrations');
    renderTable();
}

/* ---------- 12. Dashboard cards (counters) ---------- */
function renderDashboard(regs) {
    const dash = $('#dashboard');
    dash.innerHTML = '';

    const total = regs.length;
    const perEvent = events.map(ev => ({
        name: ev.title,
        count: regs.filter(r => r.eventId === ev.id).length
    }));

    const cards = [
        { title: 'Total Registrations', value: total, class: 'bg-primary' },
        ...perEvent.map(c => ({ title: c.name, value: c.count, class: 'bg-success' }))
    ];

    cards.forEach(c => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-sm-6';
        col.innerHTML = `
            <div class="dashboard-card ${c.class} text-white rounded-3">
                <h6 class="mb-2">${c.title}</h6>
                <h3 class="mb-0">${c.value}</h3>
            </div>
        `;
        dash.appendChild(col);
    });
}

/* ---------- 13. Initial page setup ---------- */
document.addEventListener('DOMContentLoaded', () => {
    renderCards();               // event cards
    fillEventSelect();           // empty dropdown
    $('#regForm').addEventListener('submit', handleSubmit);
    renderTable();               // load any saved registrations
});