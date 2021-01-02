function get_href(path){
    host = window.location.host;
    origin = window.location.origin;
    pathname = window.location.pathname;
    path_arr = pathname.split("/");
    console.log(path_arr);
    a = "";
    for(i=1; i<path_arr.length-1; i++){
        console.log(path_arr[i]);
        a = a + "/" + path_arr[i];
    }
    console.log(a);
    window.open(a + "/" + path);
}
