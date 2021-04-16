### DUMMYAPP

#### Concept:
lovely dog app (dogs, dogs and nothing except dogs!)

#### Api:
https://docs.thedogapi.com

#### State storing:
SessionStorage or LocaleStorage

#### Main features (by priority):
- watch dog img list
- filter dog img list by breed, img count, img type
- sort dog img list by breed
- refresh dog img list
- search withing dog img list by breed
- watch dog info (after clicking dog img)
- favourite/unfavourite dog img (withing dog img list & dog info)
- watch favourited dog imgs (within Favourites section)
- vote (like/dislike/favourite/unfavourite) for dog img (within voting section)
- watch liked dog imgs (within Likes section)
- watch disliked dog imgs (withing Dislikes section)
- watch voting history (within voting section)
- get random dog img to vote for (within voting section)

#### Additional features (by priority):
- remove dog imgs within Likes/Dislikes/Favourites section
- upload img from local storage
- change theme

![](https://media.istockphoto.com/vectors/cute-jack-russell-terrier-paws-up-over-wall-dog-face-cartoon-vector-vector-id1158317995?k=6&m=1158317995&s=170667a&w=0&h=uySmCgZA_iRsKCgICEibxNIrcdBcTAmr-BXIlEqwtu4=)
<details close>
<summary>Implementation details</summary>
<br>

  #### main:
  - within **Home** page:
    - display links to **Voting**, **Gallery** pages
  - within **Gallery** page:
    - display dog img list
    - display links to **Likes**/**Favourites**/**Dislikes** pages
    - favourite/unfavourite dog img
    - filter dog img list by breed, img count, img type
    - sort dog img list by breed
    - open **About Dog** page after clicking dog image
  - withing **About Dog** page:
    - display dog img + info block
    - display links to **Likes**/**Favourites**/**Dislikes** pages
  - within **Voting** page:
    - display dog img + voting block + voting history block
    - display links to **Likes**/**Favourites**/**Dislikes** pages
    - like, dislike, favourite, unfavourite dog img
    - get random dog img to vote for

  #### additional:
  - change theme
  - withing **Gallery** page:
    - upload local img to gallery
  - withing **Voting**, **Gallery**, **About Dog** page:
    - display *search by breed* field (opens search results within **Gallery** page)
</details>
