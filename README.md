# Regex Validation
Simple JavaScript functions to extract emails, URLs, times, and hashtags if they are written correctly.

## What it does

Checks if these are valid:
- Emails (like user.name@example.com)
- URLs (like https://www.example.com)
- Times (like 14:30 or 2:30 pm)
- Hashtags (like #example)

## How to use it

```javascript
// Check an email
validateEmail("user@example.com")

// Check a URL
validateUrl("https://www.example.com")

// Check time
validateTime("2:30 pm")
validateTime("14:30")

// Check hashtag
validateHashtag("#example")
```

## Rules

Emails must:
- Start with letters
- Can have one dot
- End with proper domain

URLs must:
- Start with https://
- Have proper domain name

Time must be:
- 24-hour format (00:00 - 23:59) or
- 12-hour format (1:00 am - 12:59 pm)

Hashtags must:
- Start with #
- Only letters, numbers, underscores
- No spaces

## Testing

Test cases are included for each validator. Run the script to see validation results for various input formats.

Example test output:
```javascript
// URL Tests
"url: https://subdomain.example.org" // Valid
"url: https://www.jw.org/en/" // Valid

// Email Tests
"email: user@example.com" // Valid
"email: 1johndoe@yahoo.fr" // Invalid (starts with number)

// Hashtag Tests
"hashtag: #example" // Valid
"hashtag: #ThisIsAHashtag 123" // Invalid (contains space)

// Time Tests
"time: 4:20" // Invalid (needs AM/PM for 12-hour format)
"time: 2:30 PM" // Valid
```