# AKATSUKI - Anime and Manga Platform

**AKATSUKI** is an anime streaming and e-commerce platform catering to anime and manga enthusiasts. Users can watch anime movies, buy manga books, explore blogs, and engage with content. The platform provides secure payment options like Stripe, PayPal, cash on delivery, and SSLCommerz, along with a personalized user dashboard for managing purchases and subscriptions.

---

### Live Link : https://akatsuki-ivory.vercel.app

## Features

1. **Anime Streaming & Manga Store:**

   - Watch anime movies directly on the platform.
   - Purchase manga books using Stripe, PayPal, cash on delivery, and SSLCommerz.

2. **User Authentication & Dashboard:**

   - Secure user authentication using  **email** , **Google** and **Facebook** via **NextAuth**.
   - Personalized dashboard to manage user details, view liked blogs, and pay for books added to the list.

3. **Blogs & Subscription Packages:**
   - Explore anime-related blogs and articles.
   - Like and engage with blog posts.
   - Subscribe to anime movie packages.

---

## Technologies

- **Frontend:**

  - **Next.js**
  - **TypeScript**
  - **Tailwind CSS**
  - **DaisyUI**

- **Backend:**

  - **MongoDB**
  - **Mongoose**
  - **NextAuth**
  - **JWT**

- **Payment Integration:**

  - **Stripe**
  - **PayPal**
  - **SSLCommerz**

- **Deployment:**
  - **Vercel**

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/akatsuki.git
   cd akatsuki
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**

   ```bash
   MONGO_URI= "MongoDB URL"
   JWT_SECRET='JWT KEY'
   NEXT_PUBLIC_IMAGE_HOSTING_API="Image Host"
   NEXT_PUBLIC_GOOGLE_CLIENT_ID= "ID"
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET= "Secret"
   NEXT_PUBLIC_FACEBOOK_CLIENT_ID= "id"
   NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET= "secret Key"
   NEXT_PUBLIC_API_URL= "Api URL"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```
