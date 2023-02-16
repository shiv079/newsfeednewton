console.log("hello world");






function dbx(a) {

  var rem =document.getElementsByClassName('remove');
  for(var p=0;p<rem.length;p++){
    rem[p].remove();
  }




  //    let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
  //   console.log(reponse.status)
  //   console.log(reponse.ok)
  //   return reponse.json()
  //  }).then((value) => {

  //   // console.log(value);
  //   let x = Object.values(value);
  //   let data = x;
  //   console.log(data);
  //    return data;
  //  })

  ;
  let pro = fetch(`https://inshorts.deta.dev/news?category=${a.value}`).then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
  }).then((value) => {

    var s = value.data;
    // console.log(s);
    for (var i = 0; i < s.length; i++) {
      var auth = s[i].author;
      // console.log(auth);
      var content = s[i].content;
      // console.log(content);
      filling(auth, content);

    }
  })

   var parent = document.querySelector('.parent');
  function filling(auth, content) {

    console.log(auth);
    console.log(content);
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var p = document.createElement('p');
    var div = document.createElement('div');
    // var l = document.createElement('i');
    div.setAttribute('class','remove');
    div.appendChild(span);
    div.appendChild(span1);
    div.appendChild(p);
    parent.appendChild(div);
  // parent.appendChild(l);

    span.innerHTML=auth;
    span1.innerHTML="hello";
    p.innerHTML=content;


  }










}






