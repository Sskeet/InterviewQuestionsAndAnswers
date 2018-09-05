const posts = [
    {'title':'Posts One',body:'This is post one'},
    {'title':'Posts Two',body:'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post , index) =>{
            output += `
            <ul>
                <li>${post.title} - ${post.body}</li>
            </ul>
            `
        });
        document.body.innerHTML = output;
    },1000);
}

function createPosts(post){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        },2000);
    });
}

//promise
// createPosts({'title':'Posts three',body:'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async / await
async function init(){
    await createPosts({'title':'Posts three',body:'This is post three'});
    getPosts();
}

// Async / await / fetch
async function getUsers(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    console.log(data);
}
getUsers();


// ===========================================================


//promise all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//         setTimeout(resolve, 2000 , 'GoodBye')
//     })
// const promise4 = fetch()

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values)
// );


