# FireGuard 🔥 — Firestore Security Auditor & Scanner

![FireGuard Logo](https://raw.githubusercontent.com/CodeZANKO/firestore-scanner/main/logo.png) *(Replace this with your actual screenshot after uploading)*
#
🚀 **[Live Demo](https://CodeZANKO.github.io/firestore-scanner/)**

FireGuard is a modern, web-based Firestore security auditing tool designed to help developers and security researchers identify misconfigured security rules and exposed collections in Firebase projects. It features a sleek glassmorphic user interface and support for multiple languages, including English and Kurdish (RTL).

![FireGuard Interface](https://raw.githubusercontent.com/CodeZANKO/firestore-scanner/main/screenshot.png) *(Replace this with your actual screenshot after uploading)*

## 🚀 Features

- **🔍 Discovery Scan (Collection Finder):** Performs brute-force directory discovery using preset standard or extended collection names (e.g., `users`, `settings`, `payments`) to find unprotected collections.
- **🛡️ Deep Field Scanner:** Tests read/write operations on discovered collections, analyzes retrieved fields, and attempts mock data injection to check write permissions.
- **💻 Live Logs & Console:** Features a collapsible, real-time bottom console with filters to show successful/exposed or protected collection alerts.
- **🌐 Localization Support:** Built-in multi-language switcher supporting both English and Kurdish (RTL layout).
- **🎨 Premium UI:** Modern dark-themed dashboard using glassmorphism, CSS glow effects, Outfit & Vazirmatn fonts, and smooth animations.
- **🔒 Client-Side Only:** No backend or data tracking. All scans are performed directly from your browser to Firebase using the official Firebase SDK.

## 🛠️ How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/CodeZANKO/firestore-scanner.git
   cd firestore-scanner
   ```

2. **Open the Application:**
   Simply open `index.html` in any web browser. No server setup, Node.js, or installation is required!

3. **Configure & Connect:**
   - Paste your Firebase SDK Config (JS object or JSON) into the sidebar config textarea.
   - Click **Connect & Activate** (بەستنەوە و چالاککردن).
   - Once connected, the connection badge will change to "Connected".

4. **Run a Scan:**
   - **Discovery Scan:** Go to the Collection Finder tab, select a preset list (Standard or Extended), and click **Start Scan**.
   - **Deep Scanner:** Go to the Deep Field Scanner tab and run comprehensive scans or add collections manually to test specific paths.

## 📂 Project Structure

```text
├── index.html     # Main UI structure and localization markup
├── style.css      # Modern glassmorphism styling and themes
├── app.js         # Scan logic, Firebase initialization, and UI interactivity
└── .gitignore     # Git ignore rules for clean repository state
```

## ⚠️ Security Notice & Disclaimer

This tool is intended for **authorized security auditing and educational purposes only**. Do not use FireGuard against Firebase instances without explicit authorization from the project owner. The authors are not responsible for any misuse or damage caused by this application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
