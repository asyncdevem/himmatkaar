# UI Screens Documentation
## HimmatKaar Platform

### 1. Overview

This document provides detailed specifications for all user interface screens in the HimmatKaar platform, including layouts, components, interactions, and responsive behavior.

### 2. Design System

#### 2.1 Color Palette

**Primary Colors:**
- Student Theme: `#3a8a4d` (Green)
- Coordinator Theme: `#2563eb` (Blue)
- Admin Theme: `#dc2626` (Red)

**Neutral Colors:**
- Background: `#f8f6f6`, `#f6f6f8`
- White: `#ffffff`
- Gray Scale: `#f1f5f9`, `#e2e8f0`, `#cbd5e1`, `#94a3b8`, `#64748b`, `#475569`, `#334155`, `#1e293b`
- Text Primary: `#0f172a`
- Text Secondary: `#64748b`

**Status Colors:**
- Success: `#10b981`
- Warning: `#f59e0b`
- Error: `#ef4444`
- Info: `#3b82f6`

#### 2.2 Typography

**Font Family:** System font stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Font Sizes:**
- Heading 1: 2.5rem (40px)
- Heading 2: 2rem (32px)
- Heading 3: 1.5rem (24px)
- Heading 4: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
- Tiny: 0.75rem (12px)

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

#### 2.3 Spacing

Using 8px base unit:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

#### 2.4 Border Radius
- Small: 8px
- Medium: 12px
- Large: 16px
- XLarge: 24px
- Full: 9999px (circular)

### 3. Public Pages

#### 3.1 Landing Page (`/`)

**Layout:**
- Fixed header with navigation
- Hero section with CTA
- Partner Network section
- About Us section
- Our Three Tracks section
- Events section
- Our Offerings section
- Contact & Newsletter section
- Testimonials section
- Footer

**Hero Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Layout: 2-column grid (lg:grid-cols-2) with 12-16 gap
- Padding: py-20 lg:py-32
- Responsive order: Image first on mobile (order-1), text second (order-2); reversed on desktop

