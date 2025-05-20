Modernized Personal Portfolio Website

## Overview

A modern, responsive personal portfolio website for a Business Information Technology graduate specializing in database management, system analysis, and web development. This site showcases skills, projects, education history, work experience, and provides interactive features like a GPA calculator, profile image upload, and an AI assistant.
![image](https://github.com/user-attachments/assets/7085b674-deae-4a3b-becc-44d58aa8df7d)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Interactive Sections**:
  - Profile image upload
  - GPA calculator with grade visualization
    ![image](https://github.com/user-attachments/assets/613b51f2-b6ce-4ff6-b2e2-18c96dd4c88f)
  - QR code generator
    ![image](https://github.com/user-attachments/assets/fcde1c12-796d-4718-b258-e330bf6fbb40)

  - Resume upload/download functionality
  - AI Assistant for visitor interaction
- **Notifications System**: Real-time notification system
- **Social Media Integration**: Linked profiles for professional networking
- **Contact Form**: Direct message capability for potential employers
  ![image](https://github.com/user-attachments/assets/7f7e3ce9-cdcb-4a22-b353-5dbd2b51b695)


## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Library**: Tailwind CSS, shadcn UI
- **State Management**: React Context API
- **Routing**: React Router
- **Form Validation**: React Hook Form with Zod
- **Data Fetching**: TanStack Query

## Installation and Setup

1. **Clone the repository**

```bash
git clone <https://github.com/kidulajumba254/graduate-portfolio-website.git>
cd graduate-portfolio-website-main
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## Project Structure

```
jesse-kidula-portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # UI components from shadcn
│   │   ├── gpa/            # GPA calculator components
│   │   ├── profile/        # Profile related components
│   │   ├── resume/         # Resume section components
│   │   └── assistant/      # AI Assistant components
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace project details in the Projects component
3. Add your own education and work history in ResumeData.ts
4. Update contact information in the Contact and Footer components
5. Replace social media links in the Footer component

## Deployment

This project can be deployed on various platforms such as:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Jesse Kidula - kidulajesse@gmail.com


## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
