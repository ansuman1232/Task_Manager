
## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ansuman1232/Task_Manager.git
cd Task_Manager
```
### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```powershell
cd ../frontendReact
npm install
```
### 4. start backend server
```bash
cd backend
node app.js

```
### 5. Start Frontend Development Server
```powershell
cd frontendReact
npm run dev
```
### Technical Assumptions
This prototype operates under specific local development constraints:
Networking: Static ports are used for local communication (Frontend: 5173, Backend: 3000).
CORS: Backend is configured to trust requests originating from the local Vite port.
State:  complex global state providers (Context) are active.
Security: Public access is assumed; no authentication or authorization layers are implemented. 

### Trade-offs & Limitations
In-Memory Storage: Data is volatile. All tasks will be wiped when the server restarts 
Minimalist UI: Basic Material-UI styling is used to provide a clean interface without custom-heavy CSS overhead.
