# Real State App

Real State app is a user-friendly multifunctional application where users can search, sell, or rent estates easily with secured functions.

## Features

1. **User-friendly registration:** Easily register with simple steps.
2. **Create Property listing:** Flexibility to apply discounted prices with uploaded images.
3. **Advanced search functionality:** Enable users to search by title, limit search results, and apply sorting options.

## Developers

- 19APC
- 19APC3979 - Imesh Jayakody
- 19APC4360 - Gayani Jayasundara

## Technologies

- Frontend: React Native
- Backend: Node.js
- Database: MongoDB
- Firebase: Authentication and Storage

## Installation

To get a local copy up and running, just clone the repo:

```bash
git clone https://github.com/your-username/real-state-app.git
cd real-state-app
```

### Setting Up MongoDB

1. Create a MongoDB account and set up a cluster.
2. Create a `.env` file at the root of the project:
   ```plaintext
   MONGODB_URL=your_mongodb_url
   JWT_SECRET = 'YOUR_SECRET_KEY
   ```

### Setting Up Firebase

1. Create a Firebase project and enable Authentication and Storage.
2. Create a `.env` file at the client root of the project:
   ```plaintext
   FIREBASE_API_KEY=your_api_key
   ```

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server in root directory:
   ```bash
   npm start
   ```

3. Run the development server on /cd client:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app.

