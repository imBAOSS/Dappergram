##Component Hierarchy

**AuthFormContainer**
- AuthForm
  - Sign In
  - Sign Up

**NavigationContainer**
- Home
- ProfilePage
- Log Out

**PhotoFeedContainer**
- PhotoInfoContainer
  - UserInfoContainer
    - UserInfoItem
  - ImageContainer
    - ImageItem
  - LikeContainer
    - LikeItem
  - CommentContainer
    - CommentItem

**ProfilePageContainer**
- ProfilePageUserInfoContainer
  - ProfilePageUserInfoItem
- ProfileFeedContainer
  - ProfileFeedItem

##Routes
|Path  |Container|
|------|---------|
| "/" | "PhotoFeedContainer" |
| "/sign-up" | "AuthFormContainer"  |
| "/sign-in" | "AuthFormContainer"  |
| "/:username" | "ProfilePageContainer" |
| "/photo/:id" | "PhotoInfoContainer" |
