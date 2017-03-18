


### Day 3

Majority of today's problems involved with getting AWS S3 to work properly. At one point, there was a bug where profile pictures weren't showing up correctly, but normal photos on the feed were. The bug was realizing that the links upon seeding had the same prefix for both profile pictures and photos, when they're actually different, so most of the links for profile photos ended up being broken.

### Day 4

Currently dealing with a bug where the logout button only works the first time, but not the second. This bug was due to asychronosity of the logout $.ajax request. Clicking on the logout button would still reload the /feed page, but because the logout action happened later than the redirect, the user was still signed in upon entering the onEnter hook.

### Day 5

Stuck with a bug where pressing log out in the guest profile, throws a TypeError: Cannot read property 'id' of null. (profile_page.jsx)

Also dealing with a bug where pressing the profile icon in the upper right hand corner will router.push the correct profile_page, but no redirect occurs. (nav_bar.jsx)
