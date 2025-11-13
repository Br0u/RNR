✅ Fullstack Project To-Do List (Cursor-Optimized, Ultra-Detailed)

适用于：React + TypeScript + Vite + Tailwind + Node.js + Express + MongoDB
项目：建筑公司官网 + 客户报价/联系系统

⸻

✅🧱 Phase 0 — Initialize Workspace
✅• Create main folder for the project
✅• Create frontend/ folder
✅• Create backend/ folder
✅• Open project in Cursor

⸻

✅🟦 Phase 1 — Frontend Initialization
✅• Run Vite create command
✅• Select "React"
✅• Select "TypeScript"
✅• Choose "No" for experimental options
✅• Install dependencies:
✅• react-router-dom
✅• axios
✅• react-hook-form
✅• yup
✅• Install Tailwind:
✅• Install Tailwind packages
✅• Init Tailwind config
✅• Configure tailwind.config.js content paths
✅• Import Tailwind directives into index.css
✅• Start dev server to confirm it works

📦 Package Explanations (What Each Package Does):

• react-router-dom
→ Purpose: Client-side routing for React apps
→ Function: Enables navigation between pages (Home, About, Services, etc.) without full page reloads
→ Example: When user clicks "Contact" link, it shows Contact page instantly (SPA behavior)
→ Key features: BrowserRouter, Routes, Route, Link, useNavigate hooks

• axios
→ Purpose: HTTP client library for making API requests
→ Function: Sends GET/POST/PUT/DELETE requests to backend server
→ Example: Fetch services list from /api/services, submit contact form to /api/appointments
→ Why not fetch()? Better error handling, request/response interceptors, automatic JSON parsing

• react-hook-form
→ Purpose: Form state management and validation library
→ Function: Handles form inputs, validation, errors, and submission with minimal re-renders
→ Example: Contact form with name, email, phone fields - tracks values, validates, shows errors
→ Benefits: Better performance than controlled inputs, less boilerplate code

• yup
→ Purpose: Schema validation library (works with react-hook-form)
→ Function: Defines validation rules (e.g., email must be valid, phone required, min length)
→ Example: email: yup.string().email().required() - ensures email is valid and not empty
→ Why use it? Declarative validation rules, easy to read and maintain

• @hookform/resolvers
→ Purpose: Bridge between react-hook-form and validation libraries (yup, zod, etc.)
→ Function: Connects yup schemas to react-hook-form's validation system
→ Example: useForm({ resolver: yupResolver(validationSchema) })
→ Without it: Can't use yup with react-hook-form easily

• tailwindcss
→ Purpose: Utility-first CSS framework
→ Function: Provides pre-built CSS classes (e.g., bg-blue-500, flex, p-4) instead of writing custom CSS
→ Example: <div className="flex items-center justify-between p-4 bg-white rounded-lg">
→ Benefits: Faster development, consistent design, responsive utilities (md:, lg:)

• postcss
→ Purpose: CSS transformation tool (required by Tailwind)
→ Function: Processes CSS files, applies plugins (like Tailwind, Autoprefixer)
→ Example: Converts @tailwind directives into actual CSS classes
→ Why needed? Tailwind needs PostCSS to work properly

• autoprefixer
→ Purpose: Automatically adds vendor prefixes to CSS
→ Function: Adds -webkit-, -moz-, -ms- prefixes for browser compatibility
→ Example: "flex" becomes "-webkit-box-flex" for older browsers
→ Benefit: Write modern CSS, get cross-browser compatibility automatically

⸻

✅🟩 Phase 2 — Create Frontend Structure

✅Create file structure:

✅src/
✅components/
✅pages/
✅layouts/
✅hooks/
✅api/
✅types/
✅utils/
✅App.tsx
✅main.tsx

✅Tasks:
✅• Create pages/Home.tsx
✅• Create pages/About.tsx
✅• Create pages/Services.tsx
✅• Create pages/Projects.tsx
✅• Create pages/Testimonials.tsx
✅• Create pages/Contact.tsx
✅• Create layouts/MainLayout.tsx
✅• Create components/Navbar.tsx
✅• Create components/Footer.tsx
✅• Create placeholder components for each page
✅• Add routing using React Router
✅• Wrap all pages in MainLayout

⸻

✅🟧 Phase 3 — Design UI Components
✅• Create Hero component
✅• Create ServicesPreview component
✅• Create ServiceCard component
✅• Create ProjectGalleryGrid component
✅• Create TestimonialCard
✅• Create ContactForm component
✅• Add responsive design (Tailwind breakpoints)
✅• Add basic animations (hover, fade-in)

📋 Phase 3 详细说明（每一步的意义）：

• Create Hero component（创建 Hero 组件）
→ 作用：首页顶部的大横幅区域，通常是网站的第一印象
→ 包含内容：大标题、副标题、行动按钮（Call-to-Action）
→ 意义：吸引访客注意力，传达公司核心价值，引导用户操作
→ 示例：显示 "专业建筑服务" + "立即咨询" 按钮
→ 使用位置：Home 页面顶部

• Create ServicesPreview component（创建服务预览组件）
→ 作用：在首页展示公司的主要服务项目
→ 包含内容：服务列表、简短描述、链接到详细服务页面
→ 意义：让访客快速了解公司能提供什么服务，提高转化率
→ 示例：展示 "清洁服务"、"装修服务"、"园林设计" 等
→ 使用位置：Home 页面，Hero 下方

