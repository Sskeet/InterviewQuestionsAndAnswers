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

function createPosts(post , callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}

createPosts({'title':'Posts three',body:'This is post three'} , getPosts);

createPosts({'title':'Posts four',body:'This is post four'} , getPosts);