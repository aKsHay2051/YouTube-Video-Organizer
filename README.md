# YouTube Video Organizer

A distraction-free tool to curate your YouTube learning journey. Organize videos into sets, track your progress, and escape "tutorial hell."

## Features

- **Organize with Intent**: Group videos into "Sets" based on topic or goal.
- **Distraction-Free**: Watch videos in a clean interface without comments or recommendations.
- **Progress Tracking**: innovative progress bars for each set.
- **Privacy-First**: All data is stored locally in your browser (`localStorage`).
- **YouTube-Inspired UI**: Familiar, premium aesthetics with Dark Mode support.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Data Persistence**: LocalStorage (Client-side only)
- **Analytics**: Firebase Analytics

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/youtube-video-organizer.git
    cd youtube-video-organizer
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    - Rename `.env.example` (if present) or create `.env.local` in the root.
    - Add your Firebase configuration keys for analytics (optional but recommended):
      ```env
      NEXT_PUBLIC_FIREBASE_API_KEY=your_key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
      NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
      ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `src/app/` - App Router pages (Sets, Video adding, Settings).
- `src/components/` - Reusable UI components.
- `src/lib/storage.ts` - LocalStorage logic for CRUD operations.
- `src/lib/firebase.ts` - Firebase initialization.

## License

MIT
