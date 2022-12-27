const data = [
  {
    Name: "Shubham singh",
    age: 20,
    city: "Kolkata",
    Languages: "Java",
    Framework: "Springboot",
    Image: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    Name: "Karan singh",
    age: 24,
    city: "Hyderabad",
    Languages: "Javascript",
    Framework: "Angular",
    Image: "https://randomuser.me/api/portraits/med/men/76.jpg",
  },
  {
    Name: "Rohan sharma",
    age: 25,
    city: "Bangalore",
    Languages: "python",
    Framework: "Django",
    Image: "https://randomuser.me/api/portraits/med/men/77.jpg",
  },
  {
    Name: "Rishika singh",
    age: 28,
    city: "Mumbai",
    Languages: "Java",
    Framework: "Hibernate",
    Image: "https://randomuser.me/api/portraits/med/women/78.jpg",
  },
  {
    Name: "Kritika Singh",
    age: 20,
    city: "Pune",
    Languages: "pyhton",
    Framework: "Flask",
    Image: "https://randomuser.me/api/portraits/med/women/79.jpg",
  },
];

function cvIterator(profiles) {
  let nextindex = 0;
  return {
    next: function () {
      return nextindex < profiles.length
        ? { value: profiles[nextindex++], done: false }
        : { done: true };
    },
  };
}
// button listener for next button
const candidates = cvIterator(data);
nextcv();
const next = document.getElementById("next");
next.addEventListener("click", nextcv);

function nextcv() {
  const currentcandidate = candidates.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentcandidate != undefined) {
    image.innerHTML = `<img src='${currentcandidate.Image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Nmae:${currentcandidate.Name}</li>
    <li class="list-group-item">${currentcandidate.age} years old</li>
    <li class="list-group-item">Lives in:${currentcandidate.city}</li>
    <li class="list-group-item">Primarily works on:
    ${currentcandidate.Languages}</li>
    <li class="list-group-item">Uses:${currentcandidate.Framework}Framework</li>
  </ul>`;
  } else {
    alert("end of application");
    window.location.reload();
  }
}
