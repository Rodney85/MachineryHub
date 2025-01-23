# Construction Machinery Rental Landing Page PRD

## Product Overview
A modern, responsive landing page for a construction machinery rental platform that serves as the entry point for both equipment owners and renters. The page will showcase the platform's value proposition and facilitate user registration and login.

## User Goals
1. First-time visitors should:
   - Quickly understand the platform's purpose
   - Learn about key features and benefits
   - Be able to easily sign up
   - Access more information about the service

2. Returning users should:
   - Easily locate the login button
   - Navigate to specific sections quickly
   - Access support information
   - Contact the company if needed

## Technical Requirements

### Development Stack
SCAN CODE AND INSTALL DEPENDENCIES NEEDED FOR DEVELOPMENT
- Framework: Vite + React with TypeScript
- Styling: Tailwind CSS
- Routing: React Router v6
- Icons: React Icons
- Animations: Intersection Observer API and framer-motion
- Performance: Core Web Vitals optimization

### Browser Support
THE RESPONSIVE DESIGN REQUIREMENTS MUST BE MET{RESPONSIVE TO ALL SCREEN SIZES}
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome for Android)

### Performance Requirements
- Initial load time < 2 seconds
- First Contentful Paint < 1.5 seconds
- Time to Interactive < 3 seconds
- Performance score > 90 on Lighthouse
- Responsive from 320px to 2560px viewport widths

## Detailed Component Specifications

### Navigation Component
1. Header Structure
   - Position: Sticky
   - Height: 4rem (64px)
   - Background: Gradient (#0F172A to transparent)
   - Z-index: Highest priority

2. Navigation Elements
   - Logo (left-aligned)
   - Nav Links (center-aligned):
     - Home
     - About
     - Features
     - Contact
   - CTA Buttons (right-aligned):
     - Login (secondary style)
     - Register (primary style)

3. Mobile Navigation
   - Hamburger menu icon (right-aligned)
   - Slide-out menu panel
   - Animated menu transitions
   - Close button
   - Vertical link layout

### Hero Section
1. Layout
   - Full viewport height
   - Centered content
   - Maximum width: 1280px
   - Padding: 2rem (32px)

2. Content Elements
   - Main Heading:
     - Text: "Transforming Projects, Powering Progress"
     - Font: Inter Bold
     - Size: 4rem (64px) on desktop, 2.5rem (40px) on mobile
   
   - Subheading:
     - Text: "Connecting you with the right machinery, exactly when you need it"
     - Font: Inter Regular
     - Size: 1.5rem (24px) on desktop, 1.125rem (18px) on mobile

   - CTA Buttons:
     - "Start Listing" (primary)
     - "Browse Equipment" (secondary)
     - Size: Large (padding: 1rem 2rem)

3. Visual Elements
   - Background image: Construction site (optimized)
   - Gradient overlay: Linear gradient
   - Floating shapes: SVG elements
   - Animation: Subtle floating motion

### About Section
1. Layout
   - Two-column grid on desktop
   - Single column on mobile
   - Padding: 4rem (64px)
   - Gap: 2rem (32px)

2. Content Column
   - Section heading
   - Description text
   - Statistics display:
     - 4 key metrics
     - Animated number counting
     - Icon for each stat
     - Description below number

3. Visual Column
   - Image grid or illustration
   - 3x2 grid layout
   - Gap: 1rem (16px)
   - Border radius: 0.5rem (8px)

### Features Section
1. Grid Layout
   - 3x2 grid on desktop
   - 2x3 grid on tablet
   - 1x6 grid on mobile
   - Gap: 1.5rem (24px)
   - Padding: 4rem (64px)

2. Feature Cards
   - Icon (top)
   - Title (medium weight)
   - Description text
   - Hover effect: Scale and shadow
   - Background: Alternating colors
   - Padding: 1.5rem (24px)
   - Border radius: 0.5rem (8px)

### Footer Component
1. Layout
   - Four-column grid on desktop
   - Two-column grid on tablet
   - Single column on mobile
   - Background: Dark (#0F172A)
   - Padding: 4rem (64px) top/bottom

2. Content Sections
   - Company Info:
     - Logo
     - Description
     - Social links
   
   - Quick Links:
     - About Us
     - Features
     - Pricing
     - Contact
   
   - Contact Info:
     - Address
     - Phone
     - Email
     - Business hours
   
   - Newsletter:
     - Input field
     - Submit button
     - Privacy note

3. Bottom Bar
   - Copyright text
   - Legal links
   - Social icons
   - Padding: 1rem (16px)

## Design System

### Color Palette
- Primary: #0F172A (dark blue)
- Secondary: #3B82F6 (blue)
- Accent: #22C55E (green)
- Text: #1F2937 (gray-800)
- Background: #F8FAFC (slate-50)
- Success: #10B981
- Error: #EF4444
- Warning: #F59E0B

### Typography
1. Font Families
   - Primary: Inter
   - Fallback: system-ui

2. Font Sizes
   - Heading 1: 4rem (64px)
   - Heading 2: 3rem (48px)
   - Heading 3: 2rem (32px)
   - Body: 1rem (16px)
   - Small: 0.875rem (14px)

### Animation Specifications
1. Scroll Animations
   - Trigger: Intersection Observer
   - Duration: 600ms
   - Timing: ease-out
   - Fade in: 0 to 1 opacity
   - Slide up: 20px offset

2. Interactive Animations
   - Button hover: Scale 1.05
   - Card hover: Scale 1.02
   - Duration: 300ms
   - Timing: ease-in-out

## Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance
- Focus states for all interactive elements

## Success Metrics
1. Performance
   - Lighthouse score > 90
   - First Contentful Paint < 1.5s
   - Largest Contentful Paint < 2.5s

2. User Engagement
   - Bounce rate < 40%
   - Average session duration > 2 minutes
   - CTA click-through rate > 5%

3. Accessibility
   - WCAG 2.1 AA compliance
   - Zero accessibility errors
   - Keyboard navigation support

## Development Priorities
1. Core Structure and Layout
2. Responsive Design Implementation
3. Component Development
4. Animation Integration
5. Performance Optimization
6. Accessibility Implementation
7. Testing and QA

