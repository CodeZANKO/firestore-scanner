// Bilingual Translation Dictionary
const translations = {
    ku: {
        app_subtitle: "سیستەمی تاقیکردنەوەی ئاسایشی فایەرستۆر",
        status_disconnected: "دەتەواو نەکراوە (پێویستە ببەسترێتەوە)",
        status_connected: "بەستراوەتەوە بە: ",
        config_title: "ڕێکخستنی فایەربەیس",
        config_desc: "کۆدی ڕێکخستنی Firebase SDK لێرە بنووسە بۆ بەستنەوەی داتابەیسەکەت.",
        label_config_json: "کۆدی کۆنفیدێنس (JS Object یان JSON):",
        btn_connect: "بەستنەوە و چالاککردن",
        label_save_config: "بیرمەخەرەوە (لۆکاڵ ستۆریج)",
        nav_finder_title: "دۆزەرەوەی فۆڵدەرەکان",
        nav_finder_subtitle: "پشکنینی ناوە باوەکان",
        nav_scanner_title: "پشکنەری قووڵی کێڵگەکان",
        nav_scanner_subtitle: "یاساکانی دەستگەیشتن و دەرزی لێدان",
        finder_title: "دۆزەرەوەی فۆڵدەرە شاراوەکانی داتابەیس (Discovery Scan)",
        finder_desc: "ئەم مۆدیوڵە ناوی باو و ئەگەرییەکانی فۆڵدەرەکانی Firestore تاقی دەکاتەوە بۆ دۆزینەوەی ئەو فۆڵدەرانەی کە پارێزراو نین یان لەسەر کۆدەکەت ڕانەگەیەندراون.",
        scan_options: "ڕێکخستنەکانی پشکنین",
        preset_lists: "لیستە پێشوەختەکان:",
        custom_list_label: "ناوی کۆڵۆمەکان بۆ پشکنین (دابەشکراو بە کۆما یان دێڕی نوێ):",
        scan_delay: "ماوەی نێوان تاقیکردنەوەکان (Delay):",
        btn_start_scan: "دەستپێکردنی پشکنین",
        btn_stop_scan: "ڕاگرتن",
        stat_scanned: "پشکێندراو",
        stat_exposed: "فۆڵدەری ئاشکرا",
        stat_protected: "پارێزراو",
        discovered_collections: "کۆلێکشنە دۆزراوەکان",
        send_all_scanner: "ڕەوانەکردنی هەموو بۆ پشکنەری گشتگیر",
        empty_discovered: "پشکنین دەستپێبکە بۆ دۆزینەوەی فۆڵدەرەکان.",
        console_logs: "کۆنسۆڵ و لۆگەکانی ڕاستەوخۆ",
        filter_all: "سەرجەم",
        filter_exposed: "ئاشکراکان",
        filter_protected: "پارێزراوەکان",
        clear_logs: "پاكکردنەوە",
        console_placeholder: "لۆگی کارکردنی پشکنەرەکە لێرە بە ڕاستەوخۆ نیشان دەدرێت...",
        scanner_title: "پشکنەری تەواوی کێڵگەکان و یاساکانی دەستگەیشتن",
        scanner_desc: "ئەم مۆدیوڵە پشکنینی قووڵ ئەنجام دەدات بۆ زانینی مافەکانی خوێندنەوە و نووسینی ناو هەر فۆڵدەرێک، کێڵگەکان دەپشکنێت و تاقیکردنەوەی دەرزی لێدان (Data Injection) دەکات.",
        btn_run_all_scans: "پشکنینی گشتگیر بۆ هەمووان",
        global_limit: "ژمارەی داتای خوێندنەوە (Limit):",
        add_col_label: "زیادکردنی کۆلێکشن بە دەستی:",
        btn_add: "زیادکردن",
        edit_mock_title: "دەستکاریکردنی داتای تاقیکاری (Mock Data)",
        mock_modal_desc: "ئەم داتایە بەکاردێت بۆ تاقیکردنەوەی دەرزی لێدان (Injection/Write Test) لە کۆلێکشنەکەدا.",
        btn_cancel: "پاشگەزبوونەوە",
        btn_save: "پاشەکەوتکردن",

        // Log events
        log_init_success: "[INFO] فایەربەیس بە سەرکەوتوویی بەسترایەوە. ناسنامەی پڕۆژە: {project}",
        log_init_error: "[ERROR] خەتا لە بەستنەوەی فایەربەیس: {error}",
        log_scan_started: "[INFO] دەستپێکردنی پشکنینی دۆزینەوە بە {count} ناوی کۆلێکشن...",
        log_scan_stopped: "[WARNING] پشکنین لەلایەن بەکارهێنەرەوە ڕاگیرا.",
        log_scan_completed: "[SUCCESS] پشکنین کۆتایی هات! {found} کۆلێکشن دۆزرانەوە لە کۆی {total}.",
        log_checking: "خەریکە تاقی دەکرێتەوە: {name}...",
        log_success: "[EXPOSED] فۆڵدەری '{name}' خوێندنەوەی کراوەیە (ئاسایشی لاوازە!)",
        log_protected: "[PROTECTED] فۆڵدەری '{name}' هەیە بەڵام پارێزراوە (خوێندنەوە ڕەتکرایەوە - یاسای ڕێگەپێدان چالاکە)",
        log_not_found: "[NOT FOUND] فۆڵدەری '{name}' بوونی نییە یان دەستی پێناگات",

        // Scanner cards
        scan_limit_label: "Limit (تۆمارەکان):",
        btn_deep_scan: "پشکنینی قووڵ 🔍",
        status_waiting: "چاوەڕوانە...",
        status_scanning: "خەریکی پشکنینە...",
        scan_read_ok: "❌ خوێندنەوە: کراوەیە! داتاکان دۆزرانەوە.",
        scan_read_empty: "❌ خوێندنەوە: ڕێگەی دا، بەڵام ئەم فۆڵدەرە لە داتابەیسەکەتا چۆڵە.",
        scan_read_secure: "✅ خوێندنەوە: پارێزراوە 🔒 (هیچ کێڵگەیەک دەرنەکەوت)",
        scan_read_error: "⚠️ خوێندنەوە خەتای تێدایە: {err}",
        scan_write_ok: "❌ Inject: سەرکەوتوو بوو! داتای تاقیکاری نووسرا.",
        scan_write_secure: "✅ Inject: ڕێگەی نەدا (پارێزراوە) 🔒",
        scan_write_error: "⚠️ خەتای نووسین: {err}",

        posture_secure: "پارێزراو 🔒",
        posture_exposed: "داتای ئاشکرا ⚠️",
        posture_write_vuln: "لاوازی نووسین ✍️",
        posture_critical: "مەترسی گەورە 🚨",
        posture_unknown: "نەپشکێندراو",

        err_invalid_json: "خەتا: تکایە دڵنیابەرەوە لە دروستی کۆدی JSON",
        placeholder_new_col: "کۆلێکشن نوێ...",
        alert_no_firebase: "تکایە سەرەتا فایەربەیس گرێ بدە و چالاکی بکە لە پانێڵی لای ڕاست!",
        alert_col_exists: "ئەم کۆلێکشنە پێشتر لە لیستی پشکنەرەکەدا هەیە."
    },
    en: {
        app_subtitle: "Firebase Firestore Security Auditor",
        status_disconnected: "Disconnected (Action Required)",
        status_connected: "Connected to: ",
        config_title: "Firebase Configuration",
        config_desc: "Paste your Firebase SDK configuration code here to connect to your database.",
        label_config_json: "Config Code (JS Object or JSON):",
        btn_connect: "Connect & Initialize",
        label_save_config: "Remember Me (Local Storage)",
        nav_finder_title: "Collection Finder",
        nav_finder_subtitle: "Brute-Force Discovery",
        nav_scanner_title: "Deep Field Scanner",
        nav_scanner_subtitle: "Access Rules & Injection",
        finder_title: "Database Hidden Collections Finder (Discovery Scan)",
        finder_desc: "This module tests common and potential collection names in Firestore to find unregistered collections that might have weak security rules.",
        scan_options: "Scan Settings",
        preset_lists: "Preset Lists:",
        custom_list_label: "Collection names to scan (comma or line separated):",
        scan_delay: "Delay between requests:",
        btn_start_scan: "Start Scan",
        btn_stop_scan: "Stop",
        stat_scanned: "Scanned",
        stat_exposed: "Exposed Folders",
        stat_protected: "Protected Folders",
        discovered_collections: "Discovered Collections",
        send_all_scanner: "Send All to Deep Scanner",
        empty_discovered: "Start a discovery scan to detect active collections.",
        console_logs: "Console & Live Activity Logs",
        filter_all: "All Logs",
        filter_exposed: "Exposed Only",
        filter_protected: "Protected Only",
        clear_logs: "Clear Console",
        console_placeholder: "Live scanner activities will be displayed here...",
        scanner_title: "Comprehensive Field & Access Rules Scanner",
        scanner_desc: "This module runs targeted read/write tests on specific collections, identifies active fields (columns), and conducts mock data injection vulnerability checks.",
        btn_run_all_scans: "Scan All Collections",
        global_limit: "Read Limit (Records):",
        add_col_label: "Manually Add Collection:",
        btn_add: "Add",
        edit_mock_title: "Edit Payload (Mock Data)",
        mock_modal_desc: "This data payload is used for conducting the write/injection test in this collection.",
        btn_cancel: "Cancel",
        btn_save: "Save changes",

        // Log events
        log_init_success: "[INFO] Firebase initialized successfully. Project ID: {project}",
        log_init_error: "[ERROR] Firebase initialization failed: {error}",
        log_scan_started: "[INFO] Starting discovery scan with {count} collection names...",
        log_scan_stopped: "[WARNING] Scan aborted by user.",
        log_scan_completed: "[SUCCESS] Scan complete! {found} collections detected out of {total}.",
        log_checking: "Testing: {name}...",
        log_success: "[EXPOSED] Collection '{name}' is readable! (Vulnerable rule structure)",
        log_protected: "[PROTECTED] Collection '{name}' exists but is protected. (Read denied - Rules applied)",
        log_not_found: "[NOT FOUND] Collection '{name}' is empty or does not exist.",

        // Scanner cards
        scan_limit_label: "Scan Limit:",
        btn_deep_scan: "Deep Scan 🔍",
        status_waiting: "Pending...",
        status_scanning: "Scanning...",
        scan_read_ok: "❌ Read: OPEN! Data exposed.",
        scan_read_empty: "❌ Read: OPEN, but this collection is empty.",
        scan_read_secure: "✅ Read: PROTECTED 🔒 (No columns exposed)",
        scan_read_error: "⚠️ Read Error: {err}",
        scan_write_ok: "❌ Inject: SUCCESS! Mock payload written.",
        scan_write_secure: "✅ Inject: BLOCKED 🔒 (Protected)",
        scan_write_error: "⚠️ Write Error: {err}",

        posture_secure: "Secure 🔒",
        posture_exposed: "Exposed Data ⚠️",
        posture_write_vuln: "Write Vuln ✍️",
        posture_critical: "Critical Risk 🚨",
        posture_unknown: "Unscanned",

        err_invalid_json: "Error: Please check that your input is a valid JSON.",
        placeholder_new_col: "New collection name...",
        alert_no_firebase: "Please connect and initialize Firebase first using the configuration sidebar!",
        alert_col_exists: "This collection is already added to the scanner list."
    }
};

