function showComment() {
    //get the length of the comments.
    var charLength = document.getElementById('comments').value.length;

    //find the characters left by subtracting 255 - length
    var charRemain = 255 - charLength;
    document.getElementById('numleft').innerHTML = (charRemain);

    //condition if we go over 255
    //disable the field or just make the value equal to the first 255 characters.

    // <!!! I have the disable textarea code below, I rather not use it !!!>

    // if (charRemain <= 0) {
    //   document.getElementById('comments').disabled = true;
    // }
  }

  function tweet() {
    // get name value from name input
    var name = document.getElementById('fullname').value;
    // get comment value
    var comment = document.getElementById('comments').value;
    // create @ name
    var nameHolder = name.split(' ');
    var atName = '';
    // loop through name and combine
    nameHolder.forEach(function(user) {
      atName += user;
    });

    // check name is not empty
    // check comment is not empty
    if (name.length > 0 && comment.length > 0) {
      // create div for tweet
      // create variables
      // main tweet div
      var tweetDiv = document.createElement('div');
      tweetDiv.setAttribute('class', 'tweetDiv')
      // user info div (image, name, logo)
      var userDiv = document.createElement('div');
      userDiv.setAttribute('class', 'userDiv');
      // user image div
      var userImg = document.createElement('img');
      userImg.setAttribute('src', 'https://images.assetsdelivery.com/compings_v2/luplupme/luplupme1606/luplupme160600094.jpg');
      userImg.setAttribute('class', 'userImg');
      // user name info div (full name, @name)
      var nameDiv = document.createElement('div');
      nameDiv.setAttribute('class', 'nameDiv');
      // full name div
      var userName = document.createElement('h2');
      userName.setAttribute('class', 'userName');
      userName.innerHTML = name;
      // @name div
      var displayAtName = document.createElement('p');
      displayAtName.setAttribute('class', 'atName');
      displayAtName.innerHTML = ('@' + atName);
      // logo div
      var logo = document.createElement('img');
      logo.setAttribute('src', 'https://rmutrecht.org/wp-content/uploads/sites/259/2017/07/logo-twitter.png');
      logo.setAttribute('class', 'logo');
      // display comment div
      var commentDiv = document.createElement('div');
      commentDiv.setAttribute('class', 'commentDiv');
      commentDiv.innerHTML = comment;
      // timestamp div
      var dateDiv = document.createElement('p');
      var date = new Date(Date.now());
      dateDiv.innerHTML = date;
      dateDiv.setAttribute('class', 'date');
      
      // append everything
      userDiv.appendChild(userImg);
      userDiv.appendChild(nameDiv);
      nameDiv.appendChild(userName);
      nameDiv.appendChild(displayAtName);
      userDiv.appendChild(logo);
      tweetDiv.appendChild(userDiv);
      tweetDiv.appendChild(commentDiv);
      tweetDiv.appendChild(dateDiv);
      document.getElementById('tweets').insertBefore(tweetDiv, document.getElementById('tweets').firstChild);
      // clear input
      clearForm();
    } else {
      // if empty, notify user
      window.alert('Name and comment may not be blank');
    }
  }

  // clear input form
  function clearForm() {
    document.getElementById('fullname').value = '';
    document.getElementById('comments').value = '';
    document.getElementById('numleft').innerHTML = '255';
  }