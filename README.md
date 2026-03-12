# HimmatKaar - Youth Empowerment Platform

A comprehensive web platform for the HimmatKaar fellowship program, featuring a multi-page public website and role-based dashboards for students, coordinators, and administrators.

## 🎨 Features

### Public Website
- **Home Page** - Hero section with animations, statistics, and testimonials
- **About Page** - Mission, vision, and core values
- **Fellowship Page** - Program details and learning outcomes
- **Impact Page** - Statistics and success metrics
- **Testimonials Page** - Success stories with carousel
- **Contact Page** - Application form

### Dashboard System
Three role-based dashboards with distinct features:

#### Student Dashboard
- Course progress tracking
- Assignment management
- Personal profile editing
- Progress analytics
- Certificate viewing

#### Coordinator Dashboard
- Student management
- Activity monitoring
- Assignment grading
- Performance reports
- Communication tools

#### Admin Dashboard
- User management (Team Members)
- Event management
- System analytics
- System settings

**Enhanced User Management Features:**
- Full CRUD operations (Create, Read, Update, Delete)
  - Create: Modal form with Name, Email, Role, Status fields
  - Read: Searchable, filterable user table with stats
  - Update: Inline edit with pre-filled modal form
  - Delete: Confirmation dialog with user name display
- Real-time search and filtering (by name/email)
- Multi-criteria filtering (role + status dropdowns)
- Animated modal interfaces using Framer Motion
- User statistics dashboard (Total, Active, Inactive, Pending)
- Export functionality (ready for implementation)
- Confirmation dialogs for destructive actions
- Local state management for instant UI updates
- Smooth animations and transitions (fade, scale effects)

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React
- **Backend (Ready)**: Supabase (to be integrated)

## 🎨 Design System

### Colors (Extracted from Logo)
- **Primary Green**: `#3a8a4d` - Main brand color
- **Dark Green**: `#17431f` - Accents and hover states
- **Light Green**: `#a3caad` - Backgrounds and highlights
- **White**: `#ffffff` - Main backgrounds
- **Black**: `#000000` - Footer and text

### Role Colors
- **Student**: Green (`#3a8a4d`)
- **Coordinator**: Blue (`#2563eb`)
- **Admin**: Red (`#dc2626`)

## 📁 Project Structure

```
himmatkaar/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx              # About page
│   ├── fellowship/page.tsx         # Fellowship details
│   ├── impact/page.tsx             # Impact statistics
│   ├── testimonials/page.tsx       # Success stories
│   ├── contact/page.tsx            # Contact/Application form
│   ├── login/page.tsx              # Login page
│   ├── register/page.tsx           # Registration page
│   └── dashboard/
│       ├── student/
│       │   ├── page.tsx            # Student dashboard
│       │   ├── profile/page.tsx    # Profile management
│       │   ├── courses/page.tsx    # Course list
│       │   └── assignments/page.tsx # Assignment management
│       ├── coordinator/
│       │   └── page.tsx            # Coordinator dashboard
│       └── admin/
│           ├── page.tsx            # Admin dashboard
│           ├── users/page.tsx      # User management
│           ├── roles/page.tsx      # Role assignment
│           ├── courses/page.tsx    # Course management
│           ├── events/page.tsx     # Event management
│           ├── analytics/page.tsx  # Analytics dashboard
│           └── settings/page.tsx   # System settings
├── components/
│   ├── Navbar.tsx                  # Public site navigation
│   ├── Footer.tsx                  # Public site footer
│   ├── DashboardLayout.tsx         # Dashboard wrapper
│   └── TestimonialCarousel.tsx     # Testimonial slider
└── public/
    ├── himmatkaar-logo.jpg         # Logo
    ├── robots.txt                  # SEO
    └── sitemap.xml                 # SEO
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd himmatkaar
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication (To Be Implemented)

The UI is ready for Supabase integration:

### Setup Supabase
1. Create a Supabase project
2. Create tables:
   - `users` - User accounts
   - `profiles` - User profiles
   - `courses` - Course information
   - `enrollments` - Student-course relationships
   - `assignments` - Assignment data
   - `submissions` - Assignment submissions

3. Add environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Database Schema (Suggested)

```sql
-- Users table (handled by Supabase Auth)
-- profiles table
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  email text,
  phone text,
  university text,
  role text check (role in ('student', 'coordinator', 'admin')),
  status text check (status in ('active', 'inactive', 'pending')),
  created_at timestamp with time zone default now()
);

-- courses table
create table courses (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  instructor_id uuid references profiles(id),
  duration text,
  modules integer,
  created_at timestamp with time zone default now()
);

-- enrollments table
create table enrollments (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references profiles(id),
  course_id uuid references courses(id),
  progress integer default 0,
  status text,
  enrolled_at timestamp with time zone default now()
);

-- events table
create table events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  date date not null,
  time time not null,
  location text,
  type text,
  capacity integer,
  registered_count integer default 0,
  status text default 'upcoming',
  image_url text,
  created_at timestamp with time zone default now()
);

-- event_registrations table
create table event_registrations (
  id uuid primary key default uuid_generate_v4(),
  event_id uuid references events(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  registration_status text default 'registered',
  registered_at timestamp with time zone default now(),
  unique(event_id, user_id)
);
```

## 🎯 Quick Demo Access

The login page includes demo buttons for quick access:
- Student Dashboard
- Coordinator Dashboard
- Admin Dashboard

## 📱 Responsive Design

All pages are fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Animations

- Fade-in on scroll
- Hover effects
- Scale transitions
- Stagger animations
- Progress bar animations
- Carousel transitions

## 🔒 Security Notes

- All forms are ready for validation
- Role-based access control structure in place
- Prepared for Row Level Security (RLS) in Supabase

## 📈 Future Enhancements

- [ ] Supabase integration
- [ ] Real-time notifications
- [ ] File upload for assignments
- [ ] Video course content
- [ ] Live chat support
- [ ] Email notifications
- [ ] Certificate generation
- [ ] Analytics dashboard
- [ ] Mobile app

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary to HimmatKaar.

## 📞 Support

For support, email info@himmatkaar.org

---

Built with ❤️ for HimmatKaar Fellowship Program
