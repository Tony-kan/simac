# SIMAC - Official Website Project

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/your-username/simac-website/main.yml?branch=main&style=for-the-badge)
![License](https://img.shields.io/github/license/your-username/simac-website?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/your-username/simac-website?style=for-the-badge)

This repository contains the source code for the official website of the **Simmys Institute of Music, Arts, and Culture (SIMAC)**. The website serves as a digital gateway for students, parents, donors, and the community to engage with our mission of fostering artistic excellence in Malawi.

SIMAC Website Screenshot
<img src="/public/simac_screenshot.png" width="1280" height="720" />

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Running the Project](#-running-the-project)
- [How to Contribute](#-how-to-contribute)
- [License](#-license)
- [Contact](#-contact)

## 🌟 Project Overview

SIMAC is dedicated to nurturing creativity, preserving cultural heritage, and fostering excellence in music, arts, and culture education. This website provides a comprehensive platform to showcase our programs, manage events, share news, and collect donations to support our cause, including the **Saving Children at Risk (SCaR) Project**.

## ✨ Features

- ✅ **Dynamic Content:** Pages for Home, About, Affiliates, Programs, Events, Blog, and News.
- 📅 **Event Management:** An event calendar with details for upcoming workshops and concerts, including RSVP functionality.
- 💳 **Secure Donation System:** Integrated payment gateway for one-time and recurring donations to support specific programs or general funds.
- 🛍️ **E-commerce Store:** A dedicated section for selling musical instruments and branded merchandise.
- 📝 **Blog & News Feed:** Keep the community updated with articles, interviews, and press releases.
- 📱 **Fully Responsive:** A mobile-first design that ensures a seamless experience on all devices.
- 🔍 **SEO Optimized:** Structured for high visibility on search engines to reach a wider audience.

## 🚀 Technology Stack

- **Frontend:** [React](https://reactjs.org/) (with [Next.js](https://nextjs.org/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **CMS:** Headless CMS (e.g., [Strapi](https://strapi.io/), [Contentful](https://www.contentful.com/)) for easy content management.
- **Deployment:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/simac-website.git
    ```

2.  **Navigate into the project directory:**

    ```sh
    cd simac-website
    ```

3.  **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

4.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project by copying the example file:

    ```sh
    cp .env.example .env.local
    ```

    Now, open `.env.local` and add the necessary API keys and endpoints for your Headless CMS, payment gateway, etc.

    ```env
    # Example for Strapi
    NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337

    # Example for a payment provider
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_your_key_here
    STRIPE_SECRET_KEY=sk_your_secret_here
    ```

## 🏃 Running the Project

To run the development server, use the following command:

```sh
npm run dev
# or
yarn dev
```

## 🤝 How to Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute to this project, please follow these steps:

1.  **Fork the Project:** Click the 'Fork' button at the top right of this page.
2.  **Create your Feature Branch:**
    ```sh
    git checkout -b feature/YourAmazingFeature
    ```
3.  **Commit your Changes:**
    ```sh
    git commit -m 'Add some AmazingFeature'
    ```
4.  **Push to the Branch:**
    ```sh
    git push origin feature/YourAmazingFeature
    ```
5.  **Open a Pull Request:** Go to your fork on GitHub and click the 'New Pull Request' button.

Please make sure to update tests as appropriate and follow the project's coding standards.

## 📜 License

This project is distributed under the MIT License. See `LICENSE.txt` for more information.

## 📧 Contact

SIMAC Institute - [simacmalawi.info@gmail.com](mailto:simacmalawi.info@gmail.com)

Project Link: [https://github.com/your-username/simac-website](https://github.com/your-username/simac-website)
