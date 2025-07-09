## 🔬 Biotech App Recreation

- Next.js 15
- TypeScript
- SWR
- Public JSON mock data
- Vanilla Extract (Performant CSS)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/davidrepository/biotech-app-recreation.git
cd biotech-app-recreation
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit App at:

```
http://localhost:3000
```

---

### 1. What tech stack would you propose for rebuilding avam.com and why?

For rebuilding the main page, I recommend using Next.js 15 (modern features and optimization), SWR (efficient data fetching and caching), and Vanilla Extract (typed, performant styles compiled at build time, no runtime overhead). Later, adding Zustand for managing both global and local component state is a good idea due to its simplicity and performance.

Additionally, I suggest: TypeScript (type safety), React Testing Library + Jest (testing), ESLint + Prettier (code standards and formatting), and Vercel (easy deployment for Next.js).

#

### 2. How would you structure the frontend and backend for scalability and maintainability?

On the frontend, I use Next.js because it helps build fast and scalable apps with server-side rendering and static pages. For fetching data, I use SWR—it caches data and updates it automatically, so the app feels fast and fresh. I organize code by features, keep state management simple with Zustand, and use TypeScript to catch errors early.

On the backend, I create clear, versioned APIs (REST or GraphQL) so frontend and backend can grow independently and scale well. I keep the backend modular or use microservices to make it easier to maintain. Next.js works smoothly with these APIs, helping me build scalable and easy-to-maintain full-stack apps.

#

### 3. What tools (e.g. CMS, deployment, testing, monitoring) would you include in the full setup?

I use Strapi as a headless CMS because it’s flexible and easy to customize. For deployment, I choose Vercel since it integrates seamlessly with Next.js and offers fast, automatic builds and deployments. To ensure my frontend code works well, I rely on Jest and React Testing Library for unit and integration testing, which helps catch bugs early.

For monitoring and maintaining app health, I would set up Sentry to track errors and performance issues in real time, allowing me to respond quickly to any problems. Additionally, I use LogRocket to capture user sessions and behavior.
