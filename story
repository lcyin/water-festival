# High-Level User Stories for Summer Water Festival Ticket Sales Web Application

## For Attendees (End-Users)

### 1. View Festival Details
**As an attendee, I want to view the festival date, time, and location on the website, so that I can confirm the event details before purchasing a ticket.**
- **Acceptance Criteria**: Display "Summer Water Festival, August 8, 2025, 7 PM - 11 PM, Central District" prominently on the homepage.

### 2. Select Tickets
**As an attendee, I want to select either a Normal or VIP ticket and specify a quantity, so that I can purchase the exact tickets I need for myself and others.**
- **Acceptance Criteria**: Provide a dropdown for ticket type (Normal, VIP) and a number input for quantity, with real-time availability (150 Normal, 50 VIP).

### 3. Notify of Unavailability
**As an attendee, I want to be notified if my selected tickets are unavailable, so that I can adjust my purchase before proceeding.**
- **Acceptance Criteria**: Show an error message if requested quantity exceeds remaining tickets (e.g., "Only X Normal tickets left").

### 4. Pay Without Account
**As an attendee, I want to pay for my tickets using a credit or debit card without creating an account, so that I can complete my purchase quickly and easily.**
- **Acceptance Criteria**: Integrate Stripe Elements for card input, process payment without login, and redirect to a success page.

### 5. Receive Email with QR Code
**As an attendee, I want to receive an email with a PDF ticket containing a unique QR code after payment, so that I can present it for entry at the festival.**
- **Acceptance Criteria**: Send an email via SendGrid with a PDF attachment, including festival details, ticket type, and a scannable QR code.

## For Organizers (Admin)

### 6. Access Sales Dashboard
**As an organizer, I want to access a dashboard showing total tickets sold, remaining inventory, and revenue, so that I can monitor sales progress in real-time.**
- **Acceptance Criteria**: Display counts (e.g., "Normal: 50/150 sold, VIP: 20/50 sold") and total revenue, refreshed on page load.

### 7. Export Sales Data
**As an organizer, I want to export sales data as a CSV file, so that I can analyze or share it for financial reporting.**
- **Acceptance Criteria**: Provide a button to download a CSV with columns: order ID, ticket type, quantity, total price, email, timestamp.

### 8. Prevent Overselling
**As an organizer, I want the system to automatically stop selling a ticket type when its limit is reached, so that I don’t oversell the event.**
- **Acceptance Criteria**: Disable Normal ticket purchases at 150 sold and VIP at 50 sold, enforced via database checks.

## System-Wide (Implied Users)

### 9. Responsive Design
**As an attendee, I want the website to work seamlessly on both my phone and computer, so that I can buy tickets from any device I’m using.**
- **Acceptance Criteria**: Ensure responsive design (e.g., Bootstrap or CSS media queries) passes tests on mobile (iOS/Android) and desktop browsers.

### 10. Handle Concurrent Users
**As an organizer, I want the system to handle up to 200 users at once without crashing, so that ticket sales remain uninterrupted during peak demand.**
- **Acceptance Criteria**: Load test with 200 concurrent users completes purchases within 5 seconds each, with no errors.