**Left Column - Text Content:**
- Badge: "Pakistan's Leading Youth Empowerment Platform" with CheckCircle icon
  - Background: bg-[#39894c]/10
  - Text color: text-[#39894c]
  - Rounded-full with padding
- Heading: "Evolve Your Future with Himmatkaar!" (text-4xl lg:text-6xl)
  - Color: text-slate-900 dark:text-white
  - "Himmatkaar!" highlighted in text-[#39894c]
  - Font: extrabold, tight tracking
- Description paragraph (text-lg lg:text-xl)
  - Color: text-slate-600 dark:text-slate-400
  - Leading: relaxed
- Two CTA buttons (flex-col sm:flex-row gap-4):
  - Primary: "Apply Here" with ArrowRight icon
    - Background: bg-[#39894c]
    - Hover: hover:bg-[#2d6f3d]
    - Shadow: shadow-xl hover:shadow-2xl
    - Transform: hover:scale-105
  - Secondary: "Learn More"
    - Background: bg-white dark:bg-slate-800
    - Text: text-slate-900 dark:text-white
    - Border: border-2 border-slate-200 dark:border-slate-700
    - Hover: hover:bg-slate-100 dark:hover:bg-slate-700
- Animations: Slide in from left (x: -30 → 0), staggered delays (0.1s, 0.2s, 0.3s)

**Right Column - Hero Image:**
- Container: Relative positioning with decorative elements
- Background decorations:
  - Top-right blob: w-72 h-72 bg-[#39894c]/10 rounded-full blur-3xl (absolute -top-8 -right-8)
  - Bottom-left blob: w-72 h-72 bg-[#2d5f3d]/10 rounded-full blur-3xl (absolute -bottom-8 -left-8)
- Main image container:
  - Background: bg-white dark:bg-slate-800
  - Border: border-4 border-white dark:border-slate-700
  - Border radius: rounded-3xl
  - Shadow: shadow-2xl
  - Image: `/hero-person.jpg` (600x600, priority loading)
- Overlay badge (absolute bottom-6 left-6 right-6):
  - Background: bg-white/95 dark:bg-slate-900/95 with backdrop-blur-sm
  - Border radius: rounded-2xl
  - Padding: p-6
  - Shadow: shadow-xl
  - Content:
    - Checkmark icon: w-12 h-12 bg-[#39894c] rounded-full with white checkmark
    - Text: "10,000+ Youth Empowered" (font-bold text-lg)
    - Subtext: "Join Pakistan's largest youth network" (text-sm)
- Animations: Slide in from right (x: 30 → 0), delay 0.2s

**Partner Network Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Padding: py-20
- Border: Bottom border (border-slate-200 dark:border-slate-800)
- Section header:
  - Title: "Our Partner Network" (text-3xl lg:text-4xl)
  - Subtitle: "Trusted by leading organizations across Pakistan"
- Horizontal scrollable partner grid:
  - Flex layout with gap-8
  - Overflow-x-auto with scrollbar-hide
  - Min-width-max to enable scrolling
- Partner cards (8 partners):
  - Size: w-48 h-32
  - Background: white (dark:bg-slate-900)
  - Border: 2px border-slate-200 (dark:border-slate-800)
  - Hover: border-[#39894c]
  - Rounded-2xl with shadow-sm
  - Placeholder icon (12x12 rounded-lg)
  - Partner name below icon
  - Group hover effects on icon and text color
- Scroll indicators:
  - Gradient overlays on left and right edges
  - Width: 20px each side
  - Gradient: from-slate-50 to-transparent
- Scroll hint text:
  - Center-aligned below partner grid
  - Arrow icons on both sides
  - Text: "Scroll to see more partners"
- Partners listed:
  - UNICEF, RED CROSS, TECH CORPS, GLOBAL IMPACT
  - EDUCARE, FUTURE GEN, INNOVATION HUB, YOUTH ALLIANCE
- Animations: Staggered fade-in with y-axis motion (delay: idx * 0.05)
  - Font: extrabold, tight tracking
- Description paragraph (text-lg lg:text-xl)
  - Color: text-slate-600 dark:text-slate-400
  - Leading: relaxed
- Two CTA buttons (flex-col sm:flex-row gap-4):
  - Primary: "Apply Here" with ArrowRight icon
    - Background: bg-[#39894c]
    - Hover: hover:bg-[#2d6f3d]
    - Shadow: shadow-xl hover:shadow-2xl
    - Transform: hover:scale-105
  - Secondary: "Learn More"
    - Background: bg-white dark:bg-slate-800
    - Text: text-slate-900 dark:text-white
    - Border: border-2 border-slate-200 dark:border-slate-700
    - Hover: hover:bg-slate-100 dark:hover:bg-slate-700
- Animations: Slide in from left (x: -30 → 0), staggered delays (0.1s, 0.2s, 0.3s)

**Right Column - Hero Image:**
- Container: Relative positioning with decorative elements
- Background decorations:
  - Top-right blob: w-72 h-72 bg-[#39894c]/10 rounded-full blur-3xl (absolute -top-8 -right-8)
  - Bottom-left blob: w-72 h-72 bg-[#2d5f3d]/10 rounded-full blur-3xl (absolute -bottom-8 -left-8)
- Main image container:
  - Background: bg-white dark:bg-slate-800
  - Border: border-4 border-white dark:border-slate-700
  - Border radius: rounded-3xl
  - Shadow: shadow-2xl
  - Image: `/hero-person.jpg` (600x600, priority loading)
- Overlay badge (absolute bottom-6 left-6 right-6):
  - Background: bg-white/95 dark:bg-slate-900/95 with backdrop-blur-sm
  - Border radius: rounded-2xl
  - Padding: p-6
  - Shadow: shadow-xl
  - Content:
    - Checkmark icon: w-12 h-12 bg-[#39894c] rounded-full with white checkmark
    - Text: "10,000+ Youth Empowered" (font-bold text-lg)
    - Subtext: "Join Pakistan's largest youth network" (text-sm)
- Animations: Slide in from right (x: 30 → 0), delay 0.2s

**Partner Network Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Section title: "Our Partner Network" (text-3xl lg:text-4xl)
- Subtitle: "Trusted by leading organizations across Pakistan"
- 6-column grid on desktop (2 cols mobile, 3 cols tablet)
- Partner names displayed as text (UNICEF, RED CROSS, TECH CORPS, GLOBAL IMPACT, EDUCARE, FUTURE GEN)
- Hover effect: Text color changes to primary green (#39894c)
- Staggered fade-in animation on scroll (delay: idx * 0.05)
- Font: text-xl font-extrabold tracking-tight

**About Us Section:**
- Background: White (dark:bg-[#0a0f0b])
- Padding: py-28
- 2-column grid layout (lg:grid-cols-2)
- Left column:
  - Image container (aspect-[4/3], rounded-2xl, shadow-2xl)
  - Absolute positioned stats card (bottom-right):
    - Background: #39894c
    - Text: "10,000+ Youth Empowered"
    - Rounded-xl with shadow-2xl
- Right column:
  - Label: "About Us" (green, uppercase, tracking-wider)
  - Heading: "Pakistan's Leading Youth Empowerment Platform" (text-4xl lg:text-5xl)
  - Two paragraphs of description text
  - 2-column grid of features with CheckCircle icons:
    - Expert Mentorship
    - Skill Development
- Animations: Fade-in with x-axis motion (±30px)

**Our Three Tracks Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Padding: py-28
- Animated header section:
  - Label: "Programs" (green, uppercase, tracking-wider)
  - Heading: "Our Three Tracks" (text-4xl lg:text-5xl)
  - Subtitle: "Choose the path that aligns with your goals and aspirations"
  - Animation: Fade-in with y-axis motion (20px)
- 3-column grid layout (md:grid-cols-3)
- Track cards:
  - Launchpad: #2d5f3d (dark green) - "Launch your innovative projects with Himmatkaar" - Image: /track-launchpad.jpg
  - Fellowship: #39894c (primary green) - "Intensive leadership development program" - Image: /track-fellowship.jpg
  - Impact: #4a9d5f (light green) - "Create lasting community change" - Image: /track-impact.jpg
- Card design:
  - Relative positioning with group hover
  - Fixed height: h-80 (320px)
  - Border radius: rounded-2xl
  - Shadow: shadow-xl hover:shadow-2xl
  - Hover effect: scale-105 transition
  - Background image layer:
    - Absolute positioning (inset-0)
    - Background cover with center positioning
    - Opacity: 30% (default), 40% (hover)
    - Smooth opacity transition (duration-500)
  - Gradient overlay: from-black/40 via-transparent to-black/60
  - Content structure (centered flex column):
    - Title: text-3xl font-extrabold mb-4
    - Description: text-base font-normal text-white/95 mb-6 max-w-xs
    - ArrowRight icon (size-28) with hover translate-x-2 animation
- Animations: Staggered fade-in with y-axis motion (delay: idx * 0.1)

**Events Section:**
- Background: White (dark:bg-[#0a0f0b])
- Padding: py-24
- Section title: "Invent Your Future With Us at HimmatKaar!" (text-3xl lg:text-4xl)
- 3-column grid of event cards (md:grid-cols-3)
- Event cards:
  - Background: slate-50 (dark:bg-slate-900)
  - Rounded-lg with hover shadow-xl
  - Event image (h-48, object-cover)
  - Content padding: p-6
  - Event title (text-xl font-bold)
  - "Event Details" link (green, hover underline)
- Events:
  - Youth Leadership Summit
  - Innovation Workshop
  - Community Open House

**Our Offerings Section:**
- Background: White (dark:bg-[#0a0f0b])
- Padding: py-24
- Section title: "Our Offerings" (text-3xl lg:text-4xl)
- 3-column grid layout (md:grid-cols-2 lg:grid-cols-3)
- Offering cards:
  - Background: slate-50 (dark:bg-slate-900)
  - Padding: p-8
  - Rounded-lg with hover shadow-lg
  - Icon (32px, green color)
  - Title (text-xl font-bold)
  - Description text
- Offerings:
  - Mentorship & Coaching (Users icon)
  - Investment Readiness (TrendingUp icon)
  - Industry Connections (Globe icon)
  - Founder Institute Curriculum (BookOpen icon)
  - Grants & Global Expos (Award icon)
  - Co-Working Space (Lightbulb icon)

**Stats & Contact Section:**
- Background: White (dark:bg-[#0a0f0b])
- Padding: py-28
- Stats card (gradient background):
  - Background: gradient from #2d5f3d to #39894c
  - Grid: 2 columns on mobile, 4 columns on desktop
  - Stats: 10k+ Members, 500+ Projects, 50+ Cities, $2M+ Funds Raised
  - Text: White with large font sizes (5xl-6xl)
- Contact form section (2-column grid):
  - Left column: Contact form
    - Fields: First Name, Last Name, Phone, Email, Message
    - Submit button (green)
  - Right column:
    - Newsletter subscription with email input and subscribe button
    - Contact information card with email, phone, location (using emoji icons)

**Testimonials Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Padding: py-28
- Max-width: 6xl
- Animated header section:
  - Label: "Testimonials" (green, uppercase, tracking-wider)
  - Heading: "What Our Members Say" (text-4xl lg:text-5xl)
  - Subtitle: "Hear from the changemakers who are making a difference"
  - Animation: Fade-in with y-axis motion (20px)
- TestimonialCarousel component
  - Displays testimonials from fellows
  - Carousel navigation with prev/next buttons
  - Dot indicators for slide position

**Testimonials Section:**
- Background: Light gray (slate-50 dark:bg-[#0f1410])
- Padding: py-28
- Animated header section:
  - Label: "Testimonials" (green, uppercase, tracking-wider)
  - Heading: "What Our Members Say" (text-4xl lg:text-5xl)
  - Subtitle: "Hear from the changemakers who are making a difference"
  - Animation: Fade-in with y-axis motion (20px)
- TestimonialCarousel component
- Max-width: 6xl (increased from 5xl)

**Components:**
- Navbar with logo and navigation links
- Hero banner with gradient background and image overlay
- Partner grid with text-based logos
- About section with image and stats card
- Three Tracks cards with hover animations
- Event cards with images
- Offering cards with icons
- Contact form and newsletter signup
- Testimonial carousel component
- Footer with links and social media

**Interactions:**
- Smooth scroll to sections
- Hover effects on cards (scale, shadow, color changes)
- Staggered animations on scroll (Framer Motion)
- Button hover effects (scale, brightness)
- Mobile hamburger menu
- Form submissions

**Responsive:**
- Desktop: Full layout with multi-column grids
- Tablet: 2-3 column grids, adjusted spacing
- Mobile: Single column, stacked layout, full-width cards

#### 3.2 About Page (`/about`)

**Sections:**
- Mission statement
- Vision and values
- Team members
- Timeline/History
- Contact information

**Components:**
- Hero section with image
- Text content blocks
- Team member cards with photos
- Timeline component
- Call-to-action section

#### 3.3 Fellowship Page (`/fellowship`)

**Layout:**
- Fixed Navbar at top
- Main content area with max-width container
- Footer at bottom

**Components:**
- Back to Home link with ArrowLeft icon (top-left)
- Page title: "Fellowship Program" (4xl/5xl font size)
- Program description paragraph
- Benefits section card

**Benefits Section:**
- Background: Light gray (slate-50 dark mode: slate-900)
- Rounded container with padding
- Section heading: "Program Benefits"
- Bulleted list of benefits:
  - 6-month intensive leadership training
  - One-on-one mentorship from industry experts
  - Access to exclusive workshops and events
  - Networking opportunities with alumni and partners
  - Certificate of completion

**Styling:**
- Dark mode support (bg-white/dark:bg-[#0a0f0b])
- Responsive typography
- Consistent spacing (pt-32 pb-24)
- Max-width container (max-w-4xl)

**Interactions:**
- Back to Home navigation link
- Hover effects on links

**Responsive:**
- Desktop: Full layout with centered content
- Tablet: Adjusted padding and font sizes
- Mobile: Single column, full-width content

**Note:** This is a simplified placeholder page. The full Fellowship page with comprehensive content is available at `/launchpad` which includes detailed curriculum, eligibility requirements, and application process.

#### 3.4 Impact Page (`/impact`)

**Elements:**
- Impact metrics dashboard
- Project showcase gallery
- Success stories
- Geographic reach map
- Partner logos

#### 3.5 Contact Page (`/contact`)

**Form Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required, textarea)
- Submit button

**Additional:**
- Contact information sidebar
- Office locations
- Social media links
- Response time expectation

#### 3.6 Testimonials Page (`/testimonials`)

**Layout:**
- Grid of testimonial cards
- Filter by category
- Pagination
- Featured testimonials

### 4. Authentication Pages

#### 4.1 Login Page (`/login`)

**Layout:**
- Centered card on gradient background
- Logo at top
- Form in center
- Links at bottom

**Form Fields:**
- Email (text input, required)
- Password (password input, required)
- Remember me (checkbox)
- Submit button

**Links:**
- Forgot password
- Don't have an account? Register

**Validation:**
- Email format validation
- Required field validation
- Error messages below fields
- Loading state on submit

**Responsive:**
- Full-width card on mobile
- Max-width 400px on desktop

#### 4.2 Register Page (`/register`)

**Form Fields:**
- First Name (required)
- Last Name (required)
- Email (required, validated)
- Password (required, min 8 chars)
- Confirm Password (required, must match)
- Role selection (dropdown)
- Terms acceptance (checkbox, required)
- Submit button

**Validation:**
- Real-time password strength indicator
- Email uniqueness check
- Password match validation
- Terms acceptance required

**Links:**
- Already have an account? Login

### 5. Student Dashboard

#### 5.1 Student Overview (`/dashboard/student`)

**Layout:**
- Sidebar navigation (left, 280px)
- Main content area (right, flexible)
- Top bar with search and profile

**Sidebar Components:**
- Logo and branding
- Navigation menu:
  - Dashboard (active)
  - My Courses
  - Assignments
  - Profile
  - Certificates
- Logout button at bottom

**Top Bar:**
- Greeting message
- Global search input
- Notification bell with badge
- User profile dropdown

**Main Content:**
- Active Courses section (2 cards)
  - Course thumbnail
  - Title and instructor
  - Progress bar
  - Continue button
- Recent Achievements (3 cards)
  - Icon
  - Achievement name
  - Date earned
- Overall Progress card (right sidebar)
  - Circular progress indicator
  - Percentage complete
  - Motivational message
- Next Assignment card
  - Due date badge
  - Assignment title
  - Description
  - Submit button
- Recent Activity feed
  - Activity icons
  - Activity description
  - Timestamp

**Responsive:**
- Desktop: Sidebar + content
- Tablet: Collapsible sidebar
- Mobile: Bottom navigation, full-width content

#### 5.2 My Courses (`/dashboard/student/courses`)

**Layout:**
- DashboardLayout wrapper with student role
- Page header with title and description
- Stats cards section (4 across)
- Grid of course cards (3 columns on desktop, responsive)

**Stats Cards (4 across):**
- Enrolled (count with BookOpen icon, green theme)
- In Progress (count with Clock icon, yellow theme)
- Completed (count with CheckCircle icon, green theme)
- Not Started (count with Play icon, gray theme)
- Each card shows icon with colored background and count

**Course Card:**
- Thumbnail image (height: 192px, full-width)
- Status badge (top-right corner, yellow for "In Progress")
- Course title (bold, large)
- Instructor name (small, gray text)
- Module progress indicator (completed/total modules with BookOpen icon)
- Duration display (with Clock icon)
- Animated progress bar:
  - Shows percentage complete
  - Green color (#3a8a4d)
  - Animated on load with delay based on card index
- "Continue Learning" button (full-width, green, with Play icon)

**Interactions:**
- Hover effect on course cards (scale up, lift)
- Animated progress bars on page load
- Staggered animation for cards (delay based on index)
- Click course card or button to continue learning

**Animations:**
- Page elements fade in from bottom with stagger
- Stats cards animate in with sequential delay
- Course cards animate in with sequential delay
- Progress bars animate width from 0 to percentage
- Hover effects: scale 1.02 and translate Y -5px

**Responsive:**
- Desktop: 3-column grid for courses, 4 stats cards
- Tablet: 2-column grid for courses, 4 stats cards
- Mobile: Single column for courses, 2x2 grid for stats cards

#### 5.3 Assignments (`/dashboard/student/assignments`)

**Layout:**
- List view with cards
- Filter tabs (All, Pending, Submitted, Graded)
- Sort dropdown

**Assignment Card:**
- Assignment title
- Course name
- Due date with countdown
- Status badge
- Points possible
- Action button (Submit/View)

**Assignment Detail Modal:**
- Full description
- Instructions
- File upload area
- Text submission area
- Submit button
- Previous submissions (if any)

#### 5.4 Profile (`/dashboard/student/profile`)

**Sections:**
- Profile photo upload
- Personal information form
  - First name, Last name
  - Email (read-only)
  - Phone
  - Date of birth
  - Gender
- Address information
  - Street address
  - City, State
  - Country, Postal code
- Bio (textarea)
- Change password section
- Save button

**Validation:**
- Required fields marked
- Format validation
- Success/error messages

#### 5.5 Events (`/dashboard/student/events`)

**Layout:**
- Sidebar navigation (left, 280px)
- Main content area with event grid
- Top bar with search and filters

**Top Bar:**
- Page title and description
- Search input for events
- Notification bell
- User profile section

**Filter Bar:**
- All Events button
- My Registrations button
- Upcoming button

**Stats Cards (3 across):**
- Total Events (count with icon)
- My Registrations (count with icon)
- Next Event (date with icon)

**Event Grid:**
- 2-column grid layout (responsive)
- Event cards with:
  - Event image with hover zoom effect
  - Type badge (Workshop, Conference, etc.)
  - Registration status badge (if registered)
  - Event title
  - Event description (truncated)
  - Date with Calendar icon
  - Time with Clock icon
  - Location with MapPin icon
  - Spots available progress bar
  - Registration count display
  - Action button (Register Now / Already Registered)

**Event Card Details:**
- Image: 192px height with gradient overlay
- Type badge: Top-left corner
- Registration badge: Top-right corner (if registered)
- Content padding: 24px
- Spots available section with progress bar
- Disabled state for already registered events

**Interactions:**
- Hover effects on event cards (shadow, scale)
- Image zoom on card hover
- Click to register for events
- Filter events by registration status
- Search events by keywords

**Responsive:**
- Desktop: 2-column grid
- Tablet: 2-column grid
- Mobile: Single column

#### 5.6 Certificates (`/dashboard/student/certificates`)

**Layout:**
- Grid of certificate cards
- Download all button

**Certificate Card:**
- Certificate preview image
- Course name
- Issue date
- Certificate number
- Download PDF button
- Share button
- Verify button

### 6. Coordinator Dashboard

#### 6.1 Coordinator Overview (`/dashboard/coordinator`)

**Layout:**
- Sidebar (256px)
- Main content area
- Top bar

**Metrics Cards (4 across):**
- Active Students (count, trend)
- To Grade (count, urgent badge)
- Recent Submissions (count)
- Avg. Completion (percentage, trend)

**Student Activity Table:**
- Columns: Student Name, Course Title, Last Active, Status, Actions
- Sortable columns
- Pagination
- Row hover effects
- Action menu (3-dot icon)

**Upcoming Milestones (sidebar):**
- Timeline view
- Milestone cards with:
  - Icon
  - Title
  - Date
  - Description
  - Action button

**Platform Update Card:**
- Gradient background
- Title and description
- CTA button
- Decorative icon

#### 6.2 Students Management (`/dashboard/coordinator/students`)

**Features:**
- Student list with filters
- Search functionality
- Bulk actions
- Export to CSV

**Student Card:**
- Profile photo
- Name and email
- Enrolled courses count
- Overall progress
- Last active
- View details button

**Student Detail View:**
- Full profile information
- Course enrollment history
- Assignment submissions
- Performance analytics
- Communication history
- Notes section

#### 6.3 Assignment Grading (`/dashboard/coordinator/assignments`)

**Layout:**
- List of pending assignments
- Filter by course
- Sort by due date

**Grading Interface:**
- Student submission view
- File preview/download
- Grading rubric
- Points input
- Feedback textarea
- Submit grade button
- Return for revision option

#### 6.4 Reports (`/dashboard/coordinator/reports`)

**Report Types:**
- Student progress report
- Course completion report
- Assignment submission report
- Performance analytics

**Features:**
- Date range selector
- Export options (PDF, CSV, Excel)
- Charts and visualizations
- Printable format

#### 6.5 Messages (`/dashboard/coordinator/messages`)

**Layout:**
- Inbox list (left panel)
- Message detail (right panel)
- Compose button

**Features:**
- Unread message indicator
- Search messages
- Filter by sender
- Reply functionality
- Attachment support

### 7. Admin Dashboard

#### 7.1 Admin Overview (`/dashboard/admin`)

**Layout:**
- Sidebar with admin branding
- Main content area
- Top bar with global search

**Sidebar Navigation:**
- Management Section:
  - System Overview (active)
  - Team Members (User Management)
  - Events
- Insights Section:
  - Analytics
  - Settings

**Health Metrics (4 cards):**
- Total Users (count, trend)
- Active Courses (count, trend)
- System Uptime (percentage, status)
- Pending Approvals (count, alert)

**Platform Activity Table:**
- Columns: Action, Performed By, Date, Status
- Color-coded status badges
- Pagination
- Export functionality

**Quick Actions (sidebar):**
- Create New User
- Assign Roles
- Launch New Course
- (Each with icon and description)

**Weekly Digest Card:**
- Summary of pending tasks
- Security patches notification
- Review button

#### 7.2 User Management (`/dashboard/admin/users`)

**Layout:**
- Sidebar with admin navigation (left, 288px)
- Main content area with user table
- Top bar with search and action buttons

**Top Bar:**
- Page title: "User Management"
- Global search input (396px width)
- Notification bell with badge
- Admin profile section

**Action Bar:**
- Role filter dropdown (All Roles, Student, Coordinator, Admin)
- Status filter dropdown (All Status, Active, Inactive, Pending)
- Export button with Download icon
- Add New User button (primary CTA with Plus icon)

**Stats Cards (4 across):**
- Total Users (count)
- Active Users (count in green)
- Inactive Users (count in orange)
- Pending Users (count in blue)

**User Table:**
- Columns: User, Email, Role, Status, Joined, Actions
- User column: Avatar circle with initial + full name
- Email column: Email address
- Role column: Colored badge (Admin: red, Coordinator: blue, Student: green)
- Status column: Colored badge (Active: green, Inactive: gray, Pending: orange)
- Joined column: Formatted date
- Actions column: Edit and Delete icon buttons

**Features:**
- Real-time search by name/email
- Multi-filter support (role + status)
- Hover effects on table rows
- Inline CRUD operations
- Export functionality
- Responsive table layout

**Add/Edit User Modal:**
- Modal overlay with centered card (fixed positioning, z-index 50)
- Semi-transparent black backdrop (bg-black/50)
- Modal animations:
  - Fade in/out for overlay (opacity 0 → 1)
  - Scale animation for modal (scale 0.95 → 1)
  - Exit animations on close
- Header: Title ("Add New User" or "Edit User") + Close button (X icon)
- Form fields:
  - Name (text input, required, placeholder: "Enter full name")
  - Email Address (email input, required, placeholder: "Enter email address")
  - Role (dropdown: Student, Coordinator, Admin)
  - Status (dropdown: Active, Inactive, Pending)
- Form styling:
  - 2px border (border-gray-200)
  - Focus state: red border (focus:border-red-600)
  - Consistent padding (px-4 py-3)
  - Rounded corners (rounded-lg)
- Footer actions:
  - Cancel button (secondary, border-2 border-gray-200)
  - Create User / Save Changes button (primary, bg-red-600)
  - Flex layout with gap-3
- Form validation on submit
- Auto-close on successful save
- AnimatePresence wrapper for smooth transitions

**Delete Confirmation Modal:**
- Modal overlay with centered card
- Semi-transparent black backdrop
- Same animation pattern as Add/Edit modal
- Header: "Delete User" title + Close button
- Confirmation message with user name highlighted
- Warning text: "This action cannot be undone"
- Footer actions:
  - Cancel button (secondary)
  - Delete User button (primary, bg-red-600)

**CRUD Operations:**
- **Create**: 
  - Click "Add New User" button (top-right, with UserPlus icon)
  - Modal opens with empty form
  - Fill in Name, Email, Role, Status
  - Click "Create User" button
  - New user added to table with auto-generated ID and join date
  - Modal closes automatically
  - Form resets to default values
  
- **Read**: 
  - View all users in paginated table
  - Real-time search by name/email
  - Filter by role (All, Student, Coordinator, Admin)
  - Filter by status (All Status, Active, Inactive, Pending)
  - Stats cards show filtered counts
  
- **Update**: 
  - Click Edit icon (pencil) in Actions column
  - Modal opens pre-filled with user data
  - Modify any field (Name, Email, Role, Status)
  - Click "Save Changes" button
  - User data updated in table
  - Modal closes automatically
  - Form resets to default values
  
- **Delete**: 
  - Click Delete icon (trash) in Actions column
  - Confirmation modal appears
  - Shows user name to be deleted
  - Click "Delete User" to confirm or "Cancel" to abort
  - User removed from table
  - Modal closes automatically

**State Management:**
- `users` state: Array of user objects (initialized from initialUsers)
- `searchTerm` state: String for search input
- `filterRole` state: String for role filter ("All" by default)
- `showCreateModal` state: Boolean for create modal visibility
- `showEditModal` state: Boolean for edit modal visibility
- `showDeleteModal` state: Boolean for delete modal visibility
- `selectedUser` state: Object holding user being edited/deleted (null by default)
- `formData` state: Object with name, email, role, status fields

**Event Handlers:**
- `handleCreate()`: Creates new user with auto-generated ID and join date
- `handleEdit()`: Updates user by mapping over users array
- `handleDelete()`: Filters out deleted user from array
- `openEditModal(user)`: Sets selectedUser and pre-fills formData
- `openDeleteModal(user)`: Sets selectedUser for confirmation

**Interactions:**
- Search filters users in real-time (case-insensitive)
- Role dropdown updates filtered results immediately
- Status dropdown updates filtered results immediately
- Edit button pre-fills modal with current user data
- Delete shows confirmation dialog with user name
- Click outside modal overlay to close (onClick on backdrop)
- Close button (X icon) in modal header
- Smooth animations using Framer Motion AnimatePresence
- Form inputs update formData state on change
- Stats cards reflect current filtered user counts

**Responsive:**
- Desktop: Full layout with sidebar
- Tablet: Collapsible sidebar, scrollable table
- Mobile: Bottom navigation, stacked cards instead of table

#### 7.3 Role Assignment (`/dashboard/admin/roles`)

**Layout:**
- Role list
- Permission matrix
- User assignment

**Features:**
- Create custom roles
- Assign permissions
- View users with role
- Edit role permissions
- Delete custom roles (system roles protected)

**Permission Categories:**
- User Management
- Course Management
- Content Management
- System Settings
- Reports & Analytics

#### 7.4 Course Management (`/dashboard/admin/courses`)

**Course List:**
- Grid or list view toggle
- Filters: Published, Draft, Category
- Search by title
- Sort options

**Course Card:**
- Thumbnail
- Title
- Instructor
- Enrollment count
- Status badge
- Edit/Delete actions

**Course Editor:**
- Basic information tab
- Modules & lessons tab
- Assignments tab
- Settings tab
- Publish/Unpublish toggle

**Module Builder:**
- Drag-and-drop reordering
- Add/edit/delete modules
- Add lessons to modules
- Preview functionality

#### 7.5 Analytics (`/dashboard/admin/analytics`)

**Dashboard Sections:**
- User growth chart (line graph)
- Course enrollment trends (bar chart)
- Completion rates (pie chart)
- Geographic distribution (map)
- Top performing courses (table)
- User engagement metrics

**Filters:**
- Date range picker
- Course filter
- Role filter
- Export options

#### 7.6 Settings (`/dashboard/admin/settings`)

**Layout:**
- Sidebar with admin navigation
- Main content area with tabbed interface
- Top bar with Save Changes button and success notification

**Tab Navigation:**
- General
- Email
- Security
- Integrations
- Backup

**General Settings Tab:**
- Site name input field
- Site description textarea
- Timezone dropdown (Asia/Karachi, UTC, EST, GMT)
- Language dropdown (English, Urdu, Arabic)
- Logo upload section with preview and upload button

**Email Settings Tab:**
- SMTP Configuration:
  - SMTP Host input
  - SMTP Port input
  - From Email input
  - From Name input
- Test Email Configuration card:
  - Blue info card with Mail icon
  - Send Test button to verify settings

**Security Settings Tab:**
- Password Policy checkboxes:
  - Minimum 8 characters (checked by default)
  - Require uppercase letters (checked by default)
  - Require numbers (checked by default)
  - Require special characters
- Session Timeout input (minutes)
- Two-Factor Authentication toggle:
  - Enable 2FA for all admin users checkbox
- Security Audit card:
  - Red info card with Shield icon
  - Last audit date display
  - Run Audit button

**Integrations Tab:**
- API Key section:
  - Password-masked API key input (read-only)
  - Key icon button to reveal/copy
- Integration toggles (2-column grid):
  - Google Analytics card with toggle switch
  - AWS S3 card with toggle switch
  - Each card shows integration name and description

**Backup Settings Tab:**
- Backup Schedule dropdown:
  - Daily at 2:00 AM
  - Every 6 hours
  - Every 12 hours
  - Weekly
- Retention Period input (days)
- Last Backup status card:
  - Green info card with Database icon
  - Last backup date, time, and size
  - Backup Now button
- Backup History table:
  - Columns: Date, Size, Status, Actions
  - Status badges (Success/Failed)
  - Restore button for each backup

**Features:**
- Tab-based navigation with active state highlighting
- Save Changes button in top bar
- Success notification toast on save
- Consistent form styling with focus states
- Icon-enhanced info cards for actions
- Toggle switches for enable/disable features

**Responsive:**
- Desktop: Full layout with sidebar
- Tablet: Collapsible sidebar, stacked forms
- Mobile: Bottom navigation, single column forms

#### 7.7 Event Management (`/dashboard/admin/events`)

**Layout:**
- Sidebar with admin navigation
- Main content area with event list
- Top bar with search and filters

**Action Bar:**
- Filter button
- Status dropdown (All Events, Upcoming, Past, Cancelled)
- Create New Event button

**Stats Cards (4 across):**
- Total Events (count)
- Total Registrations (count)
- Avg. Attendance (percentage)
- Next Event (date)

**Event List:**
- Horizontal event cards with:
  - Event image (left side)
  - Event details (right side)
  - Type badge
  - Status badge
  - Date, time, location icons with info
  - Registration progress bar
  - Action buttons (View Details, Edit Event, View Participants, Delete)

**Event Card Details:**
- Title and description
- Date with Calendar icon
- Time with Clock icon
- Location with MapPin icon
- Registration count with progress bar
- Participant count button

**Responsive:**
- Desktop: Full horizontal layout
- Tablet: Stacked layout
- Mobile: Single column

### 8. Shared Components

#### 8.1 Navbar Component (`components/Navbar.tsx`)

**Layout:**
- Fixed header at top of page (z-index: 50)
- Backdrop blur with semi-transparent background (bg-white/95 dark:bg-[#151d17]/95)
- Border bottom (border-slate-200 dark:border-[var(--color-primary)]/10)
- Max-width container (max-w-7xl) with horizontal padding
- Height: 80px (h-20)

**Desktop Navigation (lg breakpoint and above):**
- Logo section (left):
  - HimmatKaar logo image (40x40px, rounded-lg)
  - "Himmatkaar" text (text-xl font-bold)
  - Hover effect: scale-105 on logo
- Navigation menu (center):
  - HOME link (active state with border-bottom-2 border-[var(--color-primary)])
  - ABOUT US dropdown menu
  - PROGRAMME dropdown menu
  - HAPPENINGS link
  - CONTACT US link
  - All links: text-sm font-bold uppercase
  - Hover: text-[var(--color-primary)]
- Action buttons (right):
  - Login button (text-sm font-bold, hover:bg-[var(--color-primary)]/5)
  - Apply Now button (bg-[var(--color-primary)], shadow-lg)

**Dropdown Menus:**
- **About Us Dropdown:**
  - Trigger: ABOUT US button with ChevronDown icon
  - Opens on hover (onMouseEnter/onMouseLeave)
  - Menu items:
    - About Himmatkaar (links to /about)
    - Our Team (links to /team)
  - Styling:
    - Position: absolute top-full left-0 mt-2
    - Width: 192px (w-48)
    - Background: white (dark:bg-slate-900)
    - Border: border-slate-200 (dark:border-slate-800)
    - Rounded: rounded-lg
    - Shadow: shadow-xl
    - Padding: py-2
  - Menu item styling:
    - Padding: px-4 py-2
    - Font: text-sm font-semibold
    - Hover: bg-slate-50 (dark:bg-slate-800) and text-[var(--color-primary)]

- **Programme Dropdown:**
  - Trigger: PROGRAMME button with ChevronDown icon
  - Opens on hover (onMouseEnter/onMouseLeave)
  - Menu items:
    - Launchpad (links to /launchpad)
    - Fellowship (links to /fellowship)
    - Impact (links to /impact)
  - Same styling as About Us dropdown

**Mobile Navigation (below lg breakpoint):**
- Hamburger menu button (right side):
  - Menu icon when closed
  - X icon when open
  - Size: 28px
- Mobile menu overlay:
  - Fixed position (top-20 left-0 right-0)
  - Semi-transparent background with backdrop blur
  - Border bottom
  - Shadow: shadow-2xl
  - Max height: calc(100vh - 5rem) with overflow-y-auto
- Mobile menu structure:
  - HOME link
  - Divider
  - "About Us" section label (text-xs font-bold uppercase)
    - About Himmatkaar (indented with pl-4)
    - Our Team (indented with pl-4)
  - Divider
  - "Programme" section label (text-xs font-bold uppercase)
    - Launchpad (indented with pl-4)
    - Fellowship (indented with pl-4)
    - Impact (indented with pl-4)
  - Divider
  - HAPPENINGS link
  - CONTACT US link
  - Divider
  - Login button (centered)
  - Apply Now button (centered, primary style)
- All links: text-base font styling
- Section labels: text-slate-500 uppercase tracking-wider
- Dividers: border-slate-200 (dark:border-slate-800)

**State Management:**
- `mobileMenuOpen`: Boolean for mobile menu visibility
- `aboutDropdownOpen`: Boolean for About Us dropdown visibility (desktop)
- `programDropdownOpen`: Boolean for Programme dropdown visibility (desktop)

**Animations:**
- Mobile menu: Framer Motion AnimatePresence
  - Initial: opacity 0, height 0
  - Animate: opacity 1, height auto
  - Exit: opacity 0, height 0
- Logo hover: scale-105 transition
- Dropdown menus: Conditional rendering on hover state

**Interactions:**
- Desktop dropdowns open on mouse enter, close on mouse leave
- Mobile menu toggles on hamburger button click
- All navigation links close mobile menu on click
- Smooth transitions for all hover states

**Responsive Breakpoints:**
- Desktop navigation: lg (1024px) and above
- Mobile navigation: below lg (< 1024px)

**Dark Mode Support:**
- Background: bg-white/95 (light) / bg-[#151d17]/95 (dark)
- Text: text-slate-900 (light) / text-white (dark)
- Borders: border-slate-200 (light) / border-[var(--color-primary)]/10 (dark)
- Dropdown backgrounds: bg-white (light) / bg-slate-900 (dark)

#### 8.2 Buttons

**Variants:**
- Primary: Solid background, white text
- Secondary: Outline, colored text
- Ghost: Transparent, colored text
- Danger: Red background, white text

**Sizes:**
- Small: 32px height
- Medium: 40px height
- Large: 48px height

**States:**
- Default
- Hover (brightness increase)
- Active (pressed)
- Disabled (opacity 50%)
- Loading (spinner icon)

#### 8.2 Form Inputs

**Types:**
- Text input
- Email input
- Password input (with show/hide toggle)
- Textarea
- Select dropdown
- Checkbox
- Radio button
- File upload
- Date picker

**States:**
- Default
- Focus (ring effect)
- Error (red border, error message)
- Disabled
- Read-only

#### 8.3 Cards

**Structure:**
- Container with border/shadow
- Optional header
- Content area
- Optional footer

**Variants:**
- Default (white background)
- Elevated (shadow)
- Outlined (border only)
- Gradient (colored background)

#### 8.4 Modals

**Structure:**
- Overlay (semi-transparent black)
- Modal container (centered)
- Header with title and close button
- Content area
- Footer with action buttons

**Animations:**
- Fade in overlay
- Scale up modal
- Fade out on close

#### 8.5 Notifications/Toasts

**Types:**
- Success (green)
- Error (red)
- Warning (yellow)
- Info (blue)

**Position:**
- Top right corner
- Auto-dismiss after 5 seconds
- Close button

#### 8.6 Loading States

**Variants:**
- Spinner (circular)
- Skeleton screens
- Progress bar
- Shimmer effect

### 9. Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) { }

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```

### 10. Accessibility

**Requirements:**
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Alt text for images
- ARIA labels
- Color contrast ratios (4.5:1 minimum)
- Skip to main content link

### 11. Animations

**Principles:**
- Subtle and purposeful
- Duration: 200-300ms
- Easing: ease-in-out
- Respect prefers-reduced-motion

**Common Animations:**
- Fade in/out
- Slide in/out
- Scale up/down
- Hover lift effect
- Loading spinners
- Progress indicators

### 12. Icons

**Library:** Lucide React

**Common Icons:**
- Navigation: Home, User, Settings, LogOut
- Actions: Edit, Delete, Add, Save, Cancel
- Status: Check, X, Alert, Info
- Content: File, Image, Video, Document
- Communication: Mail, Message, Bell
- Social: Share, Like, Comment

**Size Guidelines:**
- Small: 16px
- Medium: 20px
- Large: 24px
- XLarge: 32px


### 13. Events Management Screens

#### 13.1 Admin Event Management (`/dashboard/admin/events`)

**Layout:**
- Sidebar with admin navigation
- Main content area with event list
- Top bar with search and create button

**Components:**
- Event stats cards (4 across):
  - Total Events
  - Total Registrations
  - Average Attendance
  - Next Event Date
- Filter and sort controls
- Event list/grid view toggle
- Create Event button (primary CTA)

**Event Card (List View):**
- Event image (left side, 320px width)
- Event details (right side):
  - Title and description
  - Date, time, location icons with info
  - Registration progress bar
  - Action buttons (View, Edit, View Participants, Delete)
- Status badge (upcoming/completed/cancelled)
- Event type badge

**Create Event Modal:**
- Form fields:
  - Event Title (required)
  - Description (textarea, required)
  - Date (date picker, required)
  - Time (text input)
  - Location (text input, required)
  - Event Type (dropdown, required)
  - Capacity (number input, required)
  - Event Image URL (text input)
- Cancel and Create buttons
- Form validation

**Features:**
- Search events by title
- Filter by status (All, Upcoming, Past, Cancelled)
- Real-time registration count
- Progress bars showing capacity utilization
- Quick actions menu

**Responsive:**
- Desktop: Full layout with sidebar
- Tablet: Collapsible sidebar, stacked event cards
- Mobile: Bottom navigation, single column

#### 13.2 Student Events Page (`/dashboard/student/events`)

**Layout:**
- Sidebar navigation (left)
- Main content area (right)
- Top bar with search and profile

**Filter Bar:**
- All Events button
- My Registrations button
- Upcoming button
- Filter icon

**Stats Cards (3 across):**
- Total Events (with calendar icon)
- My Registrations (with checkmark icon)
- Next Event (with clock icon)

**Event Grid:**
- 2-column grid on desktop
- 1-column on mobile
- Event cards with:
  - Event image (top, 192px height)
  - Event type badge (top-left)
  - Registration status badge (top-right, if registered)
  - Event title and description
  - Date, time, location details
  - Spots available section with progress bar
  - Register/Already Registered button

**Event Card States:**
- Not Registered: Green "Register Now" button
- Registered: Gray "Already Registered" button with checkmark
- Full: Disabled button with "Event Full" text

**Interactions:**
- Click event card to view details
- Click register button to register
- Hover effects on cards
- Smooth animations

**Responsive:**
- Desktop: 2-column grid
- Tablet: 2-column grid
- Mobile: 1-column grid, full-width cards

#### 13.3 Event Detail Modal (Future)

**Layout:**
- Full-screen modal overlay
- Close button (top-right)
- Scrollable content

**Sections:**
- Hero image
- Event title and description
- Event details (date, time, location, capacity)
- Event agenda/schedule
- Speakers (if any)
- Registration form
- Similar events

**Actions:**
- Register button (primary)
- Add to calendar
- Share event
- Close modal

#### 13.4 My Events Page (Future Enhancement)

**Layout:**
- Calendar view option
- List view option
- Filter by upcoming/past

**Event Categories:**
- Upcoming Events
- Past Events
- Cancelled Events

**Event Card:**
- Event thumbnail
- Title and date
- Registration status
- Check-in code (for upcoming events)
- Certificate download (for completed events)
- Feedback button (for completed events)

#### 13.5 Event Notifications

**Notification Types:**
- Registration confirmation (green)
- Event reminder (blue)
- Event update (yellow)
- Event cancellation (red)
- Certificate ready (green)

**Notification Display:**
- Toast notification (top-right)
- In-app notification bell
- Email notification

#### 13.6 Event Registration Flow

```
Browse Events → Click Event Card → View Details → 
Click Register → Confirmation Modal → Success Message → 
Email Confirmation → Event Reminder → Attend Event → 
Mark Attendance → Receive Certificate
```

#### 13.7 Event Color Coding

**By Status:**
- Upcoming: Blue (#2563eb)
- Completed: Green (#10b981)
- Cancelled: Red (#ef4444)
- Full: Orange (#f59e0b)

**By Type:**
- Workshop: Purple
- Conference: Blue
- Bootcamp: Orange
- Community Service: Green
- Career Fair: Indigo
- Webinar: Cyan

#### 13.8 Event Accessibility

**Requirements:**
- Keyboard navigation for all actions
- Screen reader support for event details
- ARIA labels for buttons and links
- Focus indicators
- Alt text for event images
- Color contrast compliance

#### 13.9 Event Mobile Experience

**Optimizations:**
- Touch-friendly buttons (min 44px)
- Swipe gestures for navigation
- Bottom sheet for event details
- Sticky register button
- Optimized images for mobile
- Reduced data usage

#### 13.10 Event Loading States

**Skeleton Screens:**
- Event card skeletons while loading
- Shimmer effect
- Progressive image loading
- Lazy loading for images

**Empty States:**
- No events available
- No registrations yet
- Search no results
- Filter no results
