### Day 1 and 2 at imbaoss.com, posts: Week 8 Day 2 and Week 8 Day 3.

### Day 3

Majority of today's problems involved with getting AWS S3 to work properly. At one point, there was a bug where profile pictures weren't showing up correctly, but normal photos on the feed were. The bug was realizing that the links upon seeding had the same prefix for both profile pictures and photos, when they're actually different, so most of the links for profile photos ended up being broken.

### Day 4

Currently dealing with a bug where the logout button only works the first time, but not the second. This bug was due to asychronosity of the logout $.ajax request. Clicking on the logout button would still reload the /feed page, but because the logout action happened later than the redirect, the user was still signed in upon entering the onEnter hook.

### Day 5

Logout button does not appear in own profile. (profile_page.jsx)
- Solved this bug by tracing through each of the if logics in the render method to see where .id was being called on a null object. Set the if condition to check if something is null before entering the logic.

Also dealing with a bug where pressing the profile icon in the upper right hand corner will router.push the correct profile_page, but no redirect occurs from another profile page. (nav_bar.jsx)
- NavBarContainer is not passed in as a component within root.jsx. Is this a problem?
- profile to guest profile navigation doesn't work, guest profile navigation from any other url works.
**BUG** - Update: Navigation from profile router to guest router has been fixed. A new bug was introduced however. When clicking between profile to profile, or somehwere else to profile, there's a flicker that looks like a double render of the profile page component.

**BUG** Another bug: Visiting other profiles sometimes leaves remnants of previous profile's photo feed.
- Possible solution - clear feed on leave?

Bug with continual component updating due to receiving new props since componentWillReceiveProps(nextProps) called a fetchUser method.
- Without the conditional to check to make sure current params were different from next params. Fix was to add a conditional statment to check if current params was different from nextParams.

### Day 6
Biggest problem today was figuring out how to get the like ID in order to delete a like.
- fixed this major, time-consuming issue by passing in the entire like object via json.jbuilder, instead of just a list of users_id's.

Liking or unliking throws a Uncaught TypeError: Cannot read property 'type' of undefined. As a result, there's no re-rendering of the like button? **BUG** Not sure if the not re-rendering is a result of this bug, or a separate bug.
- Solved a lot of the type issues. Confirmed that the re-rendering was a different bug.

### Day 7
**BUG** Still having trouble with the like button not toggling correctly and sending incorrect requests to the server. It may be due to something out of sync.

**BUG** Clicking follow button re-arranges profile pictures... wtf?

**BUGSOLVED** Entering the page doesn't reflect current follow status correctly.
- Retraced path to realize that logic to determine whether or not user followee id was included in current user follower was meant for arrays, whereas objects were being returned.

**BUG** Clicking directly from one profile to the next only changes header. Retains pictures, and sometimes stats.

**BUG** Add comment input field does not span the entire parent.

npm packages to consider:
react-infinite (infinite scroll)
  (https://github.com/seatgeek/react-infinite)
react-infinite-scroller (more up to date)
  (https://github.com/CassetteRocks/react-infinite-scroller)
  (https://www.npmjs.com/package/react-infinite-scroll)
react-autosuggest (search)
