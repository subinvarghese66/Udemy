// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)


//==========================ES7 & ES8 NOT WORKING IN INDIA=====================================//
//==========================ES7 & ES8 NOT WORKING IN INDIA=====================================//
//==========================ES7 & ES8 NOT WORKING IN INDIA=====================================//

const url = 'https://swapi.co/api/starships/9/'
const ds = async function getRequest(url){
  const data = await(fetch(url)
    .then(res => {
      return res.json()
    })
    .catch(err => {
      console.log('Error: ', err)
    })
  )
 .then(console.log)
}

var getData =async function() {
    try {
       const [starships] = await Promise.all(urls.map(url =>fetch(url)
       .then(response => response.json())
       ));
       console.log('starships',starships);
    } catch(err) {
        console.log(err);
    }
 }*/

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
