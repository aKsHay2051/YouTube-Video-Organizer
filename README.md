
**Organize your YouTube learning journey with intent.**

Vidset is a distraction-free tool designed to help you curate video collections, track your progress, and escape "tutorial hell."


<img width="1903" height="936" alt="Screenshot 2025-12-30 115503" src="https://github.com/user-attachments/assets/01a1a9ea-64e9-422a-92b4-e946137df075" />
<img width="1900" height="937" alt="Screenshot 2025-12-30 115456" src="https://github.com/user-attachments/assets/32b1e454-6adc-41d5-adc7-a5a0317f3d5c" />
<img width="1903" height="930" alt="Screenshot 2025-12-30 115448" src="https://github.com/user-attachments/assets/6f84e7dc-b9af-4f49-a25c-f08d0072ee6d" />
<video controls>
  <source src="https://app.supademo.com/demo/cmjs7kkac7q823zz2gat5gitn?utm_source=link" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- **Organize with Intent**: Group videos into "Sets" based on topic or goal.
- **Distraction-Free**: Watch videos in a clean interface without comments or recommendations.
- **Progress Tracking**: innovative progress bars for each set.
- **Privacy-First**: All data is stored locally in your browser (`localStorage`).
- **YouTube-Inspired UI**: Familiar, premium aesthetics with Dark Mode support.

## Open Source

Vidset is proudly open source! We believe in building tools that help developers learn better.

### Contributing

Contributions are welcome! Whether it's reporting bugs, suggesting features, or submitting a pull request, we'd love to have you involved.

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`.
3.  Commit your changes: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature/your-feature-name`.
5.  Submit a pull request.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Data Persistence**: LocalStorage (Client-side only)
- **Analytics**: Firebase Analytics

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/vidset.git
    cd vidset
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

## License

MIT © [Your Name]
