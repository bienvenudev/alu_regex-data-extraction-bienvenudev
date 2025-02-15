// email validation
function validateEmail(email) {
  const regex = /^[a-z]+\.?[a-z]*[0-9]*@[a-z]+\.[a-z]+\.?[a-z]+$/g;
  return email.match(regex);
}

//url validation
function validateUrl(url) {
  const regex =
    /^https:[/]{1,2}[\w]+\.[\w]+(\.[a-z]+)(\/[a-z]+\/?)?(\.[a-z]+\/?)?$/g;
  return url.match(regex);
}

// time validation 
function validateTime(time) {
  const regex =
    /^(?:(?:[01][0-9]|2[0-3]):[0-5][0-9]|(?:0?[1-9]|1[0-2]):[0-5][0-9]\s?(?:[ap]m))$/gi;
  return time.match(regex);
}

// hashtag validation
function validateHashtag(hashtag) {
  const regex = /^#\w+$/g;
  return hashtag.match(regex);
}


// tests ...

// tests for url
console.log(
  "url: https://www.example.com",
  validateUrl("https://www.example.com")
);
console.log(
  "url: https://www.example.co.uk",
  validateUrl("https://www.example.co.uk")
);
console.log(
  "url: https://subdomain.example.org",
  validateUrl("https://subdomain.example.org")
);
console.log(
  "url: https://subdomain.example.org",
  validateUrl("https://subdomain.example.org/page")
);
console.log(
  "url: https://www.jw.org/en/",
  validateUrl("https://www.jw.org/en/")
);

console.log("---");

//tests for email
console.log("email: user@example.com", validateEmail("user@example.com"));
console.log(
  "email: firstname.lastname@company.co.uk",
  validateEmail("firstname.lastname@company.co.uk")
);
console.log(
  "email: b.cyuzuzo@alustudent.com",
  validateEmail("b.cyuzuzo@alustudent.com")
);
console.log(
  "email: testemail123@yahoo.fr",
  validateEmail("testemail123@yahoo.fr")
);
console.log("email: 1johndoe@yahoo.fr", validateEmail("1johndoe@yahoo.fr")); // null no digit expected at the start of the email
console.log(
  "email: maryjane12@amazon.co.uk",
  validateEmail("maryjane12@amazon.co.uk")
);

console.log("---");

// tests for hashtags
console.log("hashtag: #example", validateHashtag("#example"));
console.log("hashtag: #ThisIsAHashtag", validateHashtag("#ThisIsAHashtag"));
console.log(
  "hashtag: #ThisIsAHashtag 123",
  validateHashtag("#ThisIsAHashtag 123")
); // null no space expected

console.log("---");

// tests for time
console.log("time: 4:20", validateTime("4:20")); // null expects 04:20 or 4:20 pm
console.log("time: 2:30 PM", validateTime("2:30 PM"));
console.log("time: 2:30 am", validateTime("2:30 am"));

console.log("---");
