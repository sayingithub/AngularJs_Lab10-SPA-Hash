// Native Javascript - when hash changes
window.addEventListener('hashchange', function(){

    console.log('Hash Changed!' + window.location.hash);

    /* # is the fragment identifier within the html document-->
    this # tag provides opportunity to use for other purpose. Whatever string comes after the # tag, returns the same string as HASH value. For example, if you type
    http://localhost:63342/Lab10-SPA-Hash/index.html#bookmark2, then the hashvalue return as bookmark2, even though the bookamrk2 doesn't exists in html document
http://localhost:63342/Lab10-SPA-Hash/index.html#bookmark3, then the hashvalue return as bookmark3, even though the bookamrk3 doesn't exists in html document
    http://localhost:63342/Lab10-SPA-Hash/index.html#/bookmark/4, then the hashvalue return as /bookmark/4, even though the /bookmark/4 doesn't exists in html document */
    // This fragment identifier is the fundamental for the SPA (Single Page Application)

    //http://localhost:63342/Lab10-SPA-Hash/index.html#/bookmark/1
    if(window.location.hash === '#/bookmark/1'){
        console.log('Page 1 is cool');
    }

    //http://localhost:63342/Lab10-SPA-Hash/index.html#/bookmark/3
    if(window.location.hash === '#/bookmark/2'){
        console.log('Page 2 is cool');
    }

    //http://localhost:63342/Lab10-SPA-Hash/index.html#/bookmark/3
    if(window.location.hash === '#/bookmark/3'){
        console.log('Page 3 is cool');
    }

});