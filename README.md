# Vidset

**Organize your YouTube learning journey with intent.**

Vidset is a distraction-free tool designed to help you curate video collections, track your progress, and escape "tutorial hell."

<a href="https://www.producthunt.com/products/youtube-video-organizer-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-youtube-video-organizer-3" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1056051&theme=light&t=1767077333898" alt="YouTube Video Organizer - Save YouTube videos with purpose, not chaos. | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>

![Vidset Preview](https://your-preview-image-link.com/preview.png)

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