// Global App State
let currentLang = 'ku';
let firebaseApp = null;
let db = null;
let activeScanTimeout = null;
let isScanning = false;
let stopRequested = false;

// Scan statistics
let totalScanned = 0;
let exposedCount = 0;
let protectedCount = 0;
let discoveredCollectionsList = []; // Array of { name, status }
let activeLogs = []; // Array of { type: 'SUCCESS'|'PROTECTED'|'NOT-FOUND'|'INFO', text }
let unreadLogsCount = 0;

// Standard common collections
const commonNamesPresetStandard = [
    "admin", "admins", "settings", "config", "users", "profiles", "orders", "payments", "logs",
    "chats", "messages", "notifications", "downloads", "uploads", "categories", "comments",
    "favorites", "history", "tokens", "sessions", "roles", "feedback", "contact",
    "reports", "analytics", "dashboard", "archive"
];

// Extended common collections
const commonNamesPresetExtended = [
    "admin", "admins", "settings", "config", "users", "profiles", "orders", "payments", "logs",
    "chats", "messages", "notifications", "downloads", "uploads", "categories", "comments",
    "favorites", "history", "tokens", "sessions", "roles", "feedback", "contact",
    "reports", "analytics", "dashboard", "archive", "accounts", "posts", "books",
    "stories", "reviews", "quotes", "poetry", "proverbs", "bookRequests", "items",
    "products", "cart", "transactions", "activity", "assets", "files", "images",
    "inventory", "subcategories", "tags", "events", "bookings", "reservations",
    "replies", "articles", "drafts", "pages", "templates", "keys", "secrets", "audits"
];