• Create ServiceCard component（创建服务卡片组件）
→ 作用：单个服务的展示卡片（可复用组件）
→ 包含内容：服务图标/图片、标题、描述、链接按钮
→ 意义：统一的服务展示样式，代码复用，易于维护
→ 示例：一个卡片显示一个服务（如 "深度清洁"）
→ 使用位置：ServicesPreview 中使用多个 ServiceCard

• Create ProjectGalleryGrid component（创建项目画廊网格组件）
→ 作用：以网格形式展示已完成的项目图片
→ 包含内容：项目图片、分类标签、悬停效果
→ 意义：展示公司实力和作品，建立信任感，吸引潜在客户
→ 示例：3x3 网格显示不同项目的照片
→ 使用位置：Home 页面和 Projects 页面

• Create TestimonialCard（创建客户评价卡片）
→ 作用：展示客户对公司的评价和推荐
→ 包含内容：客户头像、姓名、评价内容、评分
→ 意义：社会证明（Social Proof），增加可信度，促进转化
→ 示例：显示 "张三：RNR build 的服务非常专业！"
→ 使用位置：Home 页面和 Testimonials 页面

• Create ContactForm component（创建联系表单组件）
→ 作用：让客户填写信息并提交咨询/预约请求
→ 包含内容：姓名、电话、邮箱、服务类型、留言、提交按钮
→ 意义：收集潜在客户信息，实现业务转化
→ 技术：使用 react-hook-form + yup 进行表单验证
→ 使用位置：Contact 页面和 Home 页面（可选）

• Add responsive design (Tailwind breakpoints)（添加响应式设计）
→ 作用：让网站在手机、平板、电脑上都能正常显示
→ 技术：使用 Tailwind 的响应式类（sm:, md:, lg:, xl:）
→ 意义：提升用户体验，适配所有设备，提高访问量
→ 示例：手机单列显示，电脑多列显示
→ 重要性：现代网站必备功能

• Add basic animations (hover, fade-in)（添加基础动画）
→ 作用：让网站更生动、更专业，提升用户体验
→ 动画类型： - hover：鼠标悬停效果（按钮变色、卡片阴影） - fade-in：页面加载时的淡入动画
→ 意义：增强视觉吸引力，提升用户参与度
→ 技术：使用 Tailwind 的 transition 和 transform 类
→ 示例：按钮 hover 时颜色渐变，卡片 hover 时上浮

🎯 Phase 3 整体目标：
将之前创建的占位页面（placeholder）变成真正美观、功能完整的页面，让网站看起来专业且吸引人。

⸻

🟥 Phase 4 — Backend Initialization

Inside backend/:
• Initialize Node project (npm init -y)
• Install dependencies:
• express
• mongoose
• cors
• dotenv
• multer
• jsonwebtoken
• bcrypt
• Create main file structure:

backend/
controllers/
models/
routes/
middleware/
uploads/
server.js

    •	Create .env file
    •	Add MONGO_URI
    •	Add JWT_SECRET
    •	Setup Express app in server.js
    •	Enable CORS
    •	Enable JSON parsing
    •	Connect MongoDB via Mongoose
    •	Test server runs

⸻

🟪 Phase 5 — Database Models

Create the following schemas:
• models/Service.js
• models/Project.js
• models/Appointment.js
• models/Admin.js

Each includes:

Service
• title
• description
• imageUrl

Project
• category (cleaning / renovation / landscaping)
• images []
• description

Appointment
• name
• phone
• email
• serviceType
• message
• photo (optional)

Admin
• username
• passwordHash

⸻

🟫 Phase 6 — Backend Routes & Controllers

Create API routes:
• /api/services
• GET all
• POST create
• PUT update
• DELETE remove
• /api/projects
• GET all
• POST create
• PUT update
• DELETE remove
• Multer multi-image upload support
• /api/appointments
• POST create
• GET all (admin only)
• /api/admin/login
• Verify user
• Return JWT token
• Create middleware/auth.js
• Verify JWT
• Test all API routes using Postman

⸻

🟦 Phase 7 — Frontend + Backend Integration
• Create Axios instance (api/axios.ts)
• Add baseURL from .env
• Connect ContactForm to /appointments
• Connect Services page to /services
• Connect Projects page to /projects
• Create custom hook useFetch (optional)
• Add notifications (success/error)

⸻

🟧 Phase 8 — Admin Dashboard (Optional but recommended)

Create folder:

src/admin/

Tasks:
• Create Login page
• Create AdminLayout
• Create ServicesManager page
• Create ProjectsManager page
• Create AppointmentsManager page
• Add ProtectedRoute logic
• Store JWT in localStorage
• Auto-inject token in all admin axios requests
• Add CRUD UI for services
• Add CRUD UI for projects
• Add appointment list + update status

⸻

🟩 Phase 9 — Responsive + Polish
• Test mobile layout
• Test tablet layout
• Fix overflow issues
• Optimize images
• Add smooth scrolling
• Add favicon & metadata

⸻

🟦 Phase 10 — Deployment

Frontend:
• Build project (npm run build)
• Deploy to Vercel
• Set VITE_API_URL env var

Backend:
• Push backend to GitHub
• Deploy on Render
• Add env vars
• Add persistent file storage or Cloudinary
• Test all API endpoints
• Connect frontend <-> backend

Final checks:
• Test contact form
• Test image uploads
• Test mobile responsiveness
• Test admin routes
• Send final build to client

⸻