// Deep scanner targeted collections
let scannerCollections = [

];

let activeEditingMockId = null;

// Initializer on document load
document.addEventListener("DOMContentLoaded", () => {
    // 1. Hook up language tabs
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const lang = e.target.getAttribute("data-lang");
            setLanguage(lang);
        });
    });

    // 2. Hook up Navigation Tabs
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // 3. Load configuration if saved in local storage
    const savedConfig = localStorage.getItem("fireguard_fb_config");
    if (savedConfig) {
        document.getElementById("config-input").value = savedConfig;
        document.getElementById("save-config").checked = true;
    }

    // Initialize UI language
    setLanguage('ku');
    loadPreset('standard');
    renderScannerGrid();
});

// Switch Tabs Panel
function switchTab(tabId) {
    document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    document.querySelector(`.nav-item[data-tab="${tabId}"]`).classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

// Localization Engine
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Set Document attributes
    if (lang === 'ku') {
        document.documentElement.setAttribute("lang", "ku");
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("dir", "ltr");
    }

    // Update all localizable texts in UI
    document.querySelectorAll("[data-localize]").forEach(el => {
        const key = el.getAttribute("data-localize");
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'submit')) {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                // If it contains icons, retain them and replace only text
                const icon = el.querySelector("i");
                if (icon) {
                    el.innerHTML = "";
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(" " + translations[lang][key]));
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    // Re-render dynamically generated grids to adapt to language
    renderDiscoveredGrid();
    renderScannerGrid();
}

// Translate dynamic message with tokens
function t(key, tokens = {}) {
    let text = translations[currentLang][key] || key;
    for (const [k, v] of Object.entries(tokens)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

// Helper: Custom Toast / Alert dialogs
function showAlert(key, tokens = {}) {
    alert(t(key, tokens));
}

// Parse Firebase Configuration Input
function parseFirebaseConfig(rawInput) {
    // Tries to clean standard Javascript configuration syntax to make it valid JSON
    let text = rawInput.trim();

    // If it is standard code containing `const firebaseConfig = { ... }` or similar
    if (text.includes("{") && text.includes("}")) {
        const start = text.indexOf("{");
        const end = text.lastIndexOf("}");
        text = text.substring(start, end + 1);
    }

    // Transform JS-like object syntax key-value pairs into valid JSON formats
    // Example: apiKey: "value" -> "apiKey": "value"
    let cleaned = text
        .replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":') // Wrap object keys in quotes
        .replace(/'/g, '"') // Replace single quotes with double quotes
        .replace(/,\s*([}\]])/g, '$1') // Remove trailing commas
        .replace(/\/\/.*/g, ''); // Remove inline JS comments

    try {
        return JSON.parse(cleaned);
    } catch (e) {
        // Fallback: If parsing fails, try evaluating if it is an object literal
        try {
            // Evaluates safely as a JavaScript object definition (only for configuration setup)
            return Function(`"use strict"; return (${text})`)();
        } catch (err) {
            throw new Error(t('err_invalid_json'));
        }
    }
}

// Initialize Firebase App Instance
function initializeFirebaseApp() {
    const rawInput = document.getElementById("config-input").value;
    const saveCheck = document.getElementById("save-config").checked;

    try {
        const configObj = parseFirebaseConfig(rawInput);
        if (!configObj || !configObj.projectId) {
            throw new Error("Missing projectId in Firebase Config.");
        }

        // Save to localstorage if checked
        if (saveCheck) {
            localStorage.setItem("fireguard_fb_config", rawInput);
        } else {
            localStorage.removeItem("fireguard_fb_config");
        }

        // De-initialize previous instances
        if (firebase.apps.length > 0) {
            firebase.apps.forEach(app => app.delete());
        }

        firebaseApp = firebase.initializeApp(configObj);
        db = firebaseApp.firestore();

        // Update connection status
        const statusBadge = document.getElementById("connection-status");
        statusBadge.className = "status-badge connected";
        statusBadge.querySelector(".status-text").textContent = t('status_connected') + configObj.projectId;

        logToConsole('log_init_success', { project: configObj.projectId }, 'INFO');

    } catch (error) {
        const statusBadge = document.getElementById("connection-status");
        statusBadge.className = "status-badge disconnected";
        statusBadge.querySelector(".status-text").textContent = t('status_disconnected');

        logToConsole('log_init_error', { error: error.message }, 'NOT-FOUND');
        showAlert('log_init_error', { error: error.message });
    }
}

// Preset Loader
function loadPreset(presetName) {
    document.querySelectorAll(".btn-preset").forEach(btn => {
        if (btn.getAttribute("data-preset") === presetName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const textarea = document.getElementById("custom-names");
    if (presetName === 'standard') {
        textarea.value = commonNamesPresetStandard.join(", ");
        textarea.disabled = true;
    } else if (presetName === 'extended') {
        textarea.value = commonNamesPresetExtended.join(", ");
        textarea.disabled = true;
    } else {
        textarea.value = "";
        textarea.disabled = false;
        textarea.focus();
    }
}

// Delay Slider Label Updates
function updateDelayLabel(val) {
    document.getElementById("delay-val").textContent = val + "ms";
}

// Live Logger console operations
function logToConsole(key, tokens = {}, type = 'INFO') {
    const rawText = t(key, tokens);
    const consoleBox = document.getElementById("console-logs");

    // Remove placeholder
    const placeholder = consoleBox.querySelector(".console-placeholder");
    if (placeholder) placeholder.remove();

    const timestamp = new Date().toLocaleTimeString();
    const logLineText = `[${timestamp}] ${rawText}`;

    activeLogs.push({ type, text: logLineText });

    // Add to Console UI
    const span = document.createElement("div");
    span.className = `log-line ${type}`;
    span.textContent = logLineText;
    consoleBox.appendChild(span);

    // Scroll to bottom
    consoleBox.scrollTop = consoleBox.scrollHeight;
    
    // Increment unread badge if closed
    const drawer = document.getElementById("global-console");
    if (drawer && drawer.classList.contains("closed")) {
        unreadLogsCount++;
        const counter = document.getElementById("active-log-counter");
        if (counter) {
            counter.textContent = unreadLogsCount;
            counter.style.display = "inline-block";
        }
    }
}

// Clear active activity logs
function clearLogs() {
    activeLogs = [];
    const consoleBox = document.getElementById("console-logs");
    consoleBox.innerHTML = `<span class="console-placeholder">${t('console_placeholder')}</span>`;
}

// Filters live logs
function filterLogs(filterType) {
    document.querySelectorAll(".console-filter-btn").forEach(btn => {
        if (btn.getAttribute("data-filter") === filterType) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const consoleBox = document.getElementById("console-logs");
    consoleBox.innerHTML = "";

    const logsToDisplay = activeLogs.filter(log => {
        if (filterType === 'all') return true;
        return log.type === filterType;
    });

    if (logsToDisplay.length === 0) {
        consoleBox.innerHTML = `<span class="console-placeholder">${t('console_placeholder')}</span>`;
    } else {
        logsToDisplay.forEach(log => {
            const span = document.createElement("div");
            span.className = `log-line ${log.type}`;
            span.textContent = log.text;
            consoleBox.appendChild(span);
        });
    }
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Toggle Console Drawer height
function toggleConsoleDrawer(expandOnly = false) {
    const drawer = document.getElementById("global-console");
    if (!drawer) return;
    
    const chevron = document.getElementById("console-chevron");
    const isClosed = drawer.classList.contains("closed");
    
    if (expandOnly || isClosed) {
        drawer.classList.remove("closed");
        if (chevron) chevron.className = "fa-solid fa-chevron-down";
        
        // Reset unread logs counter
        unreadLogsCount = 0;
        const counter = document.getElementById("active-log-counter");
        if (counter) counter.style.display = "none";
    } else {
        drawer.classList.add("closed");
        if (chevron) chevron.className = "fa-solid fa-chevron-up";
    }
}

// Brute-force Finder Scanner Logic
async function startFinderScan() {
    if (!db) {
        showAlert('alert_no_firebase');
        switchTab('tab-config'); // Focus configuration
        return;
    }

    const customNamesVal = document.getElementById("custom-names").value;
    // Split by comma or new lines and filter out empty strings
    const scanList = customNamesVal
        .split(/[\n,]+/)
        .map(name => name.trim())
        .filter(name => name.length > 0);

    if (scanList.length === 0) return;

    isScanning = true;
    stopRequested = false;
    totalScanned = 0;
    exposedCount = 0;
    protectedCount = 0;
    discoveredCollectionsList = [];

    // Update Controls UI
    document.getElementById("btn-start-scan").disabled = true;
    document.getElementById("btn-stop-scan").disabled = false;
    document.querySelectorAll(".btn-preset").forEach(b => b.disabled = true);
    document.getElementById("custom-names").disabled = true;

    // Initialize Stats UI
    updateStatsUI();

    // Progress Bar Setup
    const progressContainer = document.getElementById("progress-container");
    progressContainer.classList.remove("hidden");
    updateProgressBar(0, scanList.length, "");

    // Auto-expand console drawer on scan start
    toggleConsoleDrawer(true);
    
    logToConsole('log_scan_started', { count: scanList.length }, 'INFO');

    const delay = parseInt(document.getElementById("scan-delay").value) || 0;

    for (let i = 0; i < scanList.length; i++) {
        if (stopRequested) {
            logToConsole('log_scan_stopped', {}, 'NOT-FOUND');
            break;
        }

        const colName = scanList[i];
        updateProgressBar(i, scanList.length, t('log_checking', { name: colName }));

        try {
            // Attempt to fetch 1 single document
            const snap = await db.collection(colName).limit(1).get();

            // If it succeeds without error: Collection exists and is read-open!
            exposedCount++;
            discoveredCollectionsList.push({ name: colName, status: 'SUCCESS' });
            logToConsole('log_success', { name: colName }, 'SUCCESS');

            // Automatically add to Deep Field Scanner
            addDiscoveredCollectionAutomatically(colName);

        } catch (error) {
            if (error.code === 'permission-denied') {
                // Rule denied: Collection exists but secure!
                protectedCount++;
                discoveredCollectionsList.push({ name: colName, status: 'PROTECTED' });
                logToConsole('log_protected', { name: colName }, 'PROTECTED');

                // Automatically add to Deep Field Scanner
                addDiscoveredCollectionAutomatically(colName);
            } else {
                // Other errors: Assume collection does not exist or network issue
                logToConsole('log_not_found', { name: colName }, 'NOT-FOUND');
            }
        }

        totalScanned++;
        updateStatsUI();
        renderDiscoveredGrid();

        // Wait delay if specified
        if (delay > 0 && i < scanList.length - 1) {
            await new Promise(resolve => {
                activeScanTimeout = setTimeout(resolve, delay);
            });
        }
    }

    // Scan completed
    isScanning = false;
    updateProgressBar(scanList.length, scanList.length, t('log_scan_completed', { found: exposedCount + protectedCount, total: scanList.length }));
    logToConsole('log_scan_completed', { found: exposedCount + protectedCount, total: scanList.length }, 'SUCCESS');

    // Re-enable controls
    document.getElementById("btn-start-scan").disabled = false;
    document.getElementById("btn-stop-scan").disabled = true;
    document.getElementById("custom-names").disabled = document.querySelector(".btn-preset.active").getAttribute("data-preset") !== 'custom';
    document.querySelectorAll(".btn-preset").forEach(b => {
        if (b.getAttribute("data-preset") === 'custom') {
            b.disabled = false;
        } else {
            b.disabled = false;
        }
    });

    // Reveal send all button if items found
    const btnSendAll = document.getElementById("btn-send-all-scanner");
    if (discoveredCollectionsList.length > 0) {
        btnSendAll.style.display = "inline-flex";
    } else {
        btnSendAll.style.display = "none";
    }
}

// Request scanner scan abort
function stopFinderScan() {
    stopRequested = true;
    if (activeScanTimeout) clearTimeout(activeScanTimeout);
}

// Update Scan Stats Counters UI
function updateStatsUI() {
    document.getElementById("stat-scanned-val").textContent = totalScanned;
    document.getElementById("stat-exposed-val").textContent = exposedCount;
    document.getElementById("stat-protected-val").textContent = protectedCount;
}

// Update Progress bar indicators
function updateProgressBar(current, total, activeText) {
    const fill = document.getElementById("progress-bar-fill");
    const text = document.getElementById("progress-text");
    const activeLabel = document.getElementById("current-checking-name");

    const pct = total > 0 ? Math.round((current / total) * 100) : 0;
    fill.style.width = pct + "%";
    text.textContent = `Progress: ${current}/${total} (${pct}%)`;
    activeLabel.textContent = activeText;
}

// Render Discovery Collections dynamic panel
function renderDiscoveredGrid() {
    const list = document.getElementById("discovered-list");
    list.innerHTML = "";

    if (discoveredCollectionsList.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-folder-open"></i>
                <p data-localize="empty_discovered">${t('empty_discovered')}</p>
            </div>
        `;
        return;
    }

    discoveredCollectionsList.forEach(col => {
        const card = document.createElement("div");
        card.className = "discovery-card";

        const isSuccess = col.status === 'SUCCESS';
        const badgeClass = isSuccess ? 'badge-exposed' : 'badge-protected';
        const badgeLabel = isSuccess ? t('stat_exposed') : t('stat_protected');
        const icon = isSuccess ? 'fa-triangle-exclamation' : 'fa-lock';

        card.innerHTML = `
            <div class="discovery-col-info">
                <div class="col-name">📁 ${col.name}</div>
                <div>
                    <span class="badge ${badgeClass}"><i class="fa-solid ${icon}"></i> ${badgeLabel}</span>
                </div>
            </div>
            <div class="discovery-actions">
                <button class="action-circle-btn" onclick="sendToFieldScanner('${col.name}')" title="Send to Field Scanner">
                    <i class="fa-solid fa-share"></i>
                </button>
            </div>
        `;
        list.appendChild(card);
    });
}

// Automatically add discovered item to Deep Field Scanner
function addDiscoveredCollectionAutomatically(colId) {
    const exists = scannerCollections.some(c => c.id === colId);
    if (!exists) {
        scannerCollections.push({
            id: colId,
            name: `${colId} (Discovered)`,
            mock: { auditTag: "FireGuard Inject", testDate: new Date() }
        });
        renderScannerGrid();
    }
}

// Send discovered item to Field Scanner list
function sendToFieldScanner(colId) {
    const exists = scannerCollections.some(c => c.id === colId);
    if (exists) {
        alert(t('alert_col_exists'));
        return;
    }

    // Seed new collection with intelligent defaults mock
    scannerCollections.push({
        id: colId,
        name: `${colId} (Discovered)`,
        mock: { auditTag: "FireGuard Inject", testDate: new Date() }
    });

    renderScannerGrid();
    showAlert('btn_add');
    switchTab('tab-scanner');
}

// Send all discovered items to Deep Field scanner
function sendAllToScanner() {
    let addedCount = 0;
    discoveredCollectionsList.forEach(col => {
        const exists = scannerCollections.some(c => c.id === col.name);
        if (!exists) {
            scannerCollections.push({
                id: col.name,
                name: `${col.name} (Discovered)`,
                mock: { auditTag: "FireGuard Inject", testDate: new Date() }
            });
            addedCount++;
        }
    });

    renderScannerGrid();
    alert(`Successfully imported ${addedCount} collections to the Deep Scanner list.`);
    switchTab('tab-scanner');
}

// Add collection to scanner manually
function addCollectionToScannerManually() {
    const colIdInput = document.getElementById("new-col-id");
    const colId = colIdInput.value.trim();

    if (!colId) return;

    const exists = scannerCollections.some(c => c.id === colId);
    if (exists) {
        alert(t('alert_col_exists'));
        return;
    }

    scannerCollections.push({
        id: colId,
        name: `${colId} (Manual)`,
        mock: { auditTag: "FireGuard Manual Inject", createdAt: new Date() }
    });

    colIdInput.value = "";
    renderScannerGrid();
}

// Render dynamic scan cards for Field Scanner
function renderScannerGrid() {
    const grid = document.getElementById("scanner-grid");
    grid.innerHTML = "";

    scannerCollections.forEach(col => {
        const colCard = document.createElement("div");
        colCard.className = "scanner-card card posture-unknown";
        colCard.id = `scan-card-${col.id}`;

        colCard.innerHTML = `
            <div class="scanner-card-header">
                <div class="scanner-card-title">📁 ${col.name}</div>
                <div class="scanner-card-actions">
                    <span class="scanner-posture-badge posture-unknown" id="posture-badge-${col.id}">${t('posture_unknown')}</span>
                    <button class="action-circle-btn" onclick="openMockDataModal('${col.id}')" title="Configure Mock payload">
                        <i class="fa-solid fa-code"></i>
                    </button>
                </div>
            </div>
            
            <div class="scanner-card-body">
                <div class="scan-details">
                    <!-- Read Test Phase -->
                    <div class="scan-phase">
                        <div class="phase-header">
                            <span><i class="fa-solid fa-folder-open"></i> Read Access Test:</span>
                            <span class="phase-status-error" id="read-phase-status-${col.id}">${t('status_waiting')}</span>
                        </div>
                        <div class="code-container hidden" id="read-container-${col.id}">
                            <div class="code-box" id="read-result-${col.id}"></div>
                            <button class="btn-copy-code" onclick="copyToClipboard('read-result-${col.id}')"><i class="fa-solid fa-copy"></i></button>
                        </div>
                    </div>
                    
                    <!-- Write Test Phase -->
                    <div class="scan-phase">
                        <div class="phase-header">
                            <span><i class="fa-solid fa-pencil"></i> Inject (Write) Test:</span>
                            <span class="phase-status-error" id="write-phase-status-${col.id}">${t('status_waiting')}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scanner-card-footer">
                <button class="btn btn-primary btn-sm flex-1" onclick="testSingleCollectionAllFields('${col.id}')">
                    <i class="fa-solid fa-shield-virus"></i> ${t('btn_deep_scan')}
                </button>
            </div>
        `;

        grid.appendChild(colCard);
    });
}

// Deep Scan a single collection card
async function testSingleCollectionAllFields(colId) {
    if (!db) {
        showAlert('alert_no_firebase');
        return;
    }

    const colObj = scannerCollections.find(c => c.id === colId);
    if (!colObj) return;

    const card = document.getElementById(`scan-card-${colId}`);
    const postureBadge = document.getElementById(`posture-badge-${colId}`);
    const readStatus = document.getElementById(`read-phase-status-${colId}`);
    const readContainer = document.getElementById(`read-container-${colId}`);
    const readResultBox = document.getElementById(`read-result-${colId}`);
    const writeStatus = document.getElementById(`write-phase-status-${colId}`);
    const limitVal = parseInt(document.getElementById("global-limit").value) || 1;

    // Set Pending State
    readStatus.textContent = t('status_scanning');
    readStatus.className = "phase-status-error";
    writeStatus.textContent = t('status_scanning');
    writeStatus.className = "phase-status-error";
    readContainer.classList.add("hidden");

    let readSuccess = false;
    let writeSuccess = false;

    // 1. Read SCAN test
    try {
        const snap = await db.collection(colId).limit(limitVal).get();
        readSuccess = true;

        if (!snap.empty) {
            readStatus.textContent = t('scan_read_ok');
            readStatus.className = "phase-status-ok";

            // Format dynamic database results
            let docJSON = "";
            snap.forEach(doc => {
                const data = doc.data();
                docJSON += `// Document ID: ${doc.id}\n{\n`;
                for (const [key, value] of Object.entries(data)) {
                    if (value && typeof value.toDate === 'function') {
                        docJSON += `  "${key}": "${value.toDate().toISOString()}",\n`;
                    } else {
                        docJSON += `  "${key}": ${JSON.stringify(value, null, 2)},\n`;
                    }
                }
                if (docJSON.endsWith(",\n")) {
                    docJSON = docJSON.slice(0, -2) + "\n";
                }
                docJSON += "}\n\n";
            });

            readResultBox.textContent = docJSON.trim();
            readContainer.classList.remove("hidden");

        } else {
            readStatus.textContent = t('scan_read_empty');
            readStatus.className = "phase-status-ok";
        }

    } catch (error) {
        if (error.code === 'permission-denied') {
            readStatus.textContent = t('scan_read_secure');
            readStatus.className = "phase-status-secure";
        } else {
            readStatus.textContent = t('scan_read_error', { err: error.message });
            readStatus.className = "phase-status-error";
        }
    }

    // 2. Write/Injection SCAN test
    try {
        // Prepare Injection payload (replaces standard Date placeholders with active JS Dates)
        const mockPayload = { ...colObj.mock };
        for (const [k, v] of Object.entries(mockPayload)) {
            if (v === "CURRENT_DATE_OBJECT") {
                mockPayload[k] = new Date();
            }
        }

        const docRef = await db.collection(colId).add(mockPayload);
        writeSuccess = true;

        writeStatus.textContent = t('scan_write_ok') + ` (ID: ${docRef.id})`;
        writeStatus.className = "phase-status-ok";

    } catch (error) {
        if (error.code === 'permission-denied') {
            writeStatus.textContent = t('scan_write_secure');
            writeStatus.className = "phase-status-secure";
        } else {
            writeStatus.textContent = t('scan_write_error', { err: error.message });
            writeStatus.className = "phase-status-error";
        }
    }

    // 3. Assess Security Posture Rating & Card highlights
    card.className = "scanner-card card"; // Clear old posture classes

    if (readSuccess && writeSuccess) {
        card.classList.add("posture-critical");
        postureBadge.className = "scanner-posture-badge posture-critical-badge";
        postureBadge.textContent = t('posture_critical');
    } else if (readSuccess && !writeSuccess) {
        card.classList.add("posture-exposed");
        postureBadge.className = "scanner-posture-badge posture-exposed-badge";
        postureBadge.textContent = t('posture_exposed');
    } else if (!readSuccess && writeSuccess) {
        card.classList.add("posture-critical"); // Write vulnerability is highly dangerous!
        postureBadge.className = "scanner-posture-badge posture-critical-badge";
        postureBadge.textContent = t('posture_write_vuln');
    } else {
        card.classList.add("posture-secure");
        postureBadge.className = "scanner-posture-badge posture-secure-badge";
        postureBadge.textContent = t('posture_secure');
    }
}

// Scan all collections in parallel
async function runAllScannerScans() {
    if (!db) {
        showAlert('alert_no_firebase');
        return;
    }

    const promises = scannerCollections.map(col => testSingleCollectionAllFields(col.id));
    await Promise.all(promises);
}

// Open Mock payload Config Modals
function openMockDataModal(colId) {
    const colObj = scannerCollections.find(c => c.id === colId);
    if (!colObj) return;

    activeEditingMockId = colId;

    const modal = document.getElementById("mock-modal");
    const textarea = document.getElementById("mock-data-json");
    const errorBox = document.getElementById("mock-error-box");

    errorBox.classList.add("hidden");

    // Format complex date structures to text format for editing
    const cleanMock = { ...colObj.mock };
    for (const [k, v] of Object.entries(cleanMock)) {
        if (v instanceof Date) {
            cleanMock[k] = "CURRENT_DATE_OBJECT";
        }
    }

    textarea.value = JSON.stringify(cleanMock, null, 4);
    modal.classList.add("active");

    // Save button event handler bind
    document.getElementById("btn-save-mock").onclick = saveMockPayload;
}

// Close Mock Payload Modals
function closeMockModal() {
    document.getElementById("mock-modal").classList.remove("active");
    activeEditingMockId = null;
}

// Save mock payload payload changes
function saveMockPayload() {
    const textarea = document.getElementById("mock-data-json");
    const errorBox = document.getElementById("mock-error-box");

    try {
        const parsed = JSON.parse(textarea.value);

        // Update mock configuration
        const colObj = scannerCollections.find(c => c.id === activeEditingMockId);
        if (colObj) {
            colObj.mock = parsed;
        }

        closeMockModal();

    } catch (e) {
        errorBox.textContent = t('err_invalid_json') + ": " + e.message;
        errorBox.classList.remove("hidden");
    }
}

// Copy content buffer to System Clipboard
function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
